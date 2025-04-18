"use client";

import { Button } from "@/components/ui/button";
import { translate } from "@/lib";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { ProjectContainerInterface } from "../project-section";
import { NAV_LINKS } from "@/config";
import { useRouter } from "next/navigation";
import { useLoadingStore } from "@/store";

export default function ProjectContainer({
  title,
  description,
  index,
  img,
  imgAlt,
  sectionId,
}: ProjectContainerInterface & { index: number }) {
  const t = useTranslations();
  const router = useRouter();
  const { setLoading } = useLoadingStore();

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
              onClick={() => {
                setLoading(true);
                router.push(`${NAV_LINKS[2].to}#${sectionId}`);
              }}
            >
              <span className="text-large font-medium text-woodsmoke-600 dark:text-woodsmoke-50 hover:text-woodsmoke-900 active:text-woodsmoke-900">
                {translate(t, "home.project.knowMore")}
              </span>
            </Button>
          </div>
          {/* Image Component */}
          <Image
            className="basis-auto SM:basis-1/2 XL:h-[500px] LG:h-[380px] MD:h-[267px] SM:h-[195px] XS:h-[321px] h-[220px] w-full rounded-2xl"
            src={img}
            alt={imgAlt}
          />
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
          className="flex gap-6 SM:flex-row flex-col"
        >
          {/* Image Component */}
          <Image
            className="basis-auto SM:basis-1/2 XL:h-[500px] LG:h-[380px] MD:h-[267px] SM:h-[195px] XS:h-[321px] h-[220px] w-full rounded-2xl"
            src={img}
            alt={imgAlt}
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
              onClick={() => {
                setLoading(true);
                router.push(`${NAV_LINKS[2].to}#${sectionId}`);
              }}
            >
              <span className="text-large font-medium text-woodsmoke-600 dark:text-woodsmoke-50 hover:text-woodsmoke-900 active:text-woodsmoke-900">
                {translate(t, "home.project.knowMore")}
              </span>
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
}
