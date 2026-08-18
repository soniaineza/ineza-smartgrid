import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="Ineza SmartGrid — home"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-xl border border-blue-400/25 bg-gradient-to-br from-blue-50 to-white shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-shadow group-hover:shadow-[0_0_28px_rgba(37,99,235,0.35)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <g stroke="url(#logo-grad)" strokeWidth="1.5">
            <line x1="6" y1="6" x2="12" y2="12" />
            <line x1="12" y1="12" x2="18" y2="6" />
            <line x1="12" y1="12" x2="6" y2="18" />
            <line x1="12" y1="12" x2="18" y2="18" />
          </g>
          <circle cx="6" cy="6" r="2" fill="#2563eb" />
          <circle cx="18" cy="6" r="2" fill="#1d4ed8" />
          <circle cx="6" cy="18" r="2" fill="#1d4ed8" />
          <circle cx="18" cy="18" r="2" fill="#2563eb" />
          <circle cx="12" cy="12" r="2.4" fill="#ffffff" stroke="#2563eb" strokeWidth="1.6" />
          <defs>
            <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#2563eb" />
              <stop offset="1" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-slate-900">
        Ineza<span className="text-gradient">SmartGrid</span>
      </span>
    </a>
  );
}
