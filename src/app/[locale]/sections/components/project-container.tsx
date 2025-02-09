"use client";

import { Button } from "@/components/ui/button";
import { translate } from "@/lib";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

interface ProjectContainerInterface {
  title: string;
  description: string;
  index: number;
}

export default function ProjectContainer({
  title,
  description,
  index,
}: ProjectContainerInterface) {
  const t = useTranslations();

  return (
    <>
      {index % 2 === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.5,
          }}
          className="flex gap-6 SM:flex-row flex-col"
        >
          {/* Image Component */}
          <div
            className="basis-auto SM:basis-1/2 XL:h-[500px] LG:h-[380px] MD:h-[267px] SM:h-[195px] XS:h-[321px] h-[220px] w-full rounded-2xl"
            style={{
              background:
                "linear-gradient(104deg, #AE3EE6 3%, #DFAEF9 49%, #9A2DCC 100%)",
            }}
          />
          {/* Text Component */}
          <div className="basis-1/2 space-y-12 bg-amethyst-100 dark:bg-woodsmoke-900 p-8 rounded-2xl h-fit">
            <div className="space-y-4">
              <h2 className="XL:text-h3 LG:text-h4 text-h5 font-semibold text-woodsmoke-600 dark:text-woodsmoke-50">
                {title}
              </h2>
              <p className="XL:text-large text-normal font-normal text-woodsmoke-500 dark:text-woodsmoke-300 MD:line-clamp-none SM:line-clamp-5 line-clamp-none">
                {description}
              </p>
            </div>
            <Button
              className="group border-woodsmoke-400 dark:border-woodsmoke-300 bg-transparent group-hover:bg-woodsmoke-100 active:bg-transparent active:border-amethyst-500 active:border-2"
              variant={"outline"}
            >
              <span className="text-large font-medium text-woodsmoke-600 dark:text-woodsmoke-50 hover:text-woodsmoke-900 active:text-woodsmoke-900">
                {translate(t, "home.project.knowMore")}
              </span>
            </Button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.5,
          }}
          className="flex gap-6 SM:flex-row flex-col-reverse"
        >
          {/* Text Component */}
          <div className="basis-1/2 space-y-12 bg-amethyst-100 dark:bg-woodsmoke-900 p-8 rounded-2xl h-fit LG:mt-auto">
            <div className="space-y-4">
              <h2 className="XL:text-h3 LG:text-h4 text-h5 font-semibold text-woodsmoke-600 dark:text-woodsmoke-50">
                {title}
              </h2>
              <p className="XL:text-large text-normal font-normal text-woodsmoke-500 dark:text-woodsmoke-300 LG:line-clamp-none line-clamp-5">
                {description}
              </p>
            </div>
            <Button
              className="group border-woodsmoke-400 dark:border-woodsmoke-300 bg-transparent group-hover:bg-woodsmoke-100 active:bg-transparent active:border-amethyst-500 active:border-2"
              variant={"outline"}
            >
              <span className="text-large font-medium text-woodsmoke-600 dark:text-woodsmoke-50 hover:text-woodsmoke-900 active:text-woodsmoke-900">
                {translate(t, "home.project.knowMore")}
              </span>
            </Button>
          </div>
          {/* Gradient Component */}
          <div className="basis-1/2 flex gap-6 SM:h-auto">
            <div
              className="XL:h-[550px] LG:h-[360px] MD:h-[270px] SM:h-[230px] XS:h-[280px] h-[220px] flex-1 w-full rounded-2xl"
              style={{
                background: "linear-gradient(-143deg, #D0B0F7, #872FF3)",
              }}
            />
            <div
              className="XL:h-[550px] LG:h-[360px] MD:h-[270px] SM:h-[230px] XS:h-[280px] h-[220px] flex-1 w-full rounded-2xl XL:mt-20 SM:mt-auto XS:mt-32 mt-20"
              style={{
                background: "linear-gradient(-143deg, #D0B0F7, #872FF3)",
              }}
            />
          </div>
        </motion.div>
      )}
    </>
  );
}
