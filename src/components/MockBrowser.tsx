import type { ReactNode } from "react";
import { Camera, Mic, PhoneOff } from "lucide-react";

/**
 * Stylized browser window used to frame project "screenshots"
 * (CSS/SVG product mockups — no real images needed).
 */
export function MockBrowser({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-t-xl border border-white/10 bg-ink-900 shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.03] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-3 flex-1 truncate rounded-md bg-white/[0.06] px-3 py-1 text-[11px] text-slate-500">
          {url}
        </span>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

/* ---------- GridOps: energy analytics dashboard ---------- */
export function AnalyticsMock() {
  const bars = [
    [40, 65, 50, 80, 55],
    [55, 40, 70, 45, 90],
    [35, 60, 45, 70, 50],
  ];
  return (
    <div className="flex gap-3 bg-gradient-to-br from-emerald-500/[0.07] to-ink-900 p-4">
      <div className="hidden w-14 shrink-0 flex-col gap-2 sm:flex">
        <div className="h-7 rounded-md bg-emerald-400/20" />
        <div className="h-2.5 rounded bg-white/[0.08]" />
        <div className="h-2.5 rounded bg-white/[0.08]" />
        <div className="h-2.5 rounded bg-white/[0.08]" />
        <div className="mt-auto h-2.5 rounded bg-white/[0.08]" />
      </div>
      <div className="flex-1 space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-3 w-28 rounded bg-white/[0.12]" />
          <div className="flex gap-1.5">
            <span className="rounded-md bg-emerald-400/25 px-2 py-1 text-[9px] font-semibold text-emerald-300">Live</span>
            <span className="rounded-md bg-white/[0.06] px-2 py-1 text-[9px] text-slate-400">24h</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            ["Energy", "12.4 MW"],
            ["Grid load", "68%"],
            ["Saving", "9.2%"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-white/[0.07] bg-ink-900/70 p-2.5">
              <p className="text-[9px] text-slate-500">{label}</p>
              <p className="mt-0.5 text-sm font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-white/[0.07] bg-ink-900/70 p-3">
          <div className="mb-2 h-2 w-20 rounded bg-white/[0.1]" />
          <svg viewBox="0 0 200 56" className="h-14 w-full" aria-hidden="true">
            <defs>
              <linearGradient id="emerald-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#34d399" stopOpacity="0.35" />
                <stop offset="1" stopColor="#34d399" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,42 C18,38 28,18 48,24 C68,30 80,12 100,17 C120,22 132,34 152,20 C170,8 186,14 200,9 L200,56 L0,56 Z"
              fill="url(#emerald-fill)"
            />
            <path
              d="M0,42 C18,38 28,18 48,24 C68,30 80,12 100,17 C120,22 132,34 152,20 C170,8 186,14 200,9"
              fill="none"
              stroke="#34d399"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {bars.map((series, i) => (
            <div key={i} className="rounded-lg border border-white/[0.07] bg-ink-900/70 p-2.5">
              <div className="flex h-8 items-end gap-1">
                {series.map((h, j) => (
                  <div key={j} className="flex-1 rounded-sm bg-emerald-400/50" style={{ height: `${h}%` }} />
                ))}
              </div>
              <p className="mt-1.5 h-1.5 w-12 rounded bg-white/[0.08]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- PayBridge: mobile wallet ---------- */
export function WalletMock() {
  const txns = [
    { name: "M-Kopa Energy", amount: "+12,000", positive: true },
    { name: "City Market", amount: "-8,500", positive: false },
    { name: "Airtime Recharge", amount: "-2,000", positive: false },
  ];
  return (
    <div className="flex items-center justify-center gap-4 bg-gradient-to-br from-violet-500/[0.08] to-ink-900 p-5">
      <div className="w-32 shrink-0 rounded-2xl border border-white/10 bg-ink-950 p-2.5 shadow-xl">
        <div className="space-y-2.5 rounded-xl bg-gradient-to-br from-violet-500/90 to-indigo-600/90 p-3">
          <p className="text-[8px] tracking-widest text-violet-100/70 uppercase">Balance</p>
          <p className="text-base font-bold text-white">RWF 1,284,500</p>
          <div className="flex justify-between text-[8px] text-violet-100/80">
            <span>•••• 4821</span>
            <span>INEZA</span>
          </div>
        </div>
        <div className="mt-2.5 grid grid-cols-2 gap-1.5">
          <span className="rounded-md bg-white/[0.06] px-2 py-1.5 text-center text-[8px] text-slate-300">Send</span>
          <span className="rounded-md bg-white/[0.06] px-2 py-1.5 text-center text-[8px] text-slate-300">Request</span>
          <span className="rounded-md bg-white/[0.06] px-2 py-1.5 text-center text-[8px] text-slate-300">Bills</span>
          <span className="rounded-md bg-violet-400/30 px-2 py-1.5 text-center text-[8px] text-violet-200">Top up</span>
        </div>
      </div>
      <div className="flex-1 space-y-2">
        <p className="text-[9px] font-medium tracking-wide text-slate-500 uppercase">Recent activity</p>
        {txns.map((txn) => (
          <div key={txn.name} className="flex items-center justify-between rounded-lg border border-white/[0.07] bg-ink-900/70 px-3 py-2">
            <div className="flex items-center gap-2">
              <span
                className={`h-6 w-6 rounded-full ${txn.positive ? "bg-emerald-400/20" : "bg-white/[0.07]"}`}
              />
              <span className="text-[10px] text-slate-300">{txn.name}</span>
            </div>
            <span className={`text-[10px] font-semibold ${txn.positive ? "text-emerald-400" : "text-slate-400"}`}>
              {txn.amount}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2 rounded-lg border border-violet-400/20 bg-violet-400/[0.08] px-3 py-2">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-violet-300" />
          <span className="text-[10px] text-violet-200">Instant settlement enabled</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- CareLink: telehealth suite ---------- */
export function TelehealthMock() {
  return (
    <div className="bg-gradient-to-br from-sky-500/[0.08] to-ink-900 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="h-3 w-24 rounded bg-white/[0.12]" />
        <span className="rounded-md bg-rose-500/20 px-2 py-1 text-[9px] font-semibold text-rose-300">Live · 12:40</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-sky-500/30 to-ink-800">
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 text-[8px] font-semibold text-white">Dr</span>
            <span className="text-[9px] text-white/90">Dr. Uwase</span>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-indigo-500/30 to-ink-800">
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 text-[8px] font-semibold text-white">P</span>
            <span className="text-[9px] text-white/90">Patient</span>
          </div>
        </div>
      </div>
      <div className="mt-2.5 flex items-center justify-center gap-2 rounded-lg bg-ink-950/60 py-2">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-white/[0.07] text-slate-300">
          <Camera className="h-3.5 w-3.5" />
        </span>
        <span className="grid h-7 w-7 place-items-center rounded-full bg-white/[0.07] text-slate-300">
          <Mic className="h-3.5 w-3.5" />
        </span>
        <span className="grid h-7 w-7 place-items-center rounded-full bg-rose-500/80 text-white">
          <PhoneOff className="h-3.5 w-3.5" />
        </span>
        <span className="ml-1 rounded-md bg-white/[0.06] px-2.5 py-1 text-[9px] text-slate-400">E-prescription ready</span>
      </div>
    </div>
  );
}

/* ---------- LogiTrack: fleet intelligence ---------- */
export function FleetMock() {
  return (
    <div className="relative h-44 overflow-hidden bg-gradient-to-br from-emerald-500/[0.09] to-ink-900">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <svg
        viewBox="0 0 240 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {/* roads */}
        <path d="M-10,30 C60,20 120,50 250,30" stroke="rgba(255,255,255,0.08)" strokeWidth="3" fill="none" />
        <path d="M40,-10 C50,40 30,90 60,130" stroke="rgba(255,255,255,0.08)" strokeWidth="3" fill="none" />
        <path d="M-10,95 C90,110 170,70 250,85" stroke="rgba(255,255,255,0.06)" strokeWidth="2" fill="none" />
        {/* active route */}
        <path
          d="M18,95 C80,80 130,55 214,24"
          stroke="#f59e0b"
          strokeWidth="1.6"
          strokeDasharray="4 3"
          fill="none"
        />
        {/* vehicles */}
        <circle cx="18" cy="95" r="4" fill="#f59e0b" />
        <circle cx="18" cy="95" r="7" fill="#f59e0b" opacity="0.25" />
        <circle cx="130" cy="55" r="3.5" fill="#fbbf24" />
        <circle cx="214" cy="24" r="4" fill="#f59e0b" />
      </svg>
      <div className="absolute bottom-3 left-3 rounded-lg border border-white/10 bg-ink-900/90 px-3 py-2 backdrop-blur">
        <p className="text-[9px] text-slate-500">Fleet status</p>
        <p className="text-xs font-semibold text-white">42 vehicles · 8 active routes</p>
      </div>
      <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-md bg-ink-900/80 px-2.5 py-1.5 backdrop-blur">
        <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
        <span className="text-[9px] font-medium text-emerald-300">Live tracking</span>
      </div>
    </div>
  );
}
