"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  ChevronDown,
  CloudCog,
  Database,
  MessageSquare,
  Smartphone,
} from "lucide-react";
import { hero } from "@/content/site";
import NetworkCanvas from "@/components/NetworkCanvas";

const hubChips = [
  { Icon: BrainCircuit, label: "AI & Automation", cls: "left-[3%] top-[16%]", delay: 0 },
  { Icon: CloudCog, label: "Cloud Native", cls: "right-[1%] top-[10%]", delay: 1.4 },
  { Icon: Smartphone, label: "Mobile Apps", cls: "left-[0%] bottom-[14%]", delay: 0.7 },
  { Icon: Database, label: "Data & Insights", cls: "right-[0%] bottom-[8%]", delay: 2.1 },
] as const;

function OrbitalHub() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]" aria-hidden="true">
      {/* Connector lines from hub to satellites */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <defs>
          <linearGradient id="isg-conn" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22d3ee" stopOpacity="0.55" />
            <stop offset="1" stopColor="#6366f1" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <g stroke="url(#isg-conn)" strokeWidth="0.35" strokeDasharray="2.4 1.8">
          <line x1="50" y1="50" x2="17" y2="27" />
          <line x1="50" y1="50" x2="83" y2="24" />
          <line x1="50" y1="50" x2="13" y2="73" />
          <line x1="50" y1="50" x2="87" y2="69" />
        </g>
        <circle cx="17" cy="27" r="1.1" fill="#2563eb" className="animate-pulse-soft" />
        <circle cx="83" cy="24" r="1.1" fill="#1d4ed8" className="animate-pulse-soft" style={{ animationDelay: "0.8s" }} />
        <circle cx="13" cy="73" r="1.1" fill="#1d4ed8" className="animate-pulse-soft" style={{ animationDelay: "1.6s" }} />
        <circle cx="87" cy="69" r="1.1" fill="#2563eb" className="animate-pulse-soft" style={{ animationDelay: "2.4s" }} />
      </svg>

      {/* Orbit rings with satellite dots */}
      <div className="absolute inset-[11%] animate-spin-slow rounded-full border border-dashed border-blue-400/20">
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.9)]" />
        <span className="absolute bottom-[14%] right-[10%] h-1 w-1 rounded-full bg-blue-400/80" />
      </div>
      <div className="absolute inset-[24%] animate-spin-slower rounded-full border border-blue-400/10">
        <span className="absolute left-[7%] top-[32%] h-1 w-1 rounded-full bg-blue-500/80" />
      </div>

      {/* Central hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid h-28 w-28 place-items-center rounded-3xl border border-blue-400/25 bg-white/80 shadow-[0_0_60px_rgba(37,99,235,0.25)] backdrop-blur-md">
          <span className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/15 to-blue-500/15" />
          <span className="absolute -inset-3 animate-ping-slow rounded-[2rem] border border-blue-400/15" />
          <svg viewBox="0 0 24 24" className="relative h-12 w-12" fill="none">
            <g stroke="url(#isg-logo)" strokeWidth="1.5">
              <line x1="6" y1="6" x2="12" y2="12" />
              <line x1="12" y1="12" x2="18" y2="6" />
              <line x1="12" y1="12" x2="6" y2="18" />
              <line x1="12" y1="12" x2="18" y2="18" />
            </g>
            <circle cx="6" cy="6" r="1.8" fill="#2563eb" />
            <circle cx="18" cy="6" r="1.8" fill="#1d4ed8" />
            <circle cx="6" cy="18" r="1.8" fill="#1d4ed8" />
            <circle cx="18" cy="18" r="1.8" fill="#2563eb" />
            <circle cx="12" cy="12" r="2.2" fill="#ffffff" stroke="#2563eb" strokeWidth="1.6" />
            <defs>
              <linearGradient id="isg-logo" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#2563eb" />
                <stop offset="1" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-blue-400/25 bg-white/90 px-3 py-1 text-[10px] font-semibold tracking-widest text-blue-600 uppercase">
          SmartGrid Core
        </span>
      </div>

      {/* Satellite capability chips */}
      {hubChips.map(({ Icon, label, cls, delay }) => (
        <div key={label} className={`absolute ${cls} animate-float`} style={{ animationDelay: `${delay}s` }}>
          <div className="flex items-center gap-2.5 rounded-xl border border-slate-300 bg-white/85 px-3.5 py-2.5 shadow-lg backdrop-blur-md">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-blue-400/20 to-blue-500/20">
              <Icon className="h-4 w-4 text-blue-600" />
            </span>
            <span className="text-xs font-semibold text-slate-700">{label}</span>
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    if (reduced) setReduce(true);
  }, [reduced]);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="top" className="relative overflow-hidden">
      {/* ---------- Background layers ---------- */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="bg-grid mask-radial absolute inset-0" />
        <div className="absolute -top-44 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/[0.14] blur-[140px]" />
        <div className="absolute top-1/3 -left-44 h-[420px] w-[420px] rounded-full bg-blue-400/[0.12] blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-blue-600/[0.1] blur-[110px]" />
        <NetworkCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-transparent to-white" />
        <div className="bg-noise absolute inset-0 opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-28 pt-36 sm:px-8 lg:pt-44 lg:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ---------- Copy ---------- */}
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl" suppressHydrationWarning>
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/[0.07] px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-600 uppercase"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-blue-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              {hero.badge}
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.55rem]"
            >
              {hero.title.map((part, i) =>
                part.gradient ? (
                  <span key={i} className="text-gradient">
                    {part.text}
                  </span>
                ) : part.accent ? (
                  <span key={i} className="relative inline-block">
                    {part.text}
                    <span
                      className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-blue-400/70 to-blue-500/70 shadow-[0_0_12px_rgba(37,99,235,0.6)]"
                      aria-hidden="true"
                    />
                  </span>
                ) : (
                  <span key={i}>{part.text}</span>
                )
              )}
            </motion.h1>

            <motion.p variants={item} className="mt-7 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {hero.description}
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={hero.primaryCta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.35)] transition-all hover:shadow-[0_0_44px_rgba(37,99,235,0.55)] hover:brightness-110"
              >
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/60 px-7 py-3.5 text-sm font-semibold text-slate-900 backdrop-blur transition-all hover:border-blue-400/40 hover:bg-white hover:text-blue-600"
              >
                <MessageSquare className="h-4 w-4 text-blue-500 transition-transform group-hover:-rotate-6" />
                {hero.secondaryCta.label}
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="mr-1 text-xs font-medium tracking-wide text-slate-500 uppercase">
                Powered by
              </span>
              {hero.miniPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-slate-300 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 transition-colors hover:border-blue-400/40 hover:text-blue-600"
                >
                  {pill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ---------- Visual ---------- */}
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.94, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            className="lg:pl-6"
            suppressHydrationWarning
          >
            <OrbitalHub />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 md:flex"
        animate={{ y: reduce ? 0 : [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
        suppressHydrationWarning
      >
        <span className="text-[10px] font-medium tracking-[0.25em] text-slate-500 uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4 text-slate-500" />
      </motion.div>
    </section>
  );
}
