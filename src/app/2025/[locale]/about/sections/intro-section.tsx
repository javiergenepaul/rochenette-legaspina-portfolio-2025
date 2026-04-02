"use client";

import {
  RocheetteLegaspinaDarkImage,
} from "@/assets";
import { TxKeyPath } from "@/i18n";
import { translate } from "@/lib";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import Image from "next/image";

export default function IntroSection() {
  const { t } = useTranslation();
  return (
    <section
      id="intro-section"
      className="w-full h-full flex flex-col lg:gap-10 gap-8 xl:px-[200px] lg:px-[150px] md:px-[100px] sm:px-[80px] xs:px-[32px] px-[16px]"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.5,
        }}
        className="xl:text-h1 lg:text-h2 sm:text-h3 text-h4 font-bold text-woodsmoke-600 dark:text-woodsmoke-50 text-center"
      >
        {translate(t, "about.intro.title")}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.5,
        }}
        className="flex xl:flex-row flex-col gap-4 justify-center items-center"
      >
        <Image
          className="object-fill rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-[#EBD2FC] dark:shadow-none dark:bg-transparent dark:rounded-none"
          src={RocheetteLegaspinaDarkImage}
          alt="Rochenette Legaspina"
        />
        <div className="lg:basis-7/12 xl:basis-9/12 xl:w-full lg:w-6/12 xs:w-8/12 w-full">
          {Array.from({ length: 3 }, (_, i) =>
            translate(t, `about.intro.paragraph.${i + 1}` as TxKeyPath)
          ).map((paragraph, index) => (
            <p
              key={index}
              className="mb-6 text-justify lg:text-normal xl:text-large text-woodsmoke-500 dark:text-woodsmoke-300 lg:leading-[1.21rem] xl:leading-[1.375rem]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
