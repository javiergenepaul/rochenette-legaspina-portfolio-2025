"use client";

import { Separator } from "@/components/ui/separator";
import { InfoInterface, ProjectInterface } from "@/config";
import { translate } from "@/lib";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const InfoCard = ({
  title,
  description,
  className,
}: InfoInterface & { className?: string }) => {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.2,
      }}
      className={twMerge(
        "MD:p-8 XS:p-6 p-5 border border-woodsmoke-400 dark:border-woodsmoke-400 rounded-lg flex flex-col SM:items-start items-center gap-6",
        className
      )}
    >
      <h3 className="text-woodsmoke-600 font-bold XL:text-h3 LG:text-h4 text-h5 dark:text-woodsmoke-50">
        {title}
      </h3>

      <ul className="list-disc">
        {description.map((value: string, index: React.Key) => {
          return (
            <li
              key={index}
              className="XL:text-large text-normal text-woodsmoke-500 text-wrap text-justify dark:text-woodsmoke-300"
            >
              {value}
            </li>
          );
        })}
      </ul>
    </motion.article>
  );
};

export default function ProjectFormat({
  title,
  sectionId,
  role,
  desciption,
  information,
  index,
  maxLength,
  mockup,
  mockups,
  mockupAlt,
}: ProjectInterface & { index: number; maxLength: number }) {
  return (
    <section id={sectionId} className="space-y-32 pt-32">
      <div className="h-full space-y-20">
        <div className="flex flex-col space-y-6 mb-20 items-center text-center">
          <header data-test="project-header" className="text-center space-y-2">
            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.5,
              }}
              className="font-bold XL:text-h2 LG:text-h3 MD:text-h4 text-h5 text-woodsmoke-600 dark:text-woodsmoke-50"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.5,
              }}
              className="XL:text-large text-normal LG:font-normal font-medium text-woodsmoke-600 dark:text-woodsmoke-50"
            >
              {translate(useTranslations(), "project.role", { role: role })}
            </motion.p>
          </header>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.5,
            }}
            className="XL:text-large text-normal text-woodsmoke-500 text-justify dark:text-woodsmoke-300 w-4/12"
          >
            {desciption}
          </motion.p>
        </div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.5,
          }}
        >
          <Image
            src={mockup}
            alt={mockupAlt}
            className="relative object-contain w-1/2 justify-self-center rounded-lg"
          />
        </motion.div>

        <div className="grid MD:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10">
          {information.map((info, index) => (
            <InfoCard
              key={index}
              className={
                information.length === 3 && index === 2
                  ? "MD:col-span-2 col-span-1"
                  : ""
              }
              {...info}
            />
          ))}
        </div>

        <div className="grid MD:grid-cols-3 grid-cols-1 gap-6">
          {mockups.map(
            (
              value: { image: StaticImageData; alt: string },
              key: React.Key
            ) => {
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    bounce: 0.2,
                  }}
                >
                  <Image src={value.image} alt={value.alt} />
                </motion.div>
              );
            }
          )}
        </div>
      </div>
      {index < maxLength - 1 && (
        <Separator className="bg-woodsmoke-200 dark:bg-woodsmoke-600" />
      )}
    </section>
  );
}
