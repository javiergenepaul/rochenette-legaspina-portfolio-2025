import { HeroSection, ProjectSection } from "./sections";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <HeroSection />
      <ProjectSection />
    </main>
  );
}
