"use client";

import { style } from "@/config";
import { translate } from "@/lib";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function ProjectHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.5,
      }}
      className={style.sectionContainerPaddingX}
    >
      <h1 className="text-center text-h1 text-woodsmoke-600 dark:text-woodsmoke-50 font-bold">
        {translate(useTranslations(), "project.title")}
      </h1>
    </motion.div>
  );
}
