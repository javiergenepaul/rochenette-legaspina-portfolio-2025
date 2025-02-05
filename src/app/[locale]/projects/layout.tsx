import { style } from "@/config";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Rochenette Legaspina - Projects",
  description: "Rochenette Projects",
};

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={twMerge(
        "flex flex-col SM:pt-32 pt-12 pb-20 gap-20",
        style.sectionContainerPaddingX
      )}
    >
      {children}
    </main>
  );
}
