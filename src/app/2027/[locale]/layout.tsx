import "../../globals.css";

import I18nProvider from "@/components/2025/common/i18n-provider";
import { Metadata } from "next";
import LoadingMask from "../../loading-mask";
import HtmlAttributes from "@/components/common/html-attributes";
import YearNavigator from "@/components/common/year-navigator";

export const metadata: Metadata = {
  metadataBase: new URL("https://rochenette-legaspina-portfolio.vercel.app"),
  title: "Rochenette Legaspina - 2027",
  description: "Rochenette Legaspina Portfolio 2027 — Coming Soon",
  icons: { icon: "/favicon-2026.svg" },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e1e2e" },
    { media: "(prefers-color-scheme: dark)",  color: "#0f0f17" },
  ],
  openGraph: {
    title: "Rochenette Legaspina - 2027",
    description: "Rochenette Legaspina Portfolio 2027 — Coming Soon",
    url: "https://rochenette-legaspina-portfolio.vercel.app/2027/en",
    siteName: "Rochenette Legaspina Portfolio",
    type: "website",
  },
};

export default async function LocaleLayout2027({
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
      <HtmlAttributes year="2027" lang={validLocale} />
      <I18nProvider locale={validLocale}>
        <LoadingMask />
        {children}
        <YearNavigator />
      </I18nProvider>
    </>
  );
}
