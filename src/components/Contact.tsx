"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Clock,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Twitter,
} from "lucide-react";
import { site } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const subjects = [
  "New platform build",
  "Scaling an existing system",
  "Cloud & infrastructure",
  "AI & automation",
  "Technical audit",
  "General inquiry",
] as const;
type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  /** Honeypot — humans never see this field. */
  website: string;
};
type FieldName = keyof FormState;

const initialForm: FormState = {
  name: "",
  email: "",
  subject: subjects[0],
  message: "",
  website: "",
};

const socialIcons = { Linkedin, Github, Twitter, Instagram } as const;

const inputCls =
  "w-full rounded-xl border border-slate-300 bg-white/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-blue-400/60 focus:outline-none focus:ring-2 focus:ring-blue-400/20";

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [preview, setPreview] = useState(false);

  const handleChange =
    (field: FieldName) =>
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = () => {
    const next: Partial<Record<FieldName, string>> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (form.message.trim().length < 10) {
      next.message = "Your message should be at least 10 characters.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const buildWhatsAppMessage = () =>
    [
      `*New Website Inquiry*`,
      ``,
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*Subject:* ${form.subject}`,
      `*Message:* ${form.message}`,
    ].join("\n");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setPreview(true);
  };

  const handleConfirm = () => {
    const waUrl = `https://wa.me/250794715042?text=${encodeURIComponent(buildWhatsAppMessage())}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setStatus("success");
    setPreview(false);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[130px]" />
        <div className="bg-grid mask-radial absolute inset-0 opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact Us"
          title={
            <>
              Have a system <span className="text-gradient">to build?</span>
            </>
          }
          description="Scaling an existing platform? Replacing manual processes with software? Tell us what you're building and where it stands — an engineer will respond within 24 hours."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info column */}
          <Reveal>
            <div className="flex h-full flex-col gap-5">
              <div className="relative overflow-hidden rounded-2xl border border-blue-400/25 bg-gradient-to-br from-blue-400/[0.12] to-white p-7">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-400/15 blur-2xl" aria-hidden="true" />
                <Mail className="relative h-8 w-8 text-blue-600" />
                <h3 className="relative mt-4 font-display text-lg font-semibold text-slate-900">Prefer email?</h3>
                <a
                  href={`mailto:${site.email}`}
                  className="relative mt-1.5 block text-base font-medium text-blue-600 transition-colors hover:text-blue-700"
                >
                  {site.email}
                </a>
                <p className="relative mt-2 text-sm text-slate-600">{site.responseTime}</p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <h4 className="mt-3 font-display text-sm font-semibold text-slate-900">Office</h4>
                  <p className="mt-1.5 text-sm text-slate-600">{site.address}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <h4 className="mt-3 font-display text-sm font-semibold text-slate-900">Response time</h4>
                  <p className="mt-1.5 text-sm text-slate-600">Within 24 hours</p>
                </div>
              </div>

              <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h4 className="font-display text-sm font-semibold text-slate-900">Follow us</h4>
                <div className="mt-4 flex gap-3">
                  {site.socials.map((social) => {
                    const Icon = socialIcons[social.icon];
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="grid h-10 w-10 place-items-center rounded-lg border border-slate-300 bg-slate-100 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-blue-400/40 hover:text-blue-600"
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={0.12}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 p-7 backdrop-blur sm:p-9"
            >
              <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" aria-hidden="true" />
              <div className="relative grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-700">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={handleChange("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={inputCls + (errors.name ? " border-rose-400/60" : "")}
                  />
                  {errors.name && (
                    <p id="contact-name-error" role="alert" className="mt-1.5 text-xs text-rose-400">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-700">
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={handleChange("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={inputCls + (errors.email ? " border-rose-400/60" : "")}
                  />
                  {errors.email && (
                    <p id="contact-email-error" role="alert" className="mt-1.5 text-xs text-rose-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative mt-5">
                <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-slate-700">
                  Subject
                </label>
                <div className="relative">
                  <select
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange("subject")}
                    className={inputCls + " cursor-pointer appearance-none pr-10"}
                  >
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="relative mt-5">
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="What are you building? What's the current state, and what does success look like?"
                  value={form.message}
                  onChange={handleChange("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className={inputCls + " resize-none" + (errors.message ? " border-rose-400/60" : "")}
                />
                {errors.message && (
                  <p id="contact-message-error" role="alert" className="mt-1.5 text-xs text-rose-400">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Honeypot — hidden from humans and screen readers */}
              <div className="absolute -left-[9999px] -top-[9999px]" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={handleChange("website")}
                />
              </div>

              {status === "success" && (
                <div
                  className="relative mt-5 flex items-start gap-3 rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4"
                  role="status"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <p className="text-sm font-semibold text-emerald-700">Opening WhatsApp…</p>
                    <p className="mt-0.5 text-xs text-emerald-600/80">
                      Your message is ready — confirm in WhatsApp to send it to our team.
                    </p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="relative mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(16,185,129,0.3)] transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:brightness-110"
              >
                Review & send via WhatsApp
                <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      {/* ── WhatsApp preview modal ──────────────────────────────── */}
      {preview && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Review your message"
          onClick={() => setPreview(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/10">
                <svg viewBox="0 0 24 24" fill="#25D366" className="h-5 w-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-slate-900">
                  Review your message
                </h3>
                <p className="text-xs text-slate-500">
                  This will open WhatsApp — review before sending.
                </p>
              </div>
            </div>

            {/* Message preview */}
            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="space-y-2.5 text-sm">
                <div className="flex gap-2">
                  <span className="shrink-0 font-semibold text-slate-700">Name:</span>
                  <span className="text-slate-600">{form.name}</span>
                </div>
                <div className="flex gap-2">
                  <span className="shrink-0 font-semibold text-slate-700">Email:</span>
                  <span className="text-slate-600">{form.email}</span>
                </div>
                <div className="flex gap-2">
                  <span className="shrink-0 font-semibold text-slate-700">Subject:</span>
                  <span className="text-slate-600">{form.subject}</span>
                </div>
                <div className="border-t border-slate-200 pt-2.5">
                  <span className="block font-semibold text-slate-700">Message:</span>
                  <p className="mt-1 whitespace-pre-wrap text-slate-600">
                    {form.message}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row-reverse">
              <button
                type="button"
                onClick={handleConfirm}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(37,211,102,0.35)] transition-all hover:brightness-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)]"
              >
                Confirm & send on WhatsApp
                <Send className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setPreview(false)}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
              >
                Edit message
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
