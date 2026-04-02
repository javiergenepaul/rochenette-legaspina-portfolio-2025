"use client";

import { AnimatedTooltip } from "@/components/2025/ui/animated-tooltip";
import { SKILLS_AND_TOOLS, style } from "@/config";
import { translate } from "@/lib";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { twMerge } from "tailwind-merge";

export default function SkillsAndToolsSection() {
  const { t } = useTranslation();
  return (
    <section
      id="skills-and-tools-section"
      className={twMerge(
        "flex flex-col lg:gap-10 gap-8",
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
        className="xl:text-h2 lg:text-h3 md:text-h4 text-h5 font-semibold text-scorpion-600 dark:text-woodsmoke-50 text-center"
      >
        {translate(t, "about.skillAndTools.title")}
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
                    "xl:h-28 xl:w-28 md:h-20 md:w-20 sm:h-16 sm:w-16 h-14 w-14 object-contain",
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
