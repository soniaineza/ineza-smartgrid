import { CheckCircle2, Eye, Quote, Target } from "lucide-react";
import { visionMission } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function VisionMission() {
  return (
    <section id="vision" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-600/[0.05] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={visionMission.eyebrow}
          title={
            <>
              Where we are going, <span className="text-gradient">and how we get there</span>
            </>
          }
          description="Two short statements: the direction Ineza SmartGrid is taking, and the engineering discipline that gets us there."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {/* Vision */}
          <Reveal className="h-full">
            <figure className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-cyan-400/[0.05] via-white to-white p-8 sm:p-10">
              <Quote className="absolute right-8 top-8 h-14 w-14 text-slate-900/[0.05] transition-colors duration-300 group-hover:text-blue-400/20" aria-hidden="true" />
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-blue-400/25 bg-blue-400/10">
                <Eye className="h-6 w-6 text-blue-600" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-slate-900">{visionMission.vision.title}</h3>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-600">
                "{visionMission.vision.text}"
              </blockquote>
              <div className="divider-glow mt-8 opacity-60" aria-hidden="true" />
              <figcaption className="mt-5 text-xs font-medium uppercase tracking-widest text-slate-500">
                Where we are going
              </figcaption>
            </figure>
          </Reveal>

          {/* Mission */}
          <Reveal delay={0.12} className="h-full">
            <figure className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-500/[0.05] via-white to-white p-8 sm:p-10">
              <Quote className="absolute right-8 top-8 h-14 w-14 text-slate-900/[0.05] transition-colors duration-300 group-hover:text-blue-400/20" aria-hidden="true" />
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-blue-400/25 bg-blue-500/10">
                <Target className="h-6 w-6 text-blue-600" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-slate-900">{visionMission.mission.title}</h3>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-600">
                "{visionMission.mission.text}"
              </blockquote>
              <div className="divider-glow mt-8 opacity-60" aria-hidden="true" />
              <figcaption className="mt-5 text-xs font-medium uppercase tracking-widest text-slate-500">
                How we get there
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Principles */}
        <Reveal delay={0.2}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {visionMission.principles.map((principle) => (
              <li
                key={principle.label}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4.5 py-2 text-sm font-medium text-slate-700"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                {principle.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
