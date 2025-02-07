import React from "react";
import { ProjectFormat } from "./component";
import { PROJECTS, style } from "@/config";
import ProjectHeader from "./component/project-header";
import { LetstalkSection } from "@/components";
import { twMerge } from "tailwind-merge";

export default function page() {
  return (
    <div className="flex flex-col">
      <ProjectHeader />
      <div
        className={twMerge(
          "flex flex-col pb-10",
          style.sectionContainerPaddingX
        )}
      >
        {PROJECTS.map((project, index) => (
          <ProjectFormat
            key={index}
            {...project}
            index={index}
            maxLength={PROJECTS.length}
          />
        ))}
      </div>
      <LetstalkSection />
    </div>
  );
}
