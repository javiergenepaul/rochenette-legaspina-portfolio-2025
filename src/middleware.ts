import { NextRequest, NextResponse } from "next/server";

const defaultLocale = "en";
const defaultYear = "2026";
const years = ["2025", "2026"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(`/${defaultYear}/${defaultLocale}`, request.url)
    );
  }

  for (const year of years) {
    if (pathname === `/${year}` || pathname === `/${year}/`) {
      return NextResponse.redirect(
        new URL(`/${year}/${defaultLocale}`, request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/2025", "/2026"],
};
