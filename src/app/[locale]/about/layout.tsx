import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rochenette Legaspina - About Me",
  description: "Rochenette About Me",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col SM:pt-52 pt-12 pb-20 gap-20">
      {children}
    </main>
  );
}
