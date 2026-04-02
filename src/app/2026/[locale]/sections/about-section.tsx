import Image from "next/image";
import {
  User,
  Clock,
  TrendingUp,
  MapPin,
  Lightbulb,
  Smile,
  RefreshCw,
  Users,
  Search,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { RochenetteLegaspina2026 } from "@/assets/2026";
import { Typewriter } from "@/components/2026/typewriter";

const CHAPTERS = [
  {
    Icon: Clock,
    title: "The Beginning — 3D Modeling",
    body: "It started with Blender. Shaping geometry, composing scenes, and obsessing over proportion gave me a visual language and a craftsman's patience that quietly underpins everything I do today.",
  },
  {
    Icon: TrendingUp,
    title: "Growing Into — UI/UX Design",
    body: "That same spatial awareness translated into designing interfaces. With Figma, Sketch, and Adobe Suite, I learned to center the user in every decision — turning complexity into clarity.",
  },
  {
    Icon: MapPin,
    title: "Where I Am Now — Systems Analysis",
    body: "Curiosity about why systems work the way they do led me here. Today I bridge people, processes, and technology — designing solutions that are technically sound and human-centered.",
  },
];

const SOFT_SKILLS = [
  { Icon: Lightbulb, label: "Problem Solver" },
  { Icon: Smile, label: "Creative Thinker" },
  { Icon: RefreshCw, label: "Adaptable" },
  { Icon: Users, label: "Collaborative" },
  { Icon: Search, label: "Detail-Oriented" },
  { Icon: Star, label: "User-Centered" },
];

export default function AboutSection2026() {
  return (
    <section
      id="about"
      className="py-24 px-[7%] bg-white dark:bg-woodsmoke-800"
    >
      {/* Header */}
      <div className="flex items-center gap-1.5 text-amethyst-500 font-poppins font-bold text-[0.72rem] uppercase tracking-[2.5px] mb-2">
        <User size={13} strokeWidth={1.75} />
        About Me
      </div>
      <h2
        className="font-poppins font-bold text-woodsmoke-900 dark:text-woodsmoke-50 mb-2"
        style={{ fontSize: "clamp(1.7rem,3vw,2.4rem)", lineHeight: 1.2 }}
      >
        A Creative Mind <span className="text-amethyst-500">Meets</span>{" "}
        Analytical Thinking
      </h2>
      <p className="text-woodsmoke-500 dark:text-woodsmoke-400 text-[0.95rem] leading-[1.75] max-w-140 mb-14">
        My career didn&apos;t follow a straight line — and that&apos;s precisely
        what makes my perspective unique.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.7fr] gap-16 items-center">
        {/* Photo placeholder */}
        <div>
          <div
            className={cn(
              "relative rounded-[20px] overflow-hidden aspect-4/5",
              "shadow-[0_12px_36px_rgba(211,47,47,.13)]",
            )}
          >
            <Image
              src={RochenetteLegaspina2026}
              alt="Rochenette Legaspina"
              fill
              className="object-cover object-top select-none"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 500px"
              quality={100}
              priority
            />
            {/* Badge */}
            <div className="absolute bottom-0 right-0 bg-amethyst-500 text-white px-4 py-3 rounded-[20px_0_20px_0] font-poppins font-bold text-[0.72rem] leading-normal flex flex-col gap-1">
              <Typewriter
                words={["3D Artist", "UI/UX Designer", "Systems Analyst"]}
                className="min-w-[100px] inline-block"
              />
              <span className="opacity-70 text-[0.65rem]">
                Design · Analysis
              </span>
            </div>
          </div>
        </div>

        {/* Chapters + soft skills */}
        <div>
          {CHAPTERS.map(({ Icon, title, body }) => (
            <div
              key={title}
              className={cn(
                "flex gap-4 items-start mb-5 p-4 rounded-[14px] border-l-[3px] border-amethyst-500",
                "bg-woodsmoke-50 dark:bg-woodsmoke-900",
                "transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,.06)] hover:translate-x-1",
              )}
            >
              <div className="min-w-9.5 h-9.5 bg-amethyst-50 dark:bg-amethyst-500/15 rounded-[10px] flex items-center justify-center shrink-0">
                <Icon
                  size={18}
                  className="text-amethyst-500"
                  strokeWidth={1.75}
                />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-[0.87rem] text-woodsmoke-900 dark:text-woodsmoke-50 mb-1">
                  {title}
                </h4>
                <p className="text-[0.82rem] text-woodsmoke-500 dark:text-woodsmoke-400 leading-[1.6] m-0">
                  {body}
                </p>
              </div>
            </div>
          ))}

          {/* Soft skill pills */}
          <div className="flex flex-wrap gap-1.5 mt-5">
            {SOFT_SKILLS.map(({ Icon, label }) => (
              <span
                key={label}
                className={cn(
                  "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full",
                  "text-[0.76rem] font-poppins font-semibold cursor-default",
                  "border border-transparent transition-all duration-300",
                  "bg-amethyst-50 text-amethyst-500 hover:bg-amethyst-500 hover:text-white",
                  "dark:bg-amethyst-500/12 dark:text-amethyst-300 dark:border-amethyst-500/20 dark:hover:bg-amethyst-500 dark:hover:text-white",
                )}
              >
                <Icon size={13} strokeWidth={1.75} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
