import { SKILLS_AND_TOOLS, style } from "@/config";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function SkillsAndToolsSection() {
  return (
    <section
      id="skills-and-tools-section"
      className={twMerge(
        "flex flex-col lg:gap-10 gap-8",
        style.sectionContainerPaddingX
      )}
    >
      <h3 className="xl:text-h2 lg:text-h3 md:text-h4 text-h5 font-semibold text-scorpion-600 text-center">
        Skills and Tools
      </h3>
      <div className="flex gap-6 mx-auto">
        {SKILLS_AND_TOOLS.map((skill, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              className="xl:h-28 xl:w-28 md:h-20 md:w-20 sm:h-16 sm:w-16 h-14 w-14 object-contain"
              src={skill.image}
              alt={skill.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
