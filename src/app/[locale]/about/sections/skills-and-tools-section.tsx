"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { SKILLS_AND_TOOLS, style } from "@/config";
import { translate } from "@/lib";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";

export default function SkillsAndToolsSection() {
  return (
    <section
      id="skills-and-tools-section"
      className={twMerge(
        "flex flex-col LG:gap-10 gap-8",
        style.sectionContainerPaddingX
      )}
    >
      <motion.h3
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.5,
        }}
        className="XL:text-h2 LG:text-h3 MD:text-h4 text-h5 font-semibold text-scorpion-600 dark:text-woodsmoke-50 text-center"
      >
        {translate(useTranslations(), "about.skillAndTools.title")}
      </motion.h3>
      <div className="flex gap-6 mx-auto">
        {SKILLS_AND_TOOLS.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.5,
            }}
            key={index}
            className="flex items-center justify-center cursor-pointer"
          >
            <AnimatedTooltip
              items={[
                {
                  id: 5,
                  name: skill.name,
                  designation: skill.designation,
                  image: skill.image as unknown as string,
                  className:
                    "XL:h-28 XL:w-28 MD:h-20 MD:w-20 SM:h-16 SM:w-16 h-14 w-14 object-contain",
                  leftClass: "left-[-15px]",
                  imageAlt: skill.alt,
                  url: skill.url,
                },
              ]}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
