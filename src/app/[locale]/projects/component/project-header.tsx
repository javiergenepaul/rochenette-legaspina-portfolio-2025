import { translate } from "@/lib";
import { useTranslations } from "next-intl";
import React from "react";

export default function ProjectHeader() {
  return (
    <h1 className="text-center text-h1 text-woodsmoke-600 dark:text-woodsmoke-50 XS:pb-32 pb-10 font-bold">
      {translate(useTranslations(), "project.title")}
    </h1>
  );
}
