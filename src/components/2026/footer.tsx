"use client";

// 2026 Footer — build this fresh for the 2026 design

export default function Footer2026() {
  return (
    <footer className="flex items-center justify-center py-6 border-t border-woodsmoke-200 dark:border-woodsmoke-800">
      <span className="text-caption text-woodsmoke-400 dark:text-woodsmoke-500">
        © {new Date().getFullYear()} Rochenette Legaspina
      </span>
    </footer>
  );
}
