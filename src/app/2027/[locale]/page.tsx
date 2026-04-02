"use client";

import { useLoadingStore } from "@/store";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Page2027() {
  const { setLoading } = useLoadingStore();
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[2] ?? "en";

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-woodsmoke-950">
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-amethyst-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-scorpion-500/20 blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center max-w-2xl">
        {/* Year badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amethyst-500/40 bg-amethyst-500/10 text-amethyst-400 text-sm font-semibold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-amethyst-400 animate-pulse" />
          2027
        </div>

        {/* Headline */}
        <h1 className="text-6xl sm:text-8xl font-bold text-woodsmoke-50 leading-none tracking-tight">
          Coming
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amethyst-400 to-scorpion-400">
            Soon
          </span>
        </h1>

        <p className="text-woodsmoke-400 text-lg max-w-md leading-relaxed">
          Something new is in the works. A fresh perspective, a new chapter.
          Stay tuned for 2027.
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-amethyst-500/40" />

        {/* Back button */}
        <button
          onClick={() => router.push(`/2026/${locale}`)}
          className="group flex items-center gap-2 text-woodsmoke-400 hover:text-woodsmoke-100 transition-colors text-sm font-medium"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Back to 2026
        </button>
      </div>
    </div>
  );
}
