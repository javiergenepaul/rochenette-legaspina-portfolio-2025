import { style } from "@/config";
import { Metadata } from "next";
import React from "react";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Rochenette Legaspina - Contact Me",
  description: "Rochenette Contact Me",
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main
      className={twMerge(
        "h-fit w-full SM:pt-48 pt-12 pb-20",
        style.sectionContainerPaddingX
      )}
    >
      {children}
    </main>
  );
}