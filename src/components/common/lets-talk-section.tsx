"use client";

import { Button } from "@/components/ui/button";
import { style } from "@/config";
import { translate } from "@/lib";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { twMerge } from "tailwind-merge";

export default function LetsTalkSection() {
  const { resolvedTheme } = useTheme();
  return (
    <section
      id="lets-talk-section"
      className={twMerge(
        "bg-amethyst-100 dark:bg-woodsmoke-900 XL:py-52 :G:py-40 py-20 flex justify-center items-center",
        style.sectionContainerPaddingX
      )}
    >
      <div className="flex flex-col gap-16 items-center w-full ">
        <div className="flex flex-col">
          <h2 className="XL:text-h1 LG:text-h2 SM:text-h3 text-h4 font-bold text-scorpion-400 dark:text-woodsmoke-50 text-center">
            {translate(useTranslations(), "about.letsTalk.title.1")}
          </h2>
          <h2 className="XL:text-h1 LG:text-h2 SM:text-h3 text-h4 font-bold text-amethyst-400 dark:text-amethyst-400 text-center">
            {translate(useTranslations(), "about.letsTalk.title.2")}
          </h2>
        </div>
        <div className="flex MD:gap-6 gap-5 MD:flex-row flex-col items-center SM:w-6/12 xs:w-8/12 w-full">
          <Button
            className="XL:px-20 LG:px-14 MD:px-20 w-full XL:py-5 SM:py-3.5 bg-amethyst-500 text-normal text-scorpion-50"
            variant={"default"}
            onClick={() => {
              window.open(
                "https://calendar.app.google/t3SJ1W9s6HMtSPiK9",
                "_blank"
              );
            }}
          >
            <span className="XL:text-large xs:text-normal text-button">
              {translate(useTranslations(), "about.letsTalk.button.letsTalk")}
            </span>
          </Button>
          <Button
            className="XL:px-14 px-5 MD:px-14 XL:py-5 xs:py-3.5 w-full text-normal text-scorpion-700 border-scorpion-700 dark:border-amethyst-500 bg-transparent"
            variant={"outline"}
            onClick={() => {
              const resumeFile =
                resolvedTheme === "dark"
                  ? "rochenette-legaspina-2024-resume-dark.pdf"
                  : "rochenette-legaspina-2024-resume-light.pdf";
              window.open(
                `${window.location.origin}/2025/resume/${resumeFile}`,
                "_blank"
              );
            }}
          >
            <span className="XL:text-large xs:text-normal text-button dark:text-woodsmoke-50">
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
