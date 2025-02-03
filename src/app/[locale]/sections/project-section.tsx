import { style } from "@/config";
import { twMerge } from "tailwind-merge";
import ProjectContainer from "./components/project-container";
import { translate } from "@/lib";
import { useTranslations } from "next-intl";

export default function ProjectSection() {
  const PROJECTS = [
    {
      title: translate(useTranslations(), "home.project.projects.1.title"),
      description: translate(
        useTranslations(),
        "home.project.projects.1.description"
      ),
    },
    {
      title: translate(useTranslations(), "home.project.projects.2.title"),
      description: translate(
        useTranslations(),
        "home.project.projects.2.description"
      ),
    },
    {
      title: translate(useTranslations(), "home.project.projects.3.title"),
      description: translate(
        useTranslations(),
        "home.project.projects.3.description"
      ),
    },
    {
      title: translate(useTranslations(), "home.project.projects.4.title"),
      description: translate(
        useTranslations(),
        "home.project.projects.4.description"
      ),
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
          index={index}
        />
      ))}
    </section>
  );
}
