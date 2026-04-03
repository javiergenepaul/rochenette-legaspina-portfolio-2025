import "../../globals.css";

import { Footer, Navigation } from "@/components/2025";
import I18nProvider from "@/components/2025/common/i18n-provider";
import { Metadata } from "next";
import { Toaster } from "@/components/2025/ui/toaster";
import LoadingMask from "../../loading-mask";
import HtmlAttributes from "@/components/common/html-attributes";
import YearNavigator from "@/components/common/year-navigator";

export const metadata: Metadata = {
  metadataBase: new URL("https://rochenette-legaspina-portfolio.vercel.app"),
  title: "Rochenette Legaspina - 2025",
  description: "Rochenette Legaspina Portfolio 2025",
  icons: { icon: "/favicon-2025.svg" },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ae3ee6" },
    { media: "(prefers-color-scheme: dark)",  color: "#5c1e71" },
  ],
  openGraph: {
    title: "Rochenette Legaspina - 2025",
    description: "Rochenette Legaspina Portfolio 2025",
    url: "https://rochenette-legaspina-portfolio.vercel.app/2025/en",
    siteName: "Rochenette Legaspina Portfolio",
    type: "website",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const validLocale = ["en", "de", "fr"].includes(locale) ? locale : "en";

  return (
    <>
      <HtmlAttributes year="2025" lang={validLocale} />
      <I18nProvider locale={validLocale}>
        <LoadingMask />
        <div className="antialiased overflow-x-hidden relative pb-8 font-inter bg-scorpion-50 dark:bg-woodsmoke-950 selection:bg-amethyst-400 selection:text-amethyst-50 dark:selection:bg-amethyst-800">
          <Navigation />
          {children}
          <Footer />
          <Toaster />
        </div>
        <YearNavigator />
      </I18nProvider>
    </>
  );
}
