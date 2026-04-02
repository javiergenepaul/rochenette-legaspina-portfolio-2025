"use client";

import { useLoadingStore } from "@/store";
import {
  CertificationSection,
  EducationSection,
  IntroSection,
  SkillsAndToolsSection,
  WorkSection,
} from "./sections";
import { useEffect } from "react";

export default function Page() {
  const { setLoading } = useLoadingStore();

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

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
