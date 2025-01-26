import {
  CertificationSection,
  EducationSection,
  IntroSection,
  SkillsAndToolsSection,
  WorkSection,
} from "./sections";

export default function Page() {
  return (
    <main>
      <IntroSection />
      <WorkSection />
      <SkillsAndToolsSection />
      <EducationSection />
      <CertificationSection />
    </main>
  );
}
