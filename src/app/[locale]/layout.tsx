import "../globals.css";

import { Footer, Navigation } from "@/components";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProviders } from "./theme-providers";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import LoadingMask from "../loading-mask";

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
            <LoadingMask />
            <div className="antialiased overflow-x-hidden relative pb-[32px] font-inter bg-scorpion-50 dark:bg-woodsmoke-950 selection:bg-amethyst-400 selection:text-amethyst-50 dark:selection:bg-amethyst-800">
              <Navigation />
              {children}
              <Footer />
              <Toaster />
            </div>
          </ThemeProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
