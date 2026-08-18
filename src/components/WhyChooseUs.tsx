import { ArrowRight, Cpu, Gauge, LifeBuoy, ShieldCheck, Wrench } from "lucide-react";
import { whyChooseUs } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const itemIcons = [Cpu, ShieldCheck, Gauge, Wrench, LifeBuoy] as const;

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/[0.06] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Sticky intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow={whyChooseUs.eyebrow}
              title={
                <>
                  Built for the <span className="text-gradient">hard parts</span>
                </>
              }
              align="left"
            />
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
                {whyChooseUs.description}
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(34,211,238,0.3)] transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:brightness-110"
              >
                Talk to our engineers
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

        
          <ol className="space-y-3">
            {whyChooseUs.items.map((item, i) => {
              const Icon = itemIcons[i];
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <li className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:shadow-[0_20px_45px_-24px_rgba(37,99,235,0.28)] sm:p-7">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    <div className="relative flex items-start gap-5">
                      <span className="hidden font-display text-4xl font-semibold text-slate-900/[0.07] sm:block">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-slate-300 bg-gradient-to-br from-blue-400/15 to-blue-500/15 transition-transform duration-300 group-hover:scale-110 group-hover:border-blue-400/30">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-slate-900">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
