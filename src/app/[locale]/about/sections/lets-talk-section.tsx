import { Button } from "@/components/ui/button";
import { style } from "@/config";
import { translate } from "@/lib";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";

export default function LetsTalkSection() {
  return (
    <section
      id="lets-talk-section"
      className={twMerge(
        "bg-amethyst-100 dark:bg-woodsmoke-900 xl:py-52 lg:py-40 py-20 flex justify-center items-center",
        style.sectionContainerPaddingX
      )}
    >
      <div className="flex flex-col gap-16 items-center w-full ">
        <div className="flex flex-col">
          <h2 className="xl:text-h1 lg:text-h2 sm:text-h3 text-h4 font-bold text-scorpion-400 dark:text-woodsmoke-50 text-center">
            {translate(useTranslations(), "about.letsTalk.title.1")}
          </h2>
          <h2 className="xl:text-h1 lg:text-h2 sm:text-h3 text-h4 font-bold text-amethyst-400 dark:text-amethyst-400 text-center">
            {translate(useTranslations(), "about.letsTalk.title.2")}
          </h2>
        </div>
        <div className="flex md:gap-6 gap-5 md:flex-row flex-col items-center sm:w-6/12 xs:w-8/12 w-full">
          <Button
            className="xl:px-20 lg:px-14 md:px-20 w-full xl:py-5 sm:py-3.5 bg-amethyst-500 text-normal text-scorpion-50"
            variant={"default"}
          >
            <span className="xl:text-large xs:text-normal text-button">
              {translate(useTranslations(), "about.letsTalk.button.letsTalk")}
            </span>
          </Button>
          <Button
            className="xl:px-14 px-5 md:px-14 xl:py-5 xs:py-3.5 w-full text-normal text-scorpion-700 border-scorpion-700 dark:border-amethyst-500 bg-transparent"
            variant={"outline"}
          >
            <span className="xl:text-large xs:text-normal text-button dark:text-woodsmoke-50">
              {translate(
                useTranslations(),
                "about.letsTalk.button.downloadMyCV"
              )}
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
