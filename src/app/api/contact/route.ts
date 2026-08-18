import { NextResponse } from "next/server";
import { site } from "@/content/site";
import { getResend } from "@/lib/resend";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  /** Honeypot field — real users never fill it in. */
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Escape user-provided text before inlining it into the email HTML. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Plain, dependency-free HTML template for contact form inquiries. */
function renderInquiryHtml({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): string {
  return `
  <div style="font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#0f172a;">
    <p style="margin:0 0 4px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#64748b;">New contact inquiry</p>
    <h2 style="margin:0 0 20px;font-size:20px;line-height:1.3;">${escapeHtml(subject)}</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr>
        <td style="padding:6px 0;color:#64748b;width:72px;">Name</td>
        <td style="padding:6px 0;font-weight:600;">${escapeHtml(name)}</td>
      </tr>
      <tr>
        <td style="padding:6px 0;color:#64748b;">Email</td>
        <td style="padding:6px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#2563eb;">${escapeHtml(email)}</a></td>
      </tr>
    </table>
    <div style="margin-top:16px;padding:16px;border-radius:12px;background:#f8fafc;border:1px solid #e2e8f0;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</div>
    <p style="margin-top:24px;font-size:12px;color:#94a3b8;">Sent via the contact form on inezasmartgrid.com</p>
  </div>`;
}

// Minimal in-memory rate limiter (per server instance).
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_PER_WINDOW = 8;
const submissions: number[] = [];

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without doing anything.
  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  // Basic rate limiting.
  const now = Date.now();
  while (submissions.length && now - submissions[0] > RATE_WINDOW_MS) {
    submissions.shift();
  }
  if (submissions.length >= MAX_PER_WINDOW) {
    return NextResponse.json(
      { error: "Too many messages — please try again in a few minutes." },
      { status: 429 }
    );
  }

  const { name, email, subject, message } = payload;

  // Server-side validation (mirrors the client).
  // Note: the rate-limit counter is only incremented after a successful
  // send, so failed deliveries (e.g. an unconfigured provider) never lock
  // out genuine inquiries.
  if (
    typeof name !== "string" ||
    name.trim().length < 2 ||
    name.trim().length > 120
  ) {
    return NextResponse.json({ error: "Please provide your name." }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }
  if (typeof subject !== "string" || subject.trim().length < 2 || subject.trim().length > 160) {
    return NextResponse.json({ error: "Please choose a subject." }, { status: 400 });
  }
  if (typeof message !== "string" || message.trim().length < 10 || message.trim().length > 5000) {
    return NextResponse.json({ error: "Message must be between 10 and 5000 characters." }, { status: 400 });
  }

  // ------------------------------------------------------------------
  // Deliver the inquiry to the company inbox via Resend.
  // ------------------------------------------------------------------
  const resend = getResend();
  if (!resend) {
    console.warn("[contact] RESEND_API_KEY is not configured — skipping email delivery.");
    return NextResponse.json(
      { error: "Email delivery is not configured on this server yet. Please email us directly." },
      { status: 503 }
    );
  }

  // Until a domain is verified, Resend only allows sending from onboarding@resend.dev.
  const from = process.env.RESEND_EMAIL_FROM?.trim() || "Ineza SmartGrid <onboarding@resend.dev>";
  const to = process.env.CONTACT_EMAIL_TO?.trim() || site.email;

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Website] ${subject} — ${name}`,
      text: `New inquiry: ${subject}\n\nFrom: ${name} <${email}>\n\n${message}`,
      html: renderInquiryHtml({ name, email, subject, message }),
    });
    if (error || !data?.id) {
      throw new Error(error?.message ?? "Resend returned no message id.");
    }
    submissions.push(now);
  } catch (err) {
    console.error("[contact] Failed to send email", err);
    return NextResponse.json(
      { error: "We could not deliver your message. Please try again, or email us directly." },
      { status: 500 }
    );
  }

  console.info("[contact] New inquiry received", {
    name,
    email,
    subject,
    messageLength: message.length,
  });

  return NextResponse.json({
    ok: true,
    message: "Message received — we will get back to you within 24 hours.",
  });
}
