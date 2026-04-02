import "../../globals.css";

import I18nProvider from "@/components/2025/common/i18n-provider";
import { Metadata } from "next";
import LoadingMask from "../../loading-mask";
import HtmlAttributes from "@/components/common/html-attributes";
import YearNavigator from "@/components/common/year-navigator";

export const metadata: Metadata = {
  title: "Rochenette Legaspina - 2027",
  description: "Rochenette Legaspina Portfolio 2027 — Coming Soon",
  icons: { icon: "/favicon-2026.svg" },
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
