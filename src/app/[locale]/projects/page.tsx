import React from "react";
import { ProjectFormat } from "./component";
import { PROJECTS } from "@/config";
import ProjectHeader from "./component/project-header";

export default function page() {
  return (
    <div className="flex flex-col">
      <ProjectHeader />
      <div className="flex flex-col gap-32">
        {PROJECTS.map((project, index) => (
          <ProjectFormat key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
