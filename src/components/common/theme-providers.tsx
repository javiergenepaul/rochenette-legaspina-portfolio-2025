"use client";

import { ThemeProvider } from "next-themes";

// ─── React 19 + next-themes compatibility ────────────────────────────────────
// next-themes renders an inline <script> inside ThemeProvider for FOUC
// prevention. React 19 warns when it encounters <script> tags in client
// components ("never executed on the client"). The theme works correctly —
// the script runs once during SSR; client-side theme changes are handled via
// localStorage. Suppress this specific dev-only warning at module load time.
if (
  typeof window !== "undefined" &&
  process.env.NODE_ENV === "development"
) {
  const _orig = console.error.bind(console);
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("script tag while rendering")
    )
      return;
    _orig(...args);
  };
}

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
