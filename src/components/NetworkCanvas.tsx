"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number };

const LINK_DIST = 150;
const MOUSE_DIST = 180;

/**
 * Lightweight "connected network" particle canvas used as the hero
 * backdrop. Nodes drift and link to nearby neighbors (and the cursor),
 * pausing when off-screen. Honors prefers-reduced-motion by drawing a
 * single static frame.
 */
export default function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    let raf = 0;
    let nodes: Node[] = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.max(26, Math.round((width * height) / 16000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.6 + 1,
      }));
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);
      if (width === 0 || height === 0) return;

      // Links between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const t = 1 - Math.sqrt(d2) / LINK_DIST;
            ctx.strokeStyle = "rgba(8, 145, 178, " + (t * 0.2).toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        // Link to cursor
        const mx = a.x - mouse.x;
        const my = a.y - mouse.y;
        const md2 = mx * mx + my * my;
        if (md2 < MOUSE_DIST * MOUSE_DIST) {
          const t = 1 - Math.sqrt(md2) / MOUSE_DIST;
          ctx.strokeStyle = "rgba(37, 99, 235, " + (t * 0.4).toFixed(3) + ")";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // Nodes
      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < -10 || n.x > width + 10) n.vx *= -1;
          if (n.y < -10 || n.y > height + 10) n.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(37, 99, 235, 0.5)";
        ctx.fill();
      }

      if (!reduced) raf = requestAnimationFrame(drawFrame);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onPointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const ro = new ResizeObserver(() => {
      resize();
      ctx.clearRect(0, 0, width, height);
    });
    ro.observe(canvas);

    // Pause animation while the hero is off-screen
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          cancelAnimationFrame(raf);
        } else if (!reduced) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(drawFrame);
        }
      },
      { threshold: 0.02 }
    );
    io.observe(canvas);

    resize();
    if (reduced) {
      drawFrame();
    } else {
      raf = requestAnimationFrame(drawFrame);
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
