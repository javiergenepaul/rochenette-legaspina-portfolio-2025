"use client";

import { LetstalkSection } from "@/components";
import { HeroSection, ProjectSection } from "./sections";
import { useLoadingStore } from "@/store";
import { useEffect } from "react";

export default function Home() {
  const { setLoading } = useLoadingStore();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="flex flex-col gap-20 pb-20">
      <HeroSection />
      <ProjectSection />
      <LetstalkSection />
    </div>
  );
}
