import { GraduationCap, Building2, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { EDUCATION } from "../data/portfolio-data";

export default function EducationSection2026() {
  return (
    <section
      id="education"
      className="py-24 px-[7%] bg-white dark:bg-woodsmoke-800"
    >
      {/* Header */}
      <div className="flex items-center gap-1.5 text-amethyst-500 font-poppins font-bold text-[0.72rem] uppercase tracking-[2.5px] mb-2">
        <GraduationCap size={13} strokeWidth={1.75} />
        Education
      </div>
      <h2
        className="font-poppins font-bold text-woodsmoke-900 dark:text-woodsmoke-50 mb-2"
        style={{ fontSize: "clamp(1.7rem,3vw,2.4rem)", lineHeight: 1.2 }}
      >
        Learning &amp; <span className="text-amethyst-500">Growth</span>
      </h2>
      <p className="text-woodsmoke-500 dark:text-woodsmoke-400 text-[0.95rem] leading-[1.75] max-w-140 mb-12">
        Formal education combined with self-directed learning across multiple
        disciplines.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {EDUCATION.map(({ degree, institution, year, description }) => (
          <div
            key={degree}
            className={cn(
              "flex gap-4 p-6 rounded-[20px] border",
              "bg-woodsmoke-50 dark:bg-woodsmoke-900",
              "border-woodsmoke-200 dark:border-woodsmoke-700",
              "shadow-[0_4px_16px_rgba(0,0,0,.06)]",
              "transition-all duration-300",
              "hover:shadow-[0_12px_36px_rgba(211,47,47,.13)] hover:-translate-y-0.5 hover:border-amethyst-100 dark:hover:border-amethyst-500/40",
            )}
          >
            <div className="min-w-10.5 h-10.5 bg-amethyst-50 dark:bg-amethyst-500/15 rounded-[11px] flex items-center justify-center shrink-0">
              <GraduationCap
                size={20}
                className="text-amethyst-500"
                strokeWidth={1.75}
              />
            </div>
            <div>
              <h3 className="font-poppins font-bold text-[0.88rem] text-woodsmoke-900 dark:text-woodsmoke-50 mb-1.5">
                {degree}
              </h3>
              <div className="flex items-center gap-1 text-amethyst-500 font-semibold text-[0.76rem] mb-0.5">
                <Building2 size={12} strokeWidth={1.75} />
                {institution}
              </div>
              <div className="flex items-center gap-1 text-woodsmoke-400 text-[0.72rem] mb-1.5">
                <Calendar
                  size={12}
                  className="text-amethyst-300"
                  strokeWidth={1.75}
                />
                {year}
              </div>
              <p className="text-[0.78rem] text-woodsmoke-500 dark:text-woodsmoke-400 leading-[1.58] m-0">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
