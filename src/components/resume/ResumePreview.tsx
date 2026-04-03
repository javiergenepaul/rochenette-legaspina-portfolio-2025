"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { ResumeRenderer } from "./ResumeRenderer";
import type { ResumeCategory, ResumeTheme, ResumeMode } from "@/config/resumeData";
import { cn } from "@/lib/utils";

interface ResumePreviewProps {
  category: ResumeCategory;
  theme: ResumeTheme;
  mode: ResumeMode;
  visibleSections: string[];
  onDownload: () => void;
}

const A4_W = 794;
const DEFAULT_SCALE = 1;
const MIN_SCALE = 0.3;
const MAX_SCALE = 1;
const STEP = 0.05;

export function ResumePreview({
  category,
  theme,
  mode,
  visibleSections,
}: ResumePreviewProps) {
  const isDark = mode === "dark";
  const [scale, setScale] = useState(DEFAULT_SCALE);
  const [contentHeight, setContentHeight] = useState(1123);
  const innerRef = useRef<HTMLDivElement>(null);

  // Track actual rendered height of the resume so the outer wrapper
  // reserves the correct space (transform doesn't affect layout flow).
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setContentHeight(entry.contentRect.height);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const zoomIn = useCallback(
    () => setScale((s) => Math.min(MAX_SCALE, +(s + STEP).toFixed(2))),
    []
  );
  const zoomOut = useCallback(
    () => setScale((s) => Math.max(MIN_SCALE, +(s - STEP).toFixed(2))),
    []
  );
  const resetZoom = useCallback(() => setScale(DEFAULT_SCALE), []);

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
      {/* ── Toolbar ─────────────────────────────────────────────────────── */}
      <div
        className="border-b border-amethyst-500/15 bg-woodsmoke-950"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "10px 16px",
          flexShrink: 0,
        }}
      >
        <button
          onClick={zoomOut}
          disabled={scale <= MIN_SCALE}
          className={cn(
            "flex items-center justify-center w-7 h-7 rounded-md transition-colors",
            "text-amethyst-400 hover:text-white hover:bg-amethyst-500/20",
            "disabled:opacity-30 disabled:cursor-not-allowed"
          )}
          title="Zoom out"
        >
          <ZoomOut size={14} />
        </button>

        {/* Zoom percentage + click-to-reset */}
        <button
          onClick={resetZoom}
          className="text-[11px] font-mono text-amethyst-300 hover:text-white transition-colors min-w-11 text-center"
          title="Reset zoom"
        >
          {Math.round(scale * 100)}%
        </button>

        <button
          onClick={zoomIn}
          disabled={scale >= MAX_SCALE}
          className={cn(
            "flex items-center justify-center w-7 h-7 rounded-md transition-colors",
            "text-amethyst-400 hover:text-white hover:bg-amethyst-500/20",
            "disabled:opacity-30 disabled:cursor-not-allowed"
          )}
          title="Zoom in"
        >
          <ZoomIn size={14} />
        </button>

        <button
          onClick={resetZoom}
          className={cn(
            "flex items-center justify-center w-7 h-7 rounded-md transition-colors ml-1",
            "text-amethyst-400 hover:text-white hover:bg-amethyst-500/20"
          )}
          title="Reset zoom"
        >
          <RotateCcw size={12} />
        </button>

        <span
          className="text-[10px] text-white/30 ml-2 hidden sm:block"
          style={{ letterSpacing: "0.5px" }}
        >
          A4 Preview
        </span>
      </div>

      {/* ── Scrollable canvas ───────────────────────────────────────────── */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          overflowX: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "32px 24px",
          backgroundColor: isDark ? "#18181b" : "#e4e4e7",
        }}
      >
        {/*
          Outer placeholder — reserves the scaled dimensions in the layout
          so the scroll container knows how tall to be.
        */}
        <div
          style={{
            width: A4_W * scale,
            height: contentHeight * scale,
            flexShrink: 0,
            position: "relative",
          }}
        >
          {/*
            Inner A4 div — rendered at full 794px wide, then visually
            scaled. transformOrigin "top left" keeps it pinned to the
            placeholder's top-left corner.
          */}
          <div
            ref={innerRef}
            style={{
              transformOrigin: "top left",
              transform: `scale(${scale})`,
              width: A4_W,
              position: "absolute",
              top: 0,
              left: 0,
              boxShadow: "0 8px 40px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.14)",
              borderRadius: "3px",
            }}
          >
            <ResumeRenderer
              category={category}
              theme={theme}
              mode={mode}
              visibleSections={visibleSections}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
