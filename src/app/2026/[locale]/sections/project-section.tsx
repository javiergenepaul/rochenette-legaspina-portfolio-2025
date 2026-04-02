import ProjectContainer from "./components/project-container";
import { style } from "@/config";
import { twMerge } from "tailwind-merge";
import { translate } from "@/lib";
import { useTranslations } from "next-intl";
import * as ASSETS from "@/assets";
import { StaticImageData } from "next/image";

export interface ProjectContainerInterface {
  title: string;
  description: string;
  img: StaticImageData;
  imgAlt: string;
  sectionId: string;
}

export default function ProjectSection() {
  const PROJECTS: ProjectContainerInterface[] = [
    {
      title: translate(useTranslations(), "home.project.projects.1.title"),
      description: translate(
        useTranslations(),
        "home.project.projects.1.description"
      ),
      img: ASSETS.ScClaimsPreview,
      imgAlt: "SC Claims Preview",
      sectionId: "sc-claims",
    },
    {
      title: translate(useTranslations(), "home.project.projects.2.title"),
      description: translate(
        useTranslations(),
        "home.project.projects.2.description"
      ),
      img: ASSETS.YooPreview,
      imgAlt: "Yoo Preview",
      sectionId: "yoo",
    },
    {
      title: translate(useTranslations(), "home.project.projects.3.title"),
      description: translate(
        useTranslations(),
        "home.project.projects.3.description"
      ),
      img: ASSETS.IQMKPreview,
      imgAlt: "IQMK Preview",
      sectionId: "iqmk-app",
    },
    {
      title: translate(useTranslations(), "home.project.projects.4.title"),
      description: translate(
        useTranslations(),
        "home.project.projects.4.description"
      ),
      img: ASSETS.CountryScapePreview,
      imgAlt: "CountryScape Preview",
      sectionId: "countryscape",
    },
  ];

  return (
    <section
      id="project-section"
      className={twMerge(
        "h-full relative space-y-20",
        style.sectionContainerPaddingX
      )}
    >
      <h1 className="text-h2 text-woodsmoke-600 dark:text-woodsmoke-50 text-center font-bold">
        {translate(useTranslations(), "home.project.title")}
      </h1>

      {PROJECTS.map((project, index) => (
        <ProjectContainer key={index} {...project} index={index} />
      ))}
    </section>
  );
}
