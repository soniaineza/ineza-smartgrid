import { ArrowRight, CheckCircle2, Cpu, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { about } from "@/content/site";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CountUp from "@/components/CountUp";

const terminalLines: { tokens: { t: string; c: string }[] }[] = [
  { tokens: [{ t: "$", c: "text-emerald-400" }, { t: "  ineza init smart-grid", c: "text-slate-200" }] },
  { tokens: [{ t: "✓", c: "text-emerald-400" }, { t: " Core systems online", c: "text-slate-400" }] },
  { tokens: [{ t: "✓", c: "text-emerald-400" }, { t: " Edge intelligence connected", c: "text-slate-400" }] },
  { tokens: [{ t: "✓", c: "text-blue-600" }, { t: " Deploying platform...", c: "text-slate-300" }, { t: " done in 2.4s", c: "text-blue-600" }] },
];

const floatingChips = [
  { Icon: Sparkles, label: "AI systems", cls: "-top-5 -left-4", delay: 0 },
  { Icon: Cpu, label: "Cloud-native", cls: "-top-6 right-8", delay: 1.1 },
  { Icon: ShieldCheck, label: "Security-first", cls: "-bottom-5 -right-3", delay: 0.6 },
  { Icon: Zap, label: "CI/CD pipelines", cls: "-bottom-4 -left-6", delay: 1.7 },
] as const;

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute left-0 top-1/4 h-[380px] w-[380px] rounded-full bg-blue-600/[0.08] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div>
            <SectionHeading
              eyebrow={about.eyebrow}
              title={
                <>
                  We build systems that <span className="text-gradient">hold up in production</span>
                </>
              }
              align="left"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-slate-600">{about.paragraphs[0]}</p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{about.paragraphs[1]}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-9 grid gap-3.5 sm:grid-cols-2">
                {about.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                    <span className="text-sm leading-relaxed text-slate-600">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href="#services"
                className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                See the work we ship
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>

            {/* CEO & Founder — prominent card at the bottom of copy */}
            <Reveal delay={0.35}>
              <div className="mt-10 flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-4 pr-8 shadow-sm">
                <img
                  src="/passport.png"
                  alt="CEO & Founder of Ineza SmartGrid"
                  className="h-24 w-24 shrink-0 rounded-xl object-cover object-top ring-2 ring-blue-100 shadow-md"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">CEO & Founder</p>
                  <p className="mt-0.5 text-xs text-slate-500">Ineza SmartGrid</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Terminal visual */}
          <Reveal delay={0.15} className="relative hidden lg:block">
            <div
              className="absolute -inset-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/15 via-transparent to-indigo-500/15 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/90 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.03] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-rose-500/70" />
                <span className="h-3 w-3 rounded-full bg-amber-500/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
                <span className="ml-3 truncate text-xs text-slate-500">smartgrid@core — build --deploy</span>
              </div>
              <div className="space-y-3.5 p-6 font-mono text-sm sm:p-8">
                {terminalLines.map((line, i) => (
                  <Reveal key={i} delay={0.35 + i * 0.25} className="flex flex-wrap gap-x-2">
                    {line.tokens.map((token, j) => (
                      <span key={j} className={token.c}>
                        {token.t}
                      </span>
                    ))}
                  </Reveal>
                ))}
                <Reveal delay={1.4} className="flex items-center gap-2">
                  <span className="text-emerald-400">➜</span>
                  <span className="inline-block h-4 w-2 animate-blink bg-blue-500" aria-hidden="true" />
                </Reveal>
              </div>
            </div>

            {/* Floating capability chips */}
            {floatingChips.map(({ Icon, label, cls, delay }) => (
              <div
                key={label}
                className={`absolute ${cls} animate-float`}
                style={{ animationDelay: `${delay}s` }}
                aria-hidden="true"
              >
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-lg backdrop-blur-md">
                  <Icon className="h-4 w-4 text-blue-600" />
                  <span className="text-xs font-semibold text-slate-700">{label}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Stats band */}
        <Reveal delay={0.1}>
          <dl className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-100/70 lg:grid-cols-4">
            {about.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5 bg-white px-6 py-9">
                <dd className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                  />
                </dd>
                <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
