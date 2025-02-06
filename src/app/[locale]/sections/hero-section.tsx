"use client";

import "./hero.css";

import { translate } from "@/lib";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import { locale, style } from "@/config";
import { Button } from "@/components/ui/button";
import OrbitComponent from "./components/orbit-component";
import { motion } from "framer-motion";
import { PATH } from "@/config/path";
import Link from "next/link";

export default function HeroSection() {

  return (
    <section
      id="hero-section"
      className={twMerge(
        "h-full min-h-dvh flex flex-col XL:pt-44 SM:pt-20 pt-12 gap-20 items-center",
        style.sectionContainerPaddingX
      )}
    >
      <div className="flex MD:flex-row flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.5,
          }}
          className="MD:basis-1/2 flex flex-col SM:items-start items-center justify-center h-full w-full"
        >
          <h1 className="font-bold SM:text-start text-center">
            <span className="text-amethyst-500 XL:text-h1 LG:text-h2 XS:text-h3 text-h4">
              {translate(useTranslations(), "home.hero.slogan.title.1")}
            </span>
            <span className="text-woodsmoke-500 dark:text-woodsmoke-50 XL:text-h1 LG:text-h2 XS:text-h3 text-h4">
              {translate(useTranslations(), "home.hero.slogan.title.2")}
            </span>
          </h1>
          <p className="LG:text-h5 MD:text-large text-normal LG:font-medium font-normal mt-4 text-woodsmoke-500 dark:text-woodsmoke-300 SM:text-start text-center">
            {translate(useTranslations(), "home.hero.slogan.subtitle")}
          </p>
          <Link href={PATH.CONTACT.getPath(locale)} passHref>
            <Button className="mt-16 py-4 SM:px-20 px-28 bg-amethyst-500 hover:bg-amethyst-400 focus:bg-amethyst-800">
              <span className="text-amethyst-50 XL:text-large text-regular">
                {translate(useTranslations(), "home.hero.slogan.button")}
              </span>
            </Button>
          </Link>
        </motion.div>

        {/* Orbbiting Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.5,
          }}
          className="MD:basis-1/2 basis-full"
        >
          {/* XL */}
          <OrbitComponent
            id={"orbit-XL"}
            height={"800px"}
            fixedHeight="750px"
            hiddenClass={"XL:flex LG:hidden hidden"}
            orbitProperties={{
              1: {
                iconSize: 50,
                radius: 65,
                speed: 2,
              },
              2: {
                iconSize: 40,
                radius: 170,
                speed: 1.2,
              },
              3: {
                iconSize: 60,
                radius: 270,
                speed: 1.4,
              },
              4: {
                iconSize: 70,
                radius: 355,
                speed: 1.6,
              },
            }}
          />

          {/* LG */}
          <OrbitComponent
            id={"orbit-LG"}
            height={"650px"}
            fixedHeight="650px"
            hiddenClass={"LG:flex XL:hidden hidden"}
            orbitProperties={{
              1: {
                iconSize: 40,
                radius: 60,
                speed: 2,
              },
              2: {
                radius: 140,
              },
              3: {
                iconSize: 45,
                radius: 200,
                speed: 1.4,
              },
              4: {
                iconSize: 50,
                radius: 260,
                speed: 1.6,
              },
            }}
          />

          {/* MD */}
          <OrbitComponent
            id={"orbit-MD"}
            height={"650px"}
            fixedHeight="650px"
            hiddenClass={"MD:flex SM:hidden LG:hidden hidden"}
            orbitProperties={{
              1: {
                iconSize: 25,
                radius: 40,
                speed: 2,
              },
              2: {
                radius: 100,
              },
              3: {
                iconSize: 30,
                radius: 150,
                speed: 1.4,
              },
              4: {
                iconSize: 35,
                radius: 190,
                speed: 1.6,
              },
            }}
          />

          {/* SM */}
          <OrbitComponent
            id={"orbit-SM"}
            height={"650px"}
            fixedHeight="400px"
            hiddenClass={"SM:flex MD:hidden LG:hidden hidden"}
            orbitProperties={{
              1: {
                iconSize: 40,
                radius: 50,
                speed: 2,
              },
              2: {
                radius: 100,
              },
              3: {
                iconSize: 45,
                radius: 150,
                speed: 1.4,
              },
              4: {
                iconSize: 50,
                radius: 190,
                speed: 1.6,
              },
            }}
          />

          <OrbitComponent
            id={"orbit-XS"}
            height={"650px"}
            fixedHeight="400px"
            hiddenClass={"XS:flex SM:hidden MD:hidden LG:hidden hidden"}
            orbitProperties={{
              1: {
                iconSize: 30,
                radius: 50,
                speed: 2,
              },
              2: {
                radius: 100,
              },
              3: {
                iconSize: 35,
                radius: 150,
                speed: 1.4,
              },
              4: {
                iconSize: 40,
                radius: 190,
                speed: 1.6,
              },
            }}
          />

          <OrbitComponent
            id={"orbit-XS"}
            height={"650px"}
            fixedHeight="350px"
            hiddenClass={"flex XS:hidden SM:hidden MD:hidden LG:hidden"}
            orbitProperties={{
              1: {
                iconSize: 30,
                radius: 30,
                speed: 2,
              },
              2: {
                radius: 80,
              },
              3: {
                iconSize: 30,
                radius: 125,
                speed: 1.4,
              },
              4: {
                iconSize: 30,
                radius: 165,
                speed: 1.6,
              },
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
