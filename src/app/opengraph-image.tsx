import { ImageResponse } from "next/og";

export const alt = "Ineza SmartGrid — Software Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f1f5f9",
              border: "2px solid rgba(37,99,235,0.35)",
            }}
          >
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none">
              <g stroke="#2563eb" strokeWidth="1.5">
                <line x1="6" y1="6" x2="12" y2="12" />
                <line x1="12" y1="12" x2="18" y2="6" />
                <line x1="12" y1="12" x2="6" y2="18" />
                <line x1="12" y1="12" x2="18" y2="18" />
              </g>
              <circle cx="6" cy="6" r="2" fill="#2563eb" />
              <circle cx="18" cy="6" r="2" fill="#6366f1" />
              <circle cx="6" cy="18" r="2" fill="#6366f1" />
              <circle cx="18" cy="18" r="2" fill="#2563eb" />
              <circle cx="12" cy="12" r="2.4" fill="#ffffff" stroke="#2563eb" strokeWidth="1.6" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ color: "#0f172a", fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>
              Ineza SmartGrid
            </div>
            <div style={{ color: "#2563eb", fontSize: 18, letterSpacing: 2, textTransform: "uppercase" }}>
              Software Engineering
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 900 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#0f172a",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: -1,
            }}
          >
            We engineer the software
            <br />
            your business <span style={{ color: "#2563eb" }}>runs on</span>
          </div>
          <div style={{ color: "#475569", fontSize: 26, lineHeight: 1.5, maxWidth: 760 }}>
            Platforms, APIs, data infrastructure, and AI-powered automation —
            built to hold up in production.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: 24,
            borderTop: "1px solid rgba(15,23,42,0.12)",
          }}
        >
          <div style={{ color: "#64748b", fontSize: 20 }}>
            Engineered in Kigali. Built to run anywhere.
          </div>
          <div style={{ display: "flex", gap: 10, color: "#2563eb", fontSize: 18, fontWeight: 600 }}>
            <span style={{ borderRadius: 999, border: "1px solid rgba(37,99,235,0.35)", padding: "8px 18px" }}>
              React
            </span>
            <span style={{ borderRadius: 999, border: "1px solid rgba(37,99,235,0.35)", padding: "8px 18px" }}>
              Node.js
            </span>
            <span style={{ borderRadius: 999, border: "1px solid rgba(37,99,235,0.35)", padding: "8px 18px" }}>
              Flutter
            </span>
            <span style={{ borderRadius: 999, border: "1px solid rgba(37,99,235,0.35)", padding: "8px 18px" }}>
              AI
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}
