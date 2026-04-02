"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderOpen,
  User2,
  Tag,
  Layers,
  X,
  ChevronRight,
  ChevronLeft,
  Monitor,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PROJECTS } from "../data/portfolio-data";

const THUMB_GRADIENTS: Record<string, string> = {
  "from-red-700 to-red-400": "linear-gradient(135deg,#b71c1c,#ef5350)",
  "from-rose-800 to-red-500": "linear-gradient(135deg,#880e2e,#D32F2F)",
  "from-red-900 to-orange-600": "linear-gradient(135deg,#D32F2F,#e65100)",
  "from-purple-900 to-red-700": "linear-gradient(135deg,#6a1b9a,#D32F2F)",
  "from-red-700 to-pink-700": "linear-gradient(135deg,#D32F2F,#880e4f)",
};

function thumbBg(gradient: string) {
  return THUMB_GRADIENTS[gradient] ?? "linear-gradient(135deg,#D32F2F,#b71c1c)";
}

const SPRING = { type: "spring" as const, stiffness: 340, damping: 34 };

function MockupCarousel({
  mockups,
  gradient,
}: {
  mockups: { label: string; image?: string }[];
  gradient: string;
}) {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = mockups.length;

  function go(next: number) {
    setDirection(next > slide ? 1 : -1);
    setSlide(next);
  }
  function prev() {
    go((slide - 1 + total) % total);
  }
  function next() {
    go((slide + 1) % total);
  }

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  const current = mockups[slide];

  return (
    <div className="flex flex-col gap-3">
      <p className="text-[0.68rem] text-amethyst-500 font-poppins font-bold uppercase tracking-wide">
        Mockups &amp; Screenshots
      </p>

      {/* Slide area */}
      <div className="relative rounded-[14px] overflow-hidden bg-woodsmoke-950 aspect-video select-none">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={slide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            {current.image ? (
              <Image
                src={current.image}
                alt={current.label}
                fill
                className="object-cover"
              />
            ) : (
              /* Placeholder mockup */
              <div
                className="w-full h-full flex flex-col"
                style={{ background: thumbBg(gradient) }}
              >
                {/* Fake browser chrome */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-black/30 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                  <div className="ml-2 flex-1 h-4 rounded bg-white/10 max-w-45" />
                </div>
                {/* Fake content skeleton */}
                <div className="flex-1 p-4 flex flex-col gap-3 opacity-60">
                  <div className="h-5 rounded bg-white/25 w-2/5" />
                  <div className="grid grid-cols-3 gap-2 flex-1">
                    <div className="rounded-lg bg-white/15 col-span-2" />
                    <div className="flex flex-col gap-2">
                      <div className="rounded-lg bg-white/15 flex-1" />
                      <div className="rounded-lg bg-white/10 flex-1" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-3 rounded bg-white/20 w-1/3" />
                    <div className="h-3 rounded bg-white/15 w-1/4" />
                  </div>
                </div>
                {/* Label overlay */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  <Monitor size={10} className="text-white/70" />
                  <span className="text-white/80 font-poppins font-semibold text-[0.65rem]">
                    {current.label}
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
            >
              <ChevronLeft size={14} strokeWidth={2} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
            >
              <ChevronRight size={14} strokeWidth={2} />
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {total > 1 && (
        <div className="flex items-center justify-center gap-1.5">
          {mockups.map((m, i) => (
            <button
              key={m.label}
              onClick={() => go(i)}
              className={cn(
                "transition-all duration-200 rounded-full",
                i === slide
                  ? "w-5 h-1.5 bg-amethyst-500"
                  : "w-1.5 h-1.5 bg-woodsmoke-300 dark:bg-woodsmoke-600 hover:bg-amethyst-300",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

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
      <p className="text-woodsmoke-500 dark:text-woodsmoke-400 text-[0.95rem] leading-[1.75] max-w-140 mb-12">
        A cross-disciplinary portfolio spanning systems analysis, UX design, and
        3D visualization.
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
              whileHover={{
                y: -6,
                boxShadow: "0 12px 36px rgba(211,47,47,.15)",
              }}
              transition={{ ...SPRING, delay: i * 0.06 }}
              onClick={() => setSelectedIndex(i)}
              className={cn(
                "flex flex-col overflow-hidden border cursor-pointer",
                "bg-white dark:bg-woodsmoke-800",
                "border-woodsmoke-200 dark:border-woodsmoke-700",
                "shadow-[0_4px_16px_rgba(0,0,0,.06)]",
              )}
            >
              {/* Thumbnail */}
              <div
                className="h-43.75 relative flex items-center justify-center overflow-hidden"
                style={{ background: thumbBg(project.gradient) }}
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                <FolderOpen
                  size={48}
                  className="text-white/65 relative z-10"
                  strokeWidth={1.25}
                />
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
                    <span
                      key={s}
                      className="bg-amethyst-50 text-amethyst-500 dark:bg-amethyst-500/15 dark:text-amethyst-300 px-2 py-0.5 rounded-full text-[0.68rem] font-poppins font-bold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-3 border-t border-woodsmoke-200 dark:border-woodsmoke-700">
                  <button
                    onClick={() => setSelectedIndex(i)}
                    className={cn(
                      "inline-flex items-center gap-1.5 text-caption font-poppins font-bold",
                      "px-3 py-1.5 rounded-full border transition-all duration-200",
                      "text-amethyst-500 bg-amethyst-50 border-amethyst-100",
                      "dark:text-amethyst-300 dark:bg-amethyst-500/12 dark:border-amethyst-500/25",
                      "hover:bg-amethyst-500 hover:text-white hover:border-amethyst-500",
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
                "shadow-[0_16px_56px_rgba(211,47,47,.18)]",
              )}
            >
              {/* Header bar with type badge + close */}
              <div
                className="flex items-center justify-between px-5 py-3 shrink-0"
                style={{ background: thumbBg(selected.gradient) }}
              >
                <div className="flex items-center gap-1.5 bg-white/18 backdrop-blur-sm border border-white/28 text-white px-3 py-1 rounded-full text-[0.68rem] font-poppins font-bold">
                  <Tag size={11} strokeWidth={2} />
                  {selected.type}
                </div>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-black/50 transition-colors duration-200"
                >
                  <X size={15} strokeWidth={2} />
                </button>
              </div>

              {/* Expanded body — fades in after the card moves */}
              <motion.div
                className="p-6 flex flex-col gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.22, duration: 0.3 }}
              >
                <h3
                  className="font-poppins font-bold text-woodsmoke-900 dark:text-woodsmoke-50"
                  style={{ fontSize: "clamp(1.1rem,2vw,1.3rem)" }}
                >
                  {selected.title}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amethyst-50 dark:bg-amethyst-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <User2
                        size={13}
                        className="text-amethyst-500"
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <p className="text-[0.62rem] text-amethyst-500 font-poppins font-bold uppercase tracking-wide mb-0.5">
                        Role
                      </p>
                      <p className="text-[0.8rem] text-woodsmoke-700 dark:text-woodsmoke-200 font-medium leading-snug">
                        {selected.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amethyst-50 dark:bg-amethyst-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Layers
                        size={13}
                        className="text-amethyst-500"
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <p className="text-[0.62rem] text-amethyst-500 font-poppins font-bold uppercase tracking-wide mb-0.5">
                        Type
                      </p>
                      <p className="text-[0.8rem] text-woodsmoke-700 dark:text-woodsmoke-200 font-medium leading-snug">
                        {selected.type}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[0.62rem] text-amethyst-500 font-poppins font-bold uppercase tracking-wide mb-1">
                    About
                  </p>
                  <p className="text-[0.84rem] text-woodsmoke-600 dark:text-woodsmoke-300 leading-[1.7]">
                    {selected.description}
                  </p>
                </div>

                <div>
                  <p className="text-[0.62rem] text-amethyst-500 font-poppins font-bold uppercase tracking-wide mb-2">
                    Tech &amp; Tools
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.stack.map((s) => (
                      <span
                        key={s}
                        className="bg-amethyst-50 text-amethyst-500 dark:bg-amethyst-500/15 dark:text-amethyst-300 px-2.5 py-0.5 rounded-full text-[0.72rem] font-poppins font-bold"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mockup carousel */}
                <MockupCarousel
                  mockups={selected.mockups}
                  gradient={selected.gradient}
                />

                <div className="pt-1 border-t border-woodsmoke-100 dark:border-woodsmoke-700">
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
                        "absolute w-full rounded-2xl overflow-hidden border cursor-pointer",
                        "bg-white dark:bg-woodsmoke-800",
                        "border-woodsmoke-200 dark:border-woodsmoke-700",
                        "hover:-translate-y-1 transition-transform duration-200",
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
                          <FolderOpen
                            size={18}
                            className="text-white/80"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-poppins font-bold text-[0.8rem] text-woodsmoke-900 dark:text-woodsmoke-50 truncate">
                            {project.title}
                          </p>
                          <p className="text-[0.7rem] text-woodsmoke-400 font-medium truncate mt-0.5">
                            {project.role}
                          </p>
                        </div>
                        <ChevronRight
                          size={14}
                          className="text-woodsmoke-300 dark:text-woodsmoke-600 shrink-0"
                          strokeWidth={2}
                        />
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
