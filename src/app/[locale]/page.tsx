import LetsTalkSection from "@/components/common/lets-talk-section";
import { HeroSection, ProjectSection } from "./sections";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectSection />
      <LetsTalkSection />
    </main>
    // <div>
    //   <main className="flex flex-col gap-8 row-start-2 items-center SM:items-start">
    //     <Button>{translate(t, "about.work.title")}</Button>
    //   </main>
    // </div>
  );
}
