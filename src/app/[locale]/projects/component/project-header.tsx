"use client";

import { translate } from "@/lib";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

export default function ProjectHeader() {
  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.5,
      }}
      className="text-center text-h1 text-woodsmoke-600 dark:text-woodsmoke-50 font-bold"
    >
      {translate(useTranslations(), "project.title")}
    </motion.h1>
  );
}
