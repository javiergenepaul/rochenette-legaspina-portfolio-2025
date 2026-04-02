"use client";

// 2026 Navigation — build this fresh for the 2026 design
// Imports from @/components/ui/* are available (shared primitives)

export default function Navigation2026() {
  return (
    <nav className="fixed inset-x-0 top-0 z-[9999] flex items-center justify-center h-16 bg-woodsmoke-50/80 dark:bg-woodsmoke-950/80 backdrop-blur-md border-b border-woodsmoke-200/50 dark:border-woodsmoke-800/50">
      <span className="text-amethyst-500 font-bold tracking-widest text-sm uppercase">
        2026
      </span>
    </nav>
  );
}
