import { Button } from "@/components/ui/button";
import { InfoInterface, ProjectInterface } from "@/config";
import { twMerge } from "tailwind-merge";

const InfoCard = ({
  title,
  description,
  className,
}: InfoInterface & { className?: string }) => {
  return (
    <article
      className={twMerge(
        "p-8 border border-woodsmoke-400 dark:border-woodsmoke-400 rounded-lg flex flex-col gap-6",
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
      <h3 className="text-woodsmoke-600 font-bold text-h3 dark:text-woodsmoke-50">
        {title}
      </h3>
      <p className="text-large text-woodsmoke-500 text-wrap text-justify dark:text-woodsmoke-300">
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
    <section id={sectionId} className="h-full space-y-20">
      <div
        className="relative bg-amethyst-950 h-[722px] w-[722px] justify-self-center rounded-lg"
        aria-label="Placeholder image with background color"
        role="img"
      />

      <div className="space-y-6 mb-20">
        <header data-test="project-header" className="text-center space-y-2">
          <h1 className="font-bold text-h2 text-woodsmoke-600 dark:text-woodsmoke-50">
            {title}
          </h1>
          <p className="text-large text-woodsmoke-600 dark:text-woodsmoke-50">
            Role: {role}
          </p>
        </header>
        <p className="text-large text-woodsmoke-500 text-justify dark:text-woodsmoke-300">
          {desciption}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-10">
        {information.map((info, index) => (
          <InfoCard
            key={index}
            className={
              information.length === 3 && index === 2 ? "col-span-2" : ""
            }
            {...info}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div
          className="bg-amethyst-950 h-[540px] w-full rounded-lg"
          aria-label="Placeholder image with background color"
          role="img"
        />
        <div
          className="bg-amethyst-950 h-[540px] w-full rounded-lg"
          aria-label="Placeholder image with background color"
          role="img"
        />
        <div
          className="bg-amethyst-950 h-[540px] w-full rounded-lg"
          aria-label="Placeholder image with background color"
          role="img"
        />
      </div>

      <div className="rounded-lg bg-amethyst-200 w-full flex justify-between items-center p-6">
        <div className="space-y-2 flex-1">
          <h5 className="font-bold text-h5 text-woodsmoke-950">Get in Touch</h5>
          <p className="text-normal text-woodsmoke-800">
            Whether you’re looking for information or have a project in mind,
            drop me a message below, and I’ll get back to you as soon as I can.
          </p>
        </div>
        <Button
          variant={"default"}
          className="bg-amethyst-500 px-20 py-4 dark:text-white"
        >
          Let's Talk
        </Button>
      </div>
    </section>
  );
}
