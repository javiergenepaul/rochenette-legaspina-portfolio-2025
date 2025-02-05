import React from "react";
import { ProjectFormat } from "./component";
import { PROJECTS } from "@/config";

export default function page() {
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-h1 text-woodsmoke-600 dark:text-woodsmoke-50 XS:pb-32 pb-10 font-bold">
        Projects
      </h1>
      <div className="flex flex-col gap-32">
        {PROJECTS.map((project, index) => (
          <ProjectFormat key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
