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
    <div className="flex flex-col LG:pt-28 XS:pt-16 pt-16 gap-20">
      {children}
    </div>
  );
}
