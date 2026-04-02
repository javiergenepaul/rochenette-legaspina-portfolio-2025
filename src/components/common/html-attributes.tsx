"use client";

import { useEffect } from "react";

export default function HtmlAttributes({
  year,
  lang,
}: {
  year: string;
  lang: string;
}) {
  useEffect(() => {
    document.documentElement.setAttribute("data-year", year);
    document.documentElement.setAttribute("lang", lang);
  }, [year, lang]);

  return null;
}
