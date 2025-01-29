import "../globals.css";

import { Footer, LetstalkSection, Navigation } from "@/components";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProviders } from "./theme-providers";
import { Metadata } from "next";
import BackgroundPattern from "@/components/common/background-pattern";

export const metadata: Metadata = {
  title: "Rochenette Legaspina - Home",
  description: "Rochenette Home",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProviders>
            <div className="antialiased relative pb-[32px] font-inter bg-scorpion-50 dark:bg-woodsmoke-950 selection:bg-amethyst-400 selection:text-amethyst-50 dark:selection:bg-amethyst-800">
              <Navigation />
              {children}
              <LetstalkSection />
              <Footer />
            </div>
          </ThemeProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
