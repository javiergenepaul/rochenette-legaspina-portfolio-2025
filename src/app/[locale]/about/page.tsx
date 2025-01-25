import {
  CertificationSection,
  EducationSection,
  IntroSection,
  LetsTalkSection,
  SkillsAndToolsSection,
  WorkSection,
} from "./sections";

export default function Page() {
  return (
    <>
      <IntroSection />
      <WorkSection />
      <SkillsAndToolsSection />
      <EducationSection />
      <CertificationSection />
      <LetsTalkSection />
    </>
  );
}
