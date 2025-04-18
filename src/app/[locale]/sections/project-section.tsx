import ProjectContainer from "./components/project-container";
import { style } from "@/config";
import { twMerge } from "tailwind-merge";
import { translate } from "@/lib";
import { useTranslations } from "next-intl";
import * as ASSETS from "@/assets";

export default function ProjectSection() {
  const PROJECTS = [
    {
      title: translate(useTranslations(), "home.project.projects.1.title"),
      description: translate(
        useTranslations(),
        "home.project.projects.1.description"
      ),
      img: ASSETS.ScClaimsPreview,
      imgAlt: "SC Claims Preview",
    },
    {
      title: translate(useTranslations(), "home.project.projects.2.title"),
      description: translate(
        useTranslations(),
        "home.project.projects.2.description"
      ),
      img: ASSETS.YooPreview,
      imgAlt: "Yoo Preview",
    },
    {
      title: translate(useTranslations(), "home.project.projects.3.title"),
      description: translate(
        useTranslations(),
        "home.project.projects.3.description"
      ),
      img: ASSETS.IQMKPreview,
      imgAlt: "IQMK Preview",
    },
    {
      title: translate(useTranslations(), "home.project.projects.4.title"),
      description: translate(
        useTranslations(),
        "home.project.projects.4.description"
      ),
      img: ASSETS.CountryScapePreview,
      imgAlt: "CountryScape Preview",
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
        <ProjectContainer
          key={index}
          title={project.title}
          description={project.description}
          img={project.img}
          imgAlt={project.imgAlt}
          index={index}
        />
      ))}
    </section>
  );
}
