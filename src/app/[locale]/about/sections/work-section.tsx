"use client";

import { style, WORK_EXPERIENCE } from "@/config";
import { translate } from "@/lib";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WorkSection() {
  return (
    <section
      id="work-experience-section"
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
        className="XL:text-h2 LG:text-h3 SM:text-h4 text-h5 font-semibold text-scorpion-600 dark:text-woodsmoke-50 text-center"
      >
        {translate(useTranslations(), "about.work.title")}
      </motion.h3>
      <div className="grid MD:grid-cols-1 grid-cols-1 gap-6 XL:w-8/12 LG:w-9/12 w-full mx-auto">
        {WORK_EXPERIENCE.map((experience, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              bounce: 0.2,
            }}
            key={index}
            className={`flex XL:flex-row LG:flex-row MD:flex-col SM:flex-row XS:flex-col flex-col SM:items-start items-center gap-6 p-6 rounded-lg hover:border hover:dark:border-amethyst-50 dark:bg-woodsmoke-900 border dark:border-woodsmoke-900 shadow-content-card cursor-pointer ${
              index === 0
                ? "bg-[#ffdada] border border-[#ffdada] hover:border-amethyst-500"
                : index === 1
                ? "bg-[#D0CFFF] border border-[#D0CFFF] hover:border-amethyst-500"
                : "bg-[#FBCBB2] border border-[#FBCBB2] hover:border-amethyst-500"
            }`}
            onClick={() => window.open(experience.url, "_blank")}
          >
            <Image
              className="object-contain XL:h-36 XL:w-36 LG:h-28 LG:w-28 MD:h-24 MD:w-24 SM:h-20 SM:w-20 w-16 h-16 shadow-[0_0_14.98px_rgba(0,0,0,0.14)] rounded-2xl bg-scorpion-50 leading-[1.1875rem]"
              src={experience.image}
              alt={experience.imageAlt}
            />
            <div className="flex flex-col gap-2 items-center MD:items-start mt-6">
              <span className="XL:text-large text-normal font-bold text-scorpion-700 dark:text-woodsmoke-50">
                {experience.title}
              </span>
              <span className="XL:text-large text-normal font-medium text-scorpion-600 dark:text-woodsmoke-50 leading-[1.1875rem]">
                {experience.subTitle}{" "}
                {`(${experience.startDate?.format(
                  "YYYY"
                )} - ${experience.endDate?.format("YYYY")})`}
              </span>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                {experience.description.map((item, itemIndex) => (
                  <li
                    className="XL:text-large text-normal text-scorpion-500 dark:text-woodsmoke-300 leading-[1.1875rem] text-center XS:text-left"
                    key={itemIndex}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
