"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

export const ThemeProviders = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};
