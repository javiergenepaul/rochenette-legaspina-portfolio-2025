"use client";

import { useLoadingStore } from "@/store";
import { useEffect } from "react";

export default function Home2026() {
  const { setLoading } = useLoadingStore();

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <div className="flex flex-col gap-20 pb-20 pt-32 px-8">
      <h1 className="text-4xl font-bold text-woodsmoke-900 dark:text-woodsmoke-50">
        2026 Portfolio — Coming Soon
      </h1>
      <p className="text-woodsmoke-500 dark:text-woodsmoke-300">
        This section is under construction.
      </p>
    </div>
  );
}
