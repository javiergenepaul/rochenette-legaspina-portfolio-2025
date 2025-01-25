import { Footer, Navigation } from "@/components";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProviders } from "./theme-providers";
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
            <div className="antialiased pb-[32px] font-inter bg-scorpion-50">
              <Navigation />
              {children}
              <Footer />
            </div>
          </ThemeProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
