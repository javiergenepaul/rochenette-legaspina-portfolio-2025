import { Separator } from "@/components/ui/separator";
import { InfoInterface, ProjectInterface } from "@/config";
import { translate } from "@/lib";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";

const InfoCard = ({
  title,
  description,
  className,
}: InfoInterface & { className?: string }) => {
  return (
    <article
      className={twMerge(
        "MD:p-8 XS:p-6 p-5 border border-woodsmoke-400 dark:border-woodsmoke-400 rounded-lg flex flex-col SM:items-start items-center gap-6",
        className
      )}
    >
      <svg
        className="stroke-woodsmoke-600 dark:stroke-woodsmoke-50"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`${title} icon`}
      >
        <path
          d="M11 17H19M5 12H19M11 7H19"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h3 className="text-woodsmoke-600 font-bold XL:text-h3 LG:text-h4 text-h5 dark:text-woodsmoke-50">
        {title}
      </h3>
      <p className="XL:text-large text-normal text-woodsmoke-500 text-wrap text-justify dark:text-woodsmoke-300">
        {description}
      </p>
    </article>
  );
};

export default function ProjectFormat({
  title,
  sectionId,
  role,
  desciption,
  information,
}: ProjectInterface) {
  return (
    <div className="space-y-32 mt-32">
      <section id={sectionId} className="h-full space-y-20">
        <div className="space-y-6 mb-20">
          <header data-test="project-header" className="text-center space-y-2">
            <h2 className="font-bold XL:text-h2 LG:text-h3 MD:text-h4 text-h5 text-woodsmoke-600 dark:text-woodsmoke-50">
              {title}
            </h2>
            <p className="XL:text-large text-normal LG:font-normal font-medium text-woodsmoke-600 dark:text-woodsmoke-50">
              {translate(useTranslations(), "project.role", { role: role })}
            </p>
          </header>
          <p className="XL:text-large text-normal text-woodsmoke-500 text-justify dark:text-woodsmoke-300">
            {desciption}
          </p>
        </div>

        <div
          className="relative bg-amethyst-950 XL:h-[722px] XL:w-[722px] LG:h-[647px] LG:w-[556px] MD:h-[538px] MD:w-[542px] SM:h-[514px] SM:w-[450px] XS:h-[451px] XS:w-[420px] w-full h-[484px] justify-self-center rounded-lg"
          aria-label="Placeholder image with background color"
          role="img"
        />

        <div className="grid MD:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10">
          {information.map((info, index) => (
            <InfoCard
              key={index}
              className={
                information.length === 3 && index === 2
                  ? "MD:col-span-2 col-span-1"
                  : ""
              }
              {...info}
            />
          ))}
        </div>

        <div className="grid MD:grid-cols-3 grid-cols-1 gap-6">
          <div
            className="bg-amethyst-950 XL:h-[540px] LG:h-[533px] SM:h-[488px] XS:h-[541px] h-[598px] w-full rounded-lg"
            aria-label="Placeholder image with background color"
            role="img"
          />
          <div
            className="bg-amethyst-950 XL:h-[540px] LG:h-[533px] SM:h-[488px] XS:h-[541px] h-[598px] w-full rounded-lg"
            aria-label="Placeholder image with background color"
            role="img"
          />
          <div
            className="bg-amethyst-950 XL:h-[540px] LG:h-[533px] SM:h-[488px] XS:h-[541px] h-[598px] w-full rounded-lg"
            aria-label="Placeholder image with background color"
            role="img"
          />
        </div>
      </section>
      <Separator />
    </div>
  );
}
