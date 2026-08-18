import type { ComponentType } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import {
  AnalyticsMock,
  FleetMock,
  MockBrowser,
  TelehealthMock,
  WalletMock,
} from "@/components/MockBrowser";

const mockViews: Record<string, ComponentType> = {
  analytics: AnalyticsMock,
  wallet: WalletMock,
  telehealth: TelehealthMock,
  fleet: FleetMock,
};
const mockUrls: Record<string, string> = {
  analytics: "app.gridops.io/dashboard/overview",
  wallet: "paybridge.app/wallet",
  telehealth: "carelink.health/consult/live",
  fleet: "logitrack.io/fleet/map",
};

const accents: Record<string, string> = {
  emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700",
  violet: "border-violet-500/30 bg-violet-500/10 text-violet-700",
  sky: "border-sky-500/30 bg-sky-500/10 text-sky-700",
  amber: "border-amber-500/30 bg-amber-500/10 text-amber-700",
};

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/4 top-1/2 h-[420px] w-[620px] -translate-y-1/2 rounded-full bg-blue-600/[0.07] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Built, deployed, and <span className="text-gradient">still running</span>
            </>
          }
          description="A selection of platforms we designed, engineered, and shipped — energy analytics, mobile payments, telehealth, and fleet intelligence."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => {
            const MockView = mockViews[project.mock];
            const accent = accents[project.accent] ?? accents.emerald;
            return (
              <Reveal key={project.name} delay={(i % 2) * 0.12} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/30 hover:shadow-[0_30px_70px_-30px_rgba(37,99,235,0.22)]">
                  <div className="relative transition-transform duration-500 group-hover:scale-[1.012]">
                    <MockBrowser url={mockUrls[project.mock]}>
                      <MockView />
                    </MockBrowser>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-display text-xl font-semibold text-slate-900">{project.name}</h3>
                      <span className={`shrink-0 rounded-full border px-3 py-1 text-[11px] font-semibold ${accent}`}>
                        {project.category}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.description}</p>
                    <dl className="mt-5 space-y-3">
                      {(
                        [
                          ["Problem", project.problem],
                          ["Technical challenge", project.challenge],
                          ["Impact", project.impact],
                        ] as const
                      ).map(([label, text]) => (
                        <div key={label} className="flex gap-3">
                          <dt className="w-28 shrink-0 pt-px text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                            {label}
                          </dt>
                          <dd className="text-sm leading-relaxed text-slate-600">{text}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
                      <a
                        href="#contact"
                        className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
                      >
                        Discuss a similar build
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
