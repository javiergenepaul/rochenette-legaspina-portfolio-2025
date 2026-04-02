import { ThemeProviders } from "@/components/common/theme-providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
