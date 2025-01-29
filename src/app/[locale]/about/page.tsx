import {
  CertificationSection,
  EducationSection,
  IntroSection,
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
    </>
  );
}
