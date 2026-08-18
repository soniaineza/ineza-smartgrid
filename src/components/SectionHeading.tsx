import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-3.5 py-1.5 text-xs font-semibold tracking-widest text-blue-600 uppercase",
          centered && "justify-center"
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse-soft" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
