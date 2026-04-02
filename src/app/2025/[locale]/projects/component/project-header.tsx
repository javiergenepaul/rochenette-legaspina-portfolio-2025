"use client";

import { style } from "@/config";
import { translate } from "@/lib";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import React from "react";

export default function ProjectHeader() {
  const { t } = useTranslation();
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
        {translate(t, "project.title")}
      </h1>
    </motion.div>
  );
}
