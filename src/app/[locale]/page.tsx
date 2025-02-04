import { LetstalkSection } from "@/components";
import { HeroSection, ProjectSection } from "./sections";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <HeroSection />
      <ProjectSection />
      <LetstalkSection />
    </div>
  );
}
