"use client";

import { Button } from "@/components/2025/ui/button";
import { translate } from "@/lib";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import Image from "next/image";
import React from "react";
import { ProjectContainerInterface } from "../project-section";
import { getNavLinks } from "@/config";
import { useRouter, usePathname } from "next/navigation";
import { useLoadingStore } from "@/store";

export default function ProjectContainer({
  title,
  description,
  index,
  img,
  imgAlt,
  sectionId,
}: ProjectContainerInterface & { index: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const { setLoading } = useLoadingStore();
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const year = pathParts[1] ?? "2026";
  const locale = pathParts[2] ?? "en";
  const NAV_LINKS = getNavLinks(year, locale);

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
          className="flex gap-6 sm:flex-row flex-col-reverse"
        >
          {/* Text Component */}
          <div className="basis-1/2 space-y-12 bg-amethyst-100 dark:bg-woodsmoke-900 p-8 rounded-2xl h-fit lg:mt-auto">
            <div className="space-y-4">
              <h2 className="xl:text-h3 lg:text-h4 text-h5 font-semibold text-woodsmoke-600 dark:text-woodsmoke-50">
                {title}
              </h2>
              <p className="xl:text-large text-normal font-normal text-woodsmoke-500 dark:text-woodsmoke-300 lg:line-clamp-none line-clamp-5">
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
            className="basis-auto sm:basis-1/2 xl:h-125 lg:h-95 md:h-66.75 sm:h-48.75 xs:h-80.25 h-55 w-full rounded-2xl"
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
          className="flex gap-6 sm:flex-row flex-col"
        >
          {/* Image Component */}
          <Image
            className="basis-auto sm:basis-1/2 xl:h-125 lg:h-95 md:h-66.75 sm:h-48.75 xs:h-80.25 h-55 w-full rounded-2xl"
            src={img}
            alt={imgAlt}
          />
          {/* Text Component */}
          <div className="basis-1/2 space-y-12 bg-amethyst-100 dark:bg-woodsmoke-900 p-8 rounded-2xl h-fit">
            <div className="space-y-4">
              <h2 className="xl:text-h3 lg:text-h4 text-h5 font-semibold text-woodsmoke-600 dark:text-woodsmoke-50">
                {title}
              </h2>
              <p className="xl:text-large text-normal font-normal text-woodsmoke-500 dark:text-woodsmoke-300 md:line-clamp-none sm:line-clamp-5 line-clamp-none">
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
