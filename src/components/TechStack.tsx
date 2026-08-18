import { techStack } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function TechStack() {
  return (
    <section id="stack" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={techStack.eyebrow}
          title={
            <>
              A stack chosen for <span className="text-gradient">production work</span>
            </>
          }
          description={techStack.description}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.categories.map((category, i) => (
            <Reveal key={category.name} delay={i * 0.1} className="h-full">
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:shadow-[0_20px_45px_-24px_rgba(37,99,235,0.28)]">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-500">
                  {category.name}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {category.items.map((item) => (
                    <span
                      key={item.name}
                      className="cursor-default rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/50 hover:text-blue-600"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
