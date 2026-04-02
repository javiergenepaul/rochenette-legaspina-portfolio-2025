"use client";

import { useLoadingStore } from "@/store";
import { useEffect } from "react";
import { Send, Briefcase, Monitor, Wrench, ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection2026() {
  const { setLoading } = useLoadingStore();
  useEffect(() => { setLoading(false); }, [setLoading]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-[7%] overflow-hidden"
      style={{ background: "linear-gradient(150deg,#1a0000 0%,#3d0000 45%,#1a0510 100%)" }}
    >
      {/* Ambient orbs */}
      <div
        className="absolute top-[-120px] right-[-60px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "rgba(211,47,47,.4)",
          filter: "blur(90px)",
          animation: "drift-orb 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-60px] left-[6%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "rgba(229,115,115,.25)",
          filter: "blur(90px)",
          animation: "drift-orb 10s ease-in-out infinite 4s",
        }}
      />
      <div
        className="absolute top-[40%] left-[35%] w-[180px] h-[180px] rounded-full pointer-events-none"
        style={{
          background: "rgba(183,28,28,.3)",
          filter: "blur(90px)",
          animation: "drift-orb 10s ease-in-out infinite 7s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[700px]">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-white/7 border border-white/15 text-white/75 px-4 py-1.5 rounded-full text-[0.75rem] font-semibold tracking-[0.8px] mb-6 font-poppins">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
          Open to opportunities
        </div>

        {/* Title */}
        <h1 className="font-poppins font-extrabold text-white leading-[1.12] tracking-tight mb-4"
          style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)" }}
        >
          Designing Systems.<br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg,#E57373,#FFCDD2)" }}
          >
            Solving Problems.
          </span>
          <br />
          Creating Impact.
        </h1>

        {/* Description */}
        <p className="text-white/62 text-normal leading-[1.8] max-w-[580px] mb-8">
          I&apos;m a Systems Analyst with roots in 3D modeling and UI/UX design — blending
          creative intuition with analytical precision to build solutions that are elegant and effective.
        </p>

        {/* Trail pills */}
        <div className="flex flex-wrap items-center gap-2 mb-9">
          {[
            { Icon: Monitor,  label: "3D Modeling" },
            { Icon: Wrench,   label: "UI/UX Design" },
            { Icon: Briefcase,label: "Systems Analyst" },
          ].map(({ Icon, label }, i) => (
            <div key={label} className="flex items-center gap-1">
              {i > 0 && (
                <ChevronRight size={12} className="text-white/25" strokeWidth={1.75} />
              )}
              <div className="flex items-center gap-1.5 bg-white/7 border border-white/12 text-white/80 px-3.5 py-1.5 rounded-full text-[0.78rem] font-poppins font-medium">
                <Icon size={13} className="text-amethyst-300" strokeWidth={1.75} />
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className={cn(
              "inline-flex items-center gap-2 px-7 py-3 rounded-xl font-poppins font-bold text-[0.88rem] text-white no-underline",
              "bg-linear-to-br from-amethyst-500 to-amethyst-700",
              "shadow-[0_4px_18px_rgba(211,47,47,.45)]",
              "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(211,47,47,.55)]"
            )}
          >
            <Briefcase size={15} strokeWidth={1.75} />
            View My Work
          </a>
          <a
            href="#contact"
            className={cn(
              "inline-flex items-center gap-2 px-7 py-3 rounded-xl font-poppins font-semibold text-[0.88rem] text-white no-underline",
              "border border-white/22 bg-transparent",
              "transition-all duration-300 hover:bg-white/8 hover:-translate-y-0.5"
            )}
          >
            <Send size={15} strokeWidth={1.75} />
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/10">
          {[
            { val: "3+",  label: "Disciplines" },
            { val: "5+",  label: "Projects" },
            { val: "10+", label: "Tools" },
            { val: "∞",   label: "Curiosity" },
          ].map(({ val, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="font-poppins font-extrabold text-white text-[1.6rem] leading-none">
                {val.replace(/\+$/, "")}<span className="text-amethyst-300">{val.endsWith("+") ? "+" : ""}</span>
              </span>
              <span className="text-[0.72rem] text-white/45 uppercase tracking-[1px]">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 flex flex-col items-center gap-1.5 text-white/30 text-[0.7rem] z-10 font-poppins"
        style={{ animation: "scroll-bob 2.4s ease-in-out infinite", transform: "translateX(-50%)" }}
      >
        <span>Scroll</span>
        <ChevronDown size={14} strokeWidth={2} />
      </div>
    </section>
  );
}
