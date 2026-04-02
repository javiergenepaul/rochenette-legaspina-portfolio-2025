import "../../globals.css";

import { Poppins, Roboto } from "next/font/google";
import { Navigation, Footer } from "@/components/2026";
import I18nProvider from "@/components/2025/common/i18n-provider";
import { Metadata } from "next";
import { Toaster } from "@/components/2025/ui/toaster";
import LoadingMask from "../../loading-mask";
import HtmlAttributes from "@/components/common/html-attributes";
import YearNavigator from "@/components/common/year-navigator";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rochenette Legaspina - 2026",
  description: "Rochenette Legaspina Portfolio 2026",
  icons: { icon: "/favicon-2026.svg" },
};

export default async function LocaleLayout2026({
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
      <HtmlAttributes year="2026" lang={validLocale} />
      <I18nProvider locale={validLocale}>
        <LoadingMask />
        <div
          className={`antialiased overflow-x-hidden relative font-roboto bg-woodsmoke-50 dark:bg-woodsmoke-950 ${poppins.variable} ${roboto.variable}`}
        >
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
