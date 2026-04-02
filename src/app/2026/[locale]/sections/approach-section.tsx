import { Compass, Search, Pencil, FileText, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { APPROACH_STEPS } from "../data/portfolio-data";

const STEP_ICONS = [Search, Pencil, FileText, Rocket];

export default function ApproachSection2026() {
  return (
    <section
      id="approach"
      className="relative py-24 px-[7%] overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg,#1a0000 0%,#2d0000 60%,#1a0510 100%)",
      }}
    >
      {/* Ambient orbs */}
      <div
        className="absolute -top-20 -right-10 w-95 h-95 rounded-full opacity-18 pointer-events-none"
        style={{ background: "#D32F2F", filter: "blur(100px)" }}
      />
      <div
        className="absolute -bottom-15 left-[5%] w-65 h-65 rounded-full opacity-18 pointer-events-none"
        style={{ background: "#E57373", filter: "blur(100px)" }}
      />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-1.5 text-amethyst-300/90 font-poppins font-bold text-[0.72rem] uppercase tracking-[2.5px] mb-2">
          <Compass size={13} strokeWidth={1.75} />
          My Approach
        </div>
        <h2
          className="font-poppins font-bold text-white mb-2"
          style={{ fontSize: "clamp(1.7rem,3vw,2.4rem)", lineHeight: 1.2 }}
        >
          How I <span className="text-amethyst-300">Work</span>
        </h2>
        <p className="text-white/50 text-[0.95rem] leading-[1.75] max-w-140 mb-12">
          A structured, iterative process that keeps stakeholders aligned and
          solutions grounded in reality.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {APPROACH_STEPS.map(({ number, title, description }, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <div
                key={number}
                className={cn(
                  "bg-white/4 border border-white/9 rounded-[20px] p-7",
                  "transition-all duration-300",
                  "hover:bg-white/8 hover:-translate-y-1",
                )}
              >
                <div className="font-poppins font-extrabold text-[1.9rem] text-amethyst-300/28 mb-2 leading-none">
                  {number}
                </div>
                <div className="w-9.5 h-9.5 rounded-[10px] bg-amethyst-500/20 border border-amethyst-500/35 flex items-center justify-center mb-3">
                  <Icon
                    size={18}
                    className="text-amethyst-300"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="font-poppins font-bold text-white text-[0.88rem] mb-2">
                  {title}
                </h3>
                <p className="text-white/50 text-[0.78rem] leading-[1.65]">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
