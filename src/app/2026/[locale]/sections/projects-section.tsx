"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderOpen, User2, Tag, Layers, ExternalLink, X, ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PROJECTS } from "../data/portfolio-data";

const THUMB_GRADIENTS: Record<string, string> = {
  "from-red-700 to-red-400":    "linear-gradient(135deg,#b71c1c,#ef5350)",
  "from-rose-800 to-red-500":   "linear-gradient(135deg,#880e2e,#D32F2F)",
  "from-red-900 to-orange-600": "linear-gradient(135deg,#D32F2F,#e65100)",
  "from-purple-900 to-red-700": "linear-gradient(135deg,#6a1b9a,#D32F2F)",
  "from-red-700 to-pink-700":   "linear-gradient(135deg,#D32F2F,#880e4f)",
};

function thumbBg(gradient: string) {
  return THUMB_GRADIENTS[gradient] ?? "linear-gradient(135deg,#D32F2F,#b71c1c)";
}

const SPRING = { type: "spring", stiffness: 340, damping: 34 };

export default function ProjectsSection2026() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selected = selectedIndex !== null ? PROJECTS[selectedIndex] : null;
  const rest = PROJECTS.filter((_, i) => i !== selectedIndex);

  return (
    <section
      id="projects"
      className="py-24 px-[7%] bg-woodsmoke-100 dark:bg-woodsmoke-900"
    >
      {/* Header */}
      <div className="flex items-center gap-1.5 text-amethyst-500 font-poppins font-bold text-[0.72rem] uppercase tracking-[2.5px] mb-2">
        <FolderOpen size={13} strokeWidth={1.75} />
        Projects
      </div>
      <h2
        className="font-poppins font-bold text-woodsmoke-900 dark:text-woodsmoke-50 mb-2"
        style={{ fontSize: "clamp(1.7rem,3vw,2.4rem)", lineHeight: 1.2 }}
      >
        Selected <span className="text-amethyst-500">Work</span>
      </h2>
      <p className="text-woodsmoke-500 dark:text-woodsmoke-400 text-[0.95rem] leading-[1.75] max-w-[560px] mb-12">
        A cross-disciplinary portfolio spanning systems analysis, UX design, and 3D visualization.
      </p>

      {/* ── Grid view ──────────────────────────────────────────────────────── */}
      {selectedIndex === null && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              layoutId={`card-${i}`}
              style={{ borderRadius: 20 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, boxShadow: "0 12px 36px rgba(211,47,47,.15)" }}
              transition={{ ...SPRING, delay: i * 0.06 }}
              onClick={() => setSelectedIndex(i)}
              className={cn(
                "flex flex-col overflow-hidden border cursor-pointer",
                "bg-white dark:bg-woodsmoke-800",
                "border-woodsmoke-200 dark:border-woodsmoke-700",
                "shadow-[0_4px_16px_rgba(0,0,0,.06)]"
              )}
            >
                {/* Thumbnail */}
                <div
                  className="h-[175px] relative flex items-center justify-center overflow-hidden"
                  style={{ background: thumbBg(project.gradient) }}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                  <FolderOpen size={48} className="text-white/65 relative z-10" strokeWidth={1.25} />
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-1 bg-white/18 backdrop-blur-sm border border-white/28 text-white px-2.5 py-1 rounded-full text-[0.68rem] font-poppins font-bold">
                    <Tag size={11} strokeWidth={2} />
                    {project.type}
                  </div>
                </div>
                {/* Body */}
                <div className="flex flex-col gap-2.5 p-5 flex-1">
                  <h3 className="font-poppins font-bold text-[0.9rem] text-woodsmoke-900 dark:text-woodsmoke-50">
                    {project.title}
                  </h3>
                  <p className="text-[0.8rem] text-woodsmoke-500 dark:text-woodsmoke-400 leading-[1.6] line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.stack.slice(0, 3).map((s) => (
                      <span key={s} className="bg-amethyst-50 text-amethyst-500 dark:bg-amethyst-500/15 dark:text-amethyst-300 px-2 py-0.5 rounded-full text-[0.68rem] font-poppins font-bold">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-3 border-t border-woodsmoke-200 dark:border-woodsmoke-700">
                    <button
                      onClick={() => setSelectedIndex(i)}
                      className={cn(
                        "inline-flex items-center gap-1.5 text-[0.75rem] font-poppins font-bold",
                        "px-3 py-1.5 rounded-full border transition-all duration-200",
                        "text-amethyst-500 bg-amethyst-50 border-amethyst-100",
                        "dark:text-amethyst-300 dark:bg-amethyst-500/12 dark:border-amethyst-500/25",
                        "hover:bg-amethyst-500 hover:text-white hover:border-amethyst-500"
                      )}
                    >
                      <ChevronRight size={12} strokeWidth={2.5} />
                      Find out more
                    </button>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* ── Expanded view ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedIndex !== null && selected && (
          <motion.div
            key="expanded"
            className="flex flex-col lg:flex-row gap-8 items-start"
            initial={false}
            animate={{ opacity: 1 }}
          >
            {/* ── Expanded card — same layoutId as the clicked grid card ── */}
            <motion.div
              layoutId={`card-${selectedIndex}`}
              layout
              style={{ borderRadius: 24 }}
              transition={SPRING}
              className={cn(
                "lg:w-[58%] w-full overflow-hidden border",
                "bg-white dark:bg-woodsmoke-800",
                "border-woodsmoke-200 dark:border-woodsmoke-700",
                "shadow-[0_16px_56px_rgba(211,47,47,.18)]"
              )}
            >
              {/* Expanded thumbnail */}
              <div
                className="h-[240px] relative flex items-center justify-center overflow-hidden"
                style={{ background: thumbBg(selected.gradient) }}
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                <FolderOpen size={72} className="text-white/50 relative z-10" strokeWidth={1} />
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-white/18 backdrop-blur-sm border border-white/28 text-white px-3 py-1.5 rounded-full text-[0.73rem] font-poppins font-bold">
                  <Tag size={12} strokeWidth={2} />
                  {selected.type}
                </div>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-black/50 transition-colors duration-200"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              </div>

              {/* Expanded body — fades in after the card moves */}
              <motion.div
                className="p-7 flex flex-col gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.22, duration: 0.3 }}
              >
                <h3 className="font-poppins font-bold text-woodsmoke-900 dark:text-woodsmoke-50" style={{ fontSize: "clamp(1.1rem,2vw,1.4rem)" }}>
                  {selected.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amethyst-50 dark:bg-amethyst-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <User2 size={13} className="text-amethyst-500" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[0.68rem] text-amethyst-500 font-poppins font-bold uppercase tracking-wide mb-0.5">Role</p>
                      <p className="text-[0.83rem] text-woodsmoke-700 dark:text-woodsmoke-200 font-medium">{selected.role}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amethyst-50 dark:bg-amethyst-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Layers size={13} className="text-amethyst-500" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[0.68rem] text-amethyst-500 font-poppins font-bold uppercase tracking-wide mb-0.5">Type</p>
                      <p className="text-[0.83rem] text-woodsmoke-700 dark:text-woodsmoke-200 font-medium">{selected.type}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[0.68rem] text-amethyst-500 font-poppins font-bold uppercase tracking-wide mb-1.5">About this project</p>
                  <p className="text-[0.88rem] text-woodsmoke-600 dark:text-woodsmoke-300 leading-[1.75]">
                    {selected.description}
                  </p>
                </div>
                <div>
                  <p className="text-[0.68rem] text-amethyst-500 font-poppins font-bold uppercase tracking-wide mb-2">Tech &amp; Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.stack.map((s) => (
                      <span key={s} className="bg-amethyst-50 text-amethyst-500 dark:bg-amethyst-500/15 dark:text-amethyst-300 px-3 py-1 rounded-full text-[0.75rem] font-poppins font-bold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-woodsmoke-100 dark:border-woodsmoke-700 flex items-center gap-3">
                  <a
                    href={selected.link ?? "#"}
                    className={cn(
                      "inline-flex items-center gap-1.5 text-[0.78rem] font-poppins font-bold no-underline",
                      "px-4 py-2 rounded-full border transition-all duration-200",
                      "text-amethyst-500 bg-amethyst-50 border-amethyst-100",
                      "dark:text-amethyst-300 dark:bg-amethyst-500/12 dark:border-amethyst-500/25",
                      "hover:bg-amethyst-500 hover:text-white hover:border-amethyst-500"
                    )}
                  >
                    <ExternalLink size={13} strokeWidth={2} />
                    View Project
                  </a>
                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="text-[0.78rem] font-poppins font-semibold text-woodsmoke-400 hover:text-woodsmoke-600 dark:hover:text-woodsmoke-200 transition-colors duration-200"
                  >
                    ← Back to all
                  </button>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Document stack (right) ───────────────────────────────── */}
            <motion.div
              className="lg:w-[38%] w-full"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, ...SPRING }}
            >
              <p className="text-[0.72rem] font-poppins font-bold text-woodsmoke-400 uppercase tracking-[2px] mb-5">
                Other Projects
              </p>
              <div
                className="relative"
                style={{ height: `${rest.length * 56 + 104}px` }}
              >
                {rest.map((project, i) => {
                  const originalIndex = PROJECTS.indexOf(project);
                  const rotations = [-0.8, 0.6, -0.4, 0.9, -0.3];
                  return (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + i * 0.07, ...SPRING }}
                      onClick={() => setSelectedIndex(originalIndex)}
                      className={cn(
                        "absolute w-full rounded-[16px] overflow-hidden border cursor-pointer",
                        "bg-white dark:bg-woodsmoke-800",
                        "border-woodsmoke-200 dark:border-woodsmoke-700",
                        "hover:-translate-y-1 transition-transform duration-200"
                      )}
                      style={{
                        top: `${i * 56}px`,
                        zIndex: rest.length - i,
                        rotate: `${rotations[i] ?? 0}deg`,
                        boxShadow: `0 ${4 + i * 3}px ${12 + i * 8}px rgba(0,0,0,${0.06 + i * 0.025})`,
                      }}
                    >
                      <div className="flex items-center gap-3 p-4">
                        <div
                          className="w-11 h-11 rounded-[10px] flex items-center justify-center shrink-0"
                          style={{ background: thumbBg(project.gradient) }}
                        >
                          <FolderOpen size={18} className="text-white/80" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-poppins font-bold text-[0.8rem] text-woodsmoke-900 dark:text-woodsmoke-50 truncate">
                            {project.title}
                          </p>
                          <p className="text-[0.7rem] text-woodsmoke-400 font-medium truncate mt-0.5">
                            {project.role}
                          </p>
                        </div>
                        <ChevronRight size={14} className="text-woodsmoke-300 dark:text-woodsmoke-600 shrink-0" strokeWidth={2} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
