import { AboutMeContent } from "@/components";
import { CERTIFICATION_EXPERIENCE, style } from "@/config";
import { translate } from "@/lib";
import { useTranslations } from "next-intl";
import { use } from "react";
import { twMerge } from "tailwind-merge";

export default function CertificationSection() {
  return (
    <section
      id="certification-section"
      className={twMerge(
        "flex flex-col LG:gap-10 gap-8",
        style.sectionContainerPaddingX
      )}
    >
      <h3 className="XL:text-h2 LG:text-h3 SM:text-h4 text-h5 font-semibold text-scorpion-600 dark:text-woodsmoke-50 text-center">
        {translate(useTranslations(), "about.certificate.title")}
      </h3>
      <div className="grid MD:grid-cols-2 grid-cols-1 gap-6">
        {CERTIFICATION_EXPERIENCE.map((work, index) => (
          <AboutMeContent key={index} {...work} />
        ))}
      </div>
    </section>
  );
}
