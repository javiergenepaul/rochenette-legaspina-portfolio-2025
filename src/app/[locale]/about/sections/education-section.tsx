import { AboutMeContent } from "@/components";
import { EDUCATION_EXPERIENCE, style } from "@/config";
import { translate } from "@/lib";
import { useTranslations } from "next-intl";
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
      <h3 className="XL:text-h2 LG:text-h3 SM:text-h4 text-h5 font-semibold text-scorpion-600 dark:text-woodsmoke-50 text-center">
        {translate(useTranslations(), "about.education.title")}
      </h3>
      <div className="grid MD:grid-cols-2 grid-cols-1 gap-6">
        {EDUCATION_EXPERIENCE.map((work, index) => (
          <AboutMeContent key={index} {...work} />
        ))}
      </div>
    </section>
  );
}
