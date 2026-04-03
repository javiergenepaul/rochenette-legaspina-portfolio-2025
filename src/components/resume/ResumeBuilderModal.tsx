"use client";

import { useState, useCallback } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Download, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  RESUME_SECTIONS,
  type ResumeCategory,
  type ResumeTheme,
  type ResumeMode,
} from "@/config/resumeData";
import { ResumePreview } from "./ResumePreview";

// ---------------------------------------------------------------------------
// Types & constants
// ---------------------------------------------------------------------------

const CATEGORIES: { value: ResumeCategory; label: string }[] = [
  { value: "general", label: "General" },
  { value: "uiux", label: "UI/UX" },
  { value: "3d", label: "3D" },
  { value: "systems", label: "Systems" },
];

const THEMES: { value: ResumeTheme; label: string }[] = [
  { value: "simple", label: "Simple" },
  { value: "modern", label: "Modern" },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function SidebarLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-widest text-amethyst-400 mb-2">
      {children}
    </p>
  );
}

function PillButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 border",
        active
          ? "bg-amethyst-500 text-white border-amethyst-500"
          : "border-amethyst-500/30 text-amethyst-500 hover:border-amethyst-500/60 hover:bg-amethyst-500/5"
      )}
    >
      {children}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Main Modal
// ---------------------------------------------------------------------------

interface ResumeBuilderModalProps {
  /** Trigger element that opens the modal */
  trigger?: React.ReactNode;
  /** Controlled open state (optional) */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function ResumeBuilderModal({
  trigger,
  open: controlledOpen,
  onOpenChange,
}: ResumeBuilderModalProps) {
  // Internal state (used when uncontrolled)
  const [internalOpen, setInternalOpen] = useState(false);

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = useCallback(
    (val: boolean) => {
      setInternalOpen(val);
      onOpenChange?.(val);
    },
    [onOpenChange]
  );

  // Resume builder state
  const [category, setCategory] = useState<ResumeCategory>("general");
  const [theme, setTheme] = useState<ResumeTheme>("modern");
  const [mode, setMode] = useState<ResumeMode>("light");
  const [visibleSections, setVisibleSections] = useState<string[]>(
    RESUME_SECTIONS.map((s) => s.key)
  );
  const [isDownloading, setIsDownloading] = useState(false);

  const toggleSection = (key: string) => {
    setVisibleSections((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const element = document.getElementById("resume-content");
      if (!element) return;
      const filename = `rochenette-legaspina-${category}-resume.pdf`;
      await html2pdf()
        .set({
          margin: 0,
          filename,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        })
        .from(element)
        .save();
    } catch (err) {
      console.error("PDF download failed:", err);
    } finally {
      setIsDownloading(false);
    }
  };

  // Sections available for the current category
  const categorySections = RESUME_SECTIONS.filter((s) =>
    s.categories.includes(category)
  );

  return (
    <Dialog.Root open={isOpen} onOpenChange={setOpen}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}

      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.72)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
          }}
        />

        {/* Content */}
        <Dialog.Content
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            display: "flex",
            overflow: "hidden",
          }}
          aria-describedby={undefined}
        >
          {/* ── Sidebar ─────────────────────────────────────────────────── */}
          <aside
            className="border-r border-amethyst-500/20 bg-woodsmoke-950"
            style={{
              width: "280px",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
            }}
          >
            {/* Sidebar header */}
            <div className="flex items-center justify-between p-5 border-b border-amethyst-900/40">
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-amethyst-400" />
                <Dialog.Title className="text-sm font-bold text-white tracking-wide">
                  Build My Resume
                </Dialog.Title>
              </div>
              <Dialog.Close asChild>
                <button
                  className="text-amethyst-400 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </Dialog.Close>
            </div>

            {/* Sidebar body */}
            <div className="flex flex-col gap-6 p-5 flex-1">
              {/* Category */}
              <div>
                <SidebarLabel>Category</SidebarLabel>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((c) => (
                    <PillButton
                      key={c.value}
                      active={category === c.value}
                      onClick={() => setCategory(c.value)}
                    >
                      {c.label}
                    </PillButton>
                  ))}
                </div>
              </div>

              {/* Theme */}
              <div>
                <SidebarLabel>Theme</SidebarLabel>
                <div className="flex gap-2">
                  {THEMES.map((t) => (
                    <PillButton
                      key={t.value}
                      active={theme === t.value}
                      onClick={() => setTheme(t.value)}
                    >
                      {t.label}
                    </PillButton>
                  ))}
                </div>
              </div>

              {/* Mode */}
              <div>
                <SidebarLabel>Mode</SidebarLabel>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setMode("light")}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150",
                      mode === "light"
                        ? "bg-amethyst-500 text-white border-amethyst-500"
                        : "border-amethyst-500/30 text-amethyst-500 hover:border-amethyst-500/60"
                    )}
                  >
                    ☀ Light
                  </button>
                  <button
                    onClick={() => setMode("dark")}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150",
                      mode === "dark"
                        ? "bg-amethyst-500 text-white border-amethyst-500"
                        : "border-amethyst-500/30 text-amethyst-500 hover:border-amethyst-500/60"
                    )}
                  >
                    ☾ Dark
                  </button>
                </div>
              </div>

              {/* Section visibility */}
              <div>
                <SidebarLabel>Sections</SidebarLabel>
                <div className="flex flex-col gap-2">
                  {categorySections.map((section) => {
                    const checked = visibleSections.includes(section.key);
                    return (
                      <label
                        key={section.key}
                        className="flex items-center gap-2.5 cursor-pointer group"
                      >
                        <div className="relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleSection(section.key)}
                            className="sr-only"
                          />
                          <div
                            className={cn(
                              "w-4 h-4 rounded border transition-all duration-150 flex items-center justify-center",
                              checked
                                ? "bg-amethyst-500 border-amethyst-500"
                                : "border-amethyst-500/40 group-hover:border-amethyst-500/70"
                            )}
                          >
                            {checked && (
                              <svg
                                width="10"
                                height="8"
                                viewBox="0 0 10 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 4L3.5 6.5L9 1"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-xs text-amethyst-200 group-hover:text-white transition-colors">
                          {section.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Download button */}
            <div className="p-5 border-t border-amethyst-900/40">
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg",
                  "bg-amethyst-500 hover:bg-amethyst-600 text-white font-semibold text-sm",
                  "transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
                )}
              >
                <Download size={16} />
                {isDownloading ? "Generating PDF…" : "Download PDF"}
              </button>
            </div>
          </aside>

          {/* ── Preview area ─────────────────────────────────────────────── */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <ResumePreview
              category={category}
              theme={theme}
              mode={mode}
              visibleSections={visibleSections}
              onDownload={handleDownload}
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
