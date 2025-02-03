"use client";

import { RochenetteLegaspinaImage } from "@/assets";
import { TxKeyPath } from "@/i18n";
import { translate } from "@/lib";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function IntroSection() {
  const t = useTranslations();
  return (
    <section
      id="intro-section"
      className="w-full h-full flex flex-col LG:gap-10 gap-8 XL:px-[200px] LG:px-[150px] MD:px-[100px] SM:px-[80px] XS:px-[32px] px-[16px]"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.5,
        }}
        className="XL:text-h1 LG:text-h2 SM:text-h3 text-h4 font-bold text-woodsmoke-600 dark:text-woodsmoke-50 text-center"
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
        className="flex LG:flex-row flex-col gap-4 items-center"
      >
        <div className="XL:basis-3/12 LG:basis-5/12 LG:w-full h-full MD:w-6/12 XS:w-4/12 w-6/12 flex justify-center LG:block">
          <Image
            className="object-fill"
            src={RochenetteLegaspinaImage}
            alt="Rochenette Legaspina"
          />
        </div>
        <div className="LG:basis-7/12 XL:basis-9/12">
          {Array.from({ length: 2 }, (_, i) =>
            translate(t, `about.intro.paragraph.${i + 1}` as TxKeyPath)
          ).map((paragraph, index) => (
            <p
              key={index}
              className="mb-6 text-justify LG:text-normal XL:text-large text-woodsmoke-500 dark:text-woodsmoke-300 LG:leading-[1.21rem] XL:leading-[1.375rem]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
