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
  Loader2,
  Mail,
  MapPin,
  Send,
  Twitter,
  XCircle,
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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setServerError(data.error ?? null);
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
      setServerError(null);
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
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
                    <p className="text-sm font-semibold text-emerald-700">Message sent!</p>
                    <p className="mt-0.5 text-xs text-emerald-600/80">
                      Thanks — an engineer will get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div
                  className="relative mt-5 flex items-start gap-3 rounded-xl border border-rose-500/25 bg-rose-500/10 p-4"
                  role="alert"
                >
                  <XCircle className="h-5 w-5 shrink-0 text-rose-600" />
                  <p className="text-sm text-rose-700">
                    {serverError ??
                      `Something went wrong. Please try again, or email us directly at ${site.email}.`}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="relative mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(37,99,235,0.3)] transition-all hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send to engineering
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
