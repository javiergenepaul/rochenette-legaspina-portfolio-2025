"use client";

import { EDUCATION_EXPERIENCE, LINK_URL, style } from "@/config";
import { translate } from "@/lib";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function EducationSection() {
  return (
    <section
      id="education-section"
      className={twMerge(
        "flex flex-col LG:gap-10 gap-8",
        style.sectionContainerPaddingX
      )}
    >
      <motion.h3 className="XL:text-h2 LG:text-h3 SM:text-h4 text-h5 font-semibold text-scorpion-600 dark:text-woodsmoke-50 text-center">
        {translate(useTranslations(), "about.education.title")}
      </motion.h3>
      <div className="grid MD:grid-cols-1 grid-cols-1 gap-6 XL:w-8/12 LG:w-9/12 w-full  mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            bounce: 0.2,
          }}
          onClick={() => window.open(LINK_URL.UC, "_blank")}
          className="bg-[#D2E3F9] border dark:border-woodsmoke-900 hover:dark:border-amethyst-50 border-[#D2E3F9] hover:border-amethyst-500 flex XL:flex-row LG:flex-row MD:flex-col SM:flex-row XS:flex-col flex-col SM:items-start items-center gap-6 p-6 rounded-lg dark:bg-woodsmoke-900 shadow-content-card cursor-pointer"
        >
          <Image
            className="object-contain XL:h-36 XL:w-36 LG:h-28 LG:w-28 MD:h-24 MD:w-24 SM:h-20 SM:w-20 w-16 h-16 shadow-[0_0_14.98px_rgba(0,0,0,0.14)] rounded-2xl bg-scorpion-50 leading-[1.1875rem]"
            src={EDUCATION_EXPERIENCE[0].image}
            alt={EDUCATION_EXPERIENCE[0].imageAlt}
          />
          <div className="flex flex-col gap-2 items-center MD:items-start mt-6">
            <span className="XL:text-large text-normal font-bold text-scorpion-700 dark:text-woodsmoke-50">
              {EDUCATION_EXPERIENCE[0].title}
            </span>
            <span className="XL:text-large text-normal font-medium text-scorpion-600 dark:text-woodsmoke-50 leading-[1.1875rem]">
              {EDUCATION_EXPERIENCE[0].subTitle}{" "}
              {`(${EDUCATION_EXPERIENCE[0].startDate?.format(
                "YYYY"
              )} - ${EDUCATION_EXPERIENCE[0].endDate?.format("YYYY")})`}
            </span>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              {EDUCATION_EXPERIENCE[0].description.map((item, index) => (
                <li
                  className="XL:text-large text-normal text-scorpion-500 dark:text-woodsmoke-300 leading-[1.1875rem] text-center XS:text-left"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
