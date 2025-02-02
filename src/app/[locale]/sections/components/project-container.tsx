"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
          className="flex gap-6"
        >
          {/* Image Component */}
          <div
            className="h-[500px] flex-1 w-full rounded-2xl"
            style={{
              background:
                "linear-gradient(104deg, #AE3EE6 3%, #DFAEF9 49%, #9A2DCC 100%)",
            }}
          />
          {/* Text Component */}
          <div className="basis-1/2 space-y-12 bg-amethyst-100 dark:bg-woodsmoke-900 p-8 rounded-2xl h-fit">
            <div className="space-y-4">
              <h2 className="text-h3 font-semibold text-woodsmoke-600 dark:text-woodsmoke-50">
                {title}
              </h2>
              <p className="text-large font-normal text-woodsmoke-500 dark:text-woodsmoke-300">
                {description}
              </p>
            </div>
            <Button variant={"outline"}>Know More</Button>
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
          className="flex gap-6"
        >
          {/* Text Component */}
          <div className="basis-1/2 space-y-12 bg-amethyst-100 dark:bg-woodsmoke-900 p-8 rounded-2xl h-fit mt-auto">
            <div className="space-y-4">
              <h2 className="text-h3 font-semibold text-woodsmoke-600 dark:text-woodsmoke-50">
                {title}
              </h2>
              <p className="text-large font-normal text-woodsmoke-500 dark:text-woodsmoke-300">
                {description}
              </p>
            </div>
            <Button variant={"outline"}>Know More</Button>
          </div>
          {/* Gradient Component */}
          <div className="basis-1/2 flex gap-6">
            <div
              className="h-[550px] flex-1 w-full rounded-2xl"
              style={{
                background: "linear-gradient(-143deg, #D0B0F7, #872FF3)",
              }}
            />
            <div
              className="h-[550px] flex-1 w-full rounded-2xl mt-20"
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
