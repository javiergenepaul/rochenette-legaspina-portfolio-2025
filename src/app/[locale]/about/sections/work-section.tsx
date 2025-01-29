import { AboutMeContent } from "@/components";
import { style, WORK_EXPERIENCE } from "@/config";
import { translate } from "@/lib";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function WorkSection() {
  return (
    <section
      id="work-experience-section"
      className={twMerge(
        "flex flex-col LG:gap-10 gap-8",
        style.sectionContainerPaddingX
      )}
    >
      <h3 className="XL:text-h2 LG:text-h3 SM:text-h4 text-h5 font-semibold text-scorpion-600 dark:text-woodsmoke-50 text-center">
        {translate(useTranslations(), "about.work.title")}
      </h3>
      <div className="grid MD:grid-cols-2 grid-cols-1 gap-6">
        {/* Alliance */}
        <div className="flex flex-col SM:flex-row gap-6 p-6 items-start rounded-lg dark:bg-woodsmoke-900 bg-[#ffdada] shadow-content-card">
          <Image
            className="object-contain XL:h-36 XL:w-36 LG:h-28 LG:w-28 MD:h-24 MD:w-24 SM:h-20 SM:w-20 w-16 h-16 shadow-[0_0_14.98px_rgba(0,0,0,0.14)] rounded-2xl bg-scorpion-50 leading-[1.1875rem]"
            src={WORK_EXPERIENCE[0].image}
            alt={WORK_EXPERIENCE[0].imageAlt}
          />
          <div className="flex flex-col gap-2 items-center SM:items-start mt-6">
            <span className="XL:text-large text-normal font-bold text-scorpion-700 dark:text-woodsmoke-50">
              {WORK_EXPERIENCE[0].title}
            </span>
            <span className="XL:text-large text-normal font-medium text-scorpion-600 dark:text-woodsmoke-50 leading-[1.1875rem]">
              {WORK_EXPERIENCE[0].subTitle}
            </span>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              {WORK_EXPERIENCE[0].description.map((item, index) => (
                <li
                  className="XL:text-large text-normal text-scorpion-500 dark:text-woodsmoke-300 leading-[1.1875rem] text-center SM:text-left"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mach 95 */}
        <div className="flex flex-col SM:flex-row gap-6 p-6 items-start rounded-lg dark:bg-woodsmoke-900 bg-[#D0CFFF] shadow-content-card">
          <Image
            className="object-contain XL:h-36 XL:w-36 LG:h-28 LG:w-28 MD:h-24 MD:w-24 SM:h-20 SM:w-20 w-16 h-16 shadow-[0_0_14.98px_rgba(0,0,0,0.14)] rounded-2xl bg-scorpion-50 leading-[1.1875rem]"
            src={WORK_EXPERIENCE[1].image}
            alt={WORK_EXPERIENCE[1].imageAlt}
          />
          <div className="flex flex-col gap-2 items-center SM:items-start mt-6">
            <span className="XL:text-large text-normal font-bold text-scorpion-700 dark:text-woodsmoke-50">
              {WORK_EXPERIENCE[1].title}
            </span>
            <span className="XL:text-large text-normal font-medium text-scorpion-600 dark:text-woodsmoke-50 leading-[1.1875rem]">
              {WORK_EXPERIENCE[1].subTitle}
            </span>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              {WORK_EXPERIENCE[1].description.map((item, index) => (
                <li
                  className="XL:text-large text-normal text-scorpion-500 dark:text-woodsmoke-300 leading-[1.1875rem] text-center SM:text-left"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Exodia */}
        <div className="flex flex-col SM:flex-row gap-6 p-6 items-start rounded-lg dark:bg-woodsmoke-900 bg-[#FBCBB2] shadow-content-card">
          <Image
            className="object-contain XL:h-36 XL:w-36 LG:h-28 LG:w-28 MD:h-24 MD:w-24 SM:h-20 SM:w-20 w-16 h-16 shadow-[0_0_14.98px_rgba(0,0,0,0.14)] rounded-2xl bg-scorpion-50 leading-[1.1875rem]"
            src={WORK_EXPERIENCE[1].image}
            alt={WORK_EXPERIENCE[1].imageAlt}
          />
          <div className="flex flex-col gap-2 items-center SM:items-start mt-6">
            <span className="XL:text-large text-normal font-bold text-scorpion-700 dark:text-woodsmoke-50">
              {WORK_EXPERIENCE[1].title}
            </span>
            <span className="XL:text-large text-normal font-medium text-scorpion-600 dark:text-woodsmoke-50 leading-[1.1875rem]">
              {WORK_EXPERIENCE[1].subTitle}
            </span>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              {WORK_EXPERIENCE[1].description.map((item, index) => (
                <li
                  className="XL:text-large text-normal text-scorpion-500 dark:text-woodsmoke-300 leading-[1.1875rem] text-center SM:text-left"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
