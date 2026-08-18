"use client";

import type { MouseEvent } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  Cloud,
  Code2,
  Database,
  Globe,
  Lightbulb,
  Smartphone,
} from "lucide-react";
import { consulting, services } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const serviceIcons = [Code2, Globe, Smartphone, Cloud, Database, BrainCircuit] as const;

function trackSpotlight(e: MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
}
export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-blue-500/[0.07] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Engineering, from <span className="text-gradient">idea to production</span>
            </>
          }
          description="Every engagement starts with the same question: what has to work, and what happens if it fails? Then we design, build, and run the system accordingly."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.1} className="h-full">
                <div
                  onMouseMove={trackSpotlight}
                  className="card-spotlight group relative h-full rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/30 hover:bg-white hover:shadow-[0_24px_60px_-24px_rgba(37,99,235,0.3)]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-slate-300 bg-gradient-to-br from-blue-400/20 to-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
                  <ul className="mt-5 space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* IT Consulting banner */}
        <Reveal delay={0.15}>
          <div className="group relative mt-6 overflow-hidden rounded-2xl border border-blue-400/25 bg-gradient-to-r from-blue-500/[0.14] via-white to-blue-500/[0.1] p-8 sm:p-10">
            <div
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-blue-400/30 bg-blue-500/15">
                  <Lightbulb className="h-7 w-7 text-blue-600" />
                </span>
                <div className="max-w-2xl">
                  <h3 className="font-display text-xl font-semibold text-slate-900 sm:text-2xl">{consulting.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{consulting.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2.5">
                    {consulting.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-full border border-slate-300 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-700"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <a
                href="#contact"
                className="group/cta inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-blue-400/40 bg-blue-500/15 px-6 py-3.5 text-sm font-semibold text-blue-700 transition-all hover:bg-blue-500/25 hover:text-blue-900"
              >
                Talk to an engineer
                <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
