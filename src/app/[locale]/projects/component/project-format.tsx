import { ProjectInterface } from "@/config";

export default function ProjectFormat({ title, sectionId }: ProjectInterface) {
  return (
    <section id={sectionId} className="h-screen">
      <h2>{title}</h2>
    </section>
  );
}
