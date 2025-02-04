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
        "flex h-fit w-full SM:pt-48 gap-6 pt-12 pb-20 items-center",
        style.sectionContainerPaddingX
      )}
    >
      {children}
    </main>
  );
}
