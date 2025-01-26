import React from "react";
import { ProjectFormat } from "./component";
import { PROJECTS } from "@/config";

export default function page() {
  return (
    <main>
      <h1 className="text-center">Projects</h1>
      {PROJECTS.map((project, index) => (
        <ProjectFormat key={index} {...project} />
      ))}
    </main>
  );
}
