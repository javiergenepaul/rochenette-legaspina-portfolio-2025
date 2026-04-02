import { FolderOpen, User2, Tag, Layers, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROJECTS } from "../data/portfolio-data";

const THUMB_GRADIENTS: Record<string, string> = {
  "from-red-700 to-red-400":    "linear-gradient(135deg,#b71c1c,#ef5350)",
  "from-rose-800 to-red-500":   "linear-gradient(135deg,#880e2e,#D32F2F)",
  "from-red-900 to-orange-600": "linear-gradient(135deg,#D32F2F,#e65100)",
  "from-purple-900 to-red-700": "linear-gradient(135deg,#6a1b9a,#D32F2F)",
  "from-red-700 to-pink-700":   "linear-gradient(135deg,#D32F2F,#880e4f)",
};

export default function ProjectsSection2026() {
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map(({ title, type, role, description, stack, gradient, link }) => (
          <div
            key={title}
            className={cn(
              "flex flex-col rounded-[20px] overflow-hidden border",
              "bg-white dark:bg-woodsmoke-800",
              "border-woodsmoke-200 dark:border-woodsmoke-700",
              "shadow-[0_4px_16px_rgba(0,0,0,.06)]",
              "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(211,47,47,.13)]"
            )}
          >
            {/* Thumbnail */}
            <div
              className="h-[175px] relative flex items-center justify-center overflow-hidden"
              style={{ background: THUMB_GRADIENTS[gradient] ?? "linear-gradient(135deg,#D32F2F,#b71c1c)" }}
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              <FolderOpen size={48} className="text-white/65 relative z-10" strokeWidth={1.25} />
              {/* Type badge */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-1 bg-white/18 backdrop-blur-sm border border-white/28 text-white px-2.5 py-1 rounded-full text-[0.68rem] font-poppins font-bold">
                <Tag size={11} strokeWidth={2} />
                {type}
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-2.5 p-5 flex-1">
              <h3 className="font-poppins font-bold text-[0.9rem] text-woodsmoke-900 dark:text-woodsmoke-50">
                {title}
              </h3>

              <div className="flex items-start gap-1.5 text-[0.78rem]">
                <span className="flex items-center gap-1 text-amethyst-500 font-poppins font-bold min-w-[60px] shrink-0">
                  <User2 size={11} strokeWidth={2} />Role
                </span>
                <span className="text-woodsmoke-500 dark:text-woodsmoke-400 leading-[1.5]">{role}</span>
              </div>

              <div className="flex items-start gap-1.5 text-[0.78rem]">
                <span className="flex items-center gap-1 text-amethyst-500 font-poppins font-bold min-w-[60px] shrink-0">
                  <Layers size={11} strokeWidth={2} />About
                </span>
                <span className="text-woodsmoke-500 dark:text-woodsmoke-400 leading-[1.5]">{description}</span>
              </div>

              {/* Stack chips */}
              <div className="flex flex-wrap gap-1.5 mt-1">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="bg-amethyst-50 text-amethyst-500 dark:bg-amethyst-500/15 dark:text-amethyst-300 px-2 py-0.5 rounded-full text-[0.68rem] font-poppins font-bold"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="mt-auto pt-3 border-t border-woodsmoke-200 dark:border-woodsmoke-700">
                <a
                  href={link ?? "#"}
                  className={cn(
                    "inline-flex items-center gap-1.5 text-[0.75rem] font-poppins font-bold no-underline",
                    "px-3 py-1.5 rounded-full border transition-all duration-200",
                    "text-amethyst-500 bg-amethyst-50 border-amethyst-100",
                    "dark:text-amethyst-300 dark:bg-amethyst-500/12 dark:border-amethyst-500/25",
                    "hover:bg-amethyst-500 hover:text-white hover:border-amethyst-500"
                  )}
                >
                  <ExternalLink size={12} strokeWidth={2} />
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
