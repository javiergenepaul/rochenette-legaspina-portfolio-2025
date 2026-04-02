"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

// The iframe renders at this width, then gets scaled down to PREVIEW_W
const IFRAME_W = 1280;
const IFRAME_H = 800;
const PREVIEW_W = 180;
const PREVIEW_H = 114;
const SCALE = PREVIEW_W / IFRAME_W;

export default function YearSwitcher2026() {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const pathParts = pathname.split("/");
  const locale = pathParts[2] ?? "en";
  const href = `/2026/${locale}`;

  return (
    <div
      className="fixed bottom-8 right-8 z-[9998]"
      style={{ width: PREVIEW_W, height: PREVIEW_H }}
    >
      {/* Label bar */}
      <div
        className={`absolute -top-8 left-0 flex items-center gap-2 transition-opacity duration-200 ${
          hovered ? "opacity-100" : "opacity-60"
        }`}
      >
        <span className="text-xs font-semibold text-amethyst-500 dark:text-amethyst-400 tracking-widest uppercase">
          2026
        </span>
        <span
          className={`text-xs text-amethyst-400 dark:text-amethyst-500 transition-transform duration-200 ${
            hovered ? "translate-x-1" : "translate-x-0"
          }`}
        >
          →
        </span>
      </div>

      {/* Glow */}
      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300 ${
          hovered
            ? "shadow-[0_0_40px_8px_rgba(168,85,247,0.45)]"
            : "shadow-[0_0_20px_2px_rgba(139,92,246,0.2)]"
        }`}
      />

      {/* Card */}
      <div
        className={`relative w-full h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border ${
          hovered
            ? "border-amethyst-400/70 dark:border-amethyst-500/70 scale-[1.03]"
            : "border-amethyst-300/30 dark:border-amethyst-700/30 scale-100"
        }`}
        onClick={() => router.push(href)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Scaled iframe */}
        <div
          style={{
            width: IFRAME_W,
            height: IFRAME_H,
            transform: `scale(${SCALE})`,
            transformOrigin: "top left",
            pointerEvents: "none",
          }}
        >
          <iframe
            src={href}
            width={IFRAME_W}
            height={IFRAME_H}
            scrolling="no"
            tabIndex={-1}
            aria-hidden="true"
            style={{ border: "none", display: "block" }}
          />
        </div>

        {/* Hover overlay with CTA */}
        <div
          className={`absolute inset-0 flex items-end justify-center pb-4 bg-gradient-to-t from-amethyst-950/60 via-transparent to-transparent transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-xs font-semibold text-amethyst-50 tracking-wide bg-amethyst-500 px-4 py-1.5 rounded-full">
            Visit 2026 Portfolio
          </span>
        </div>
      </div>
    </div>
  );
}
