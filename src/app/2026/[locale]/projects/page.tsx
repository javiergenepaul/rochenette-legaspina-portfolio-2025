"use client";
import { useLoadingStore } from "@/store";
import { useEffect } from "react";
// 2026 Projects page — build from scratch
export default function Projects2026() {
  const { setLoading } = useLoadingStore();
  useEffect(() => { setLoading(false); }, [setLoading]);
  return <main className="pt-32 px-8"><h1 className="text-h2 font-bold text-woodsmoke-900 dark:text-woodsmoke-50">Projects</h1></main>;
}
