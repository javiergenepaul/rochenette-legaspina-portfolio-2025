import { AboutMeContent } from "@/components";
import { style, WORK_EXPERIENCE } from "@/config";
import { twMerge } from "tailwind-merge";

export default function WorkSection() {
  return (
    <section
      id="work-experience-section"
      className={twMerge(
        "flex flex-col lg:gap-10 gap-8",
        style.sectionContainerPaddingX
      )}
    >
      <h3 className="xl:text-h2 lg:text-h3 sm:text-h4 text-h5 font-semibold text-scorpion-600 text-center" />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {WORK_EXPERIENCE.map((work, index) => (
          <AboutMeContent key={index} {...work} />
        ))}
      </div>
    </section>
  );
}
