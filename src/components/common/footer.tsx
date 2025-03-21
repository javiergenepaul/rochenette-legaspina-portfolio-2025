"use client";

import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS, style } from "@/config";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { translate } from "@/lib";
import { useTranslations } from "next-intl";
import { LinkPreview } from "../ui/link-preview";
import { useTheme } from "next-themes";
import { Separator } from "../ui/separator";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [grabbingIcon, setGrabbingIcon] = useState<boolean>(false);

  return (
    <motion.footer
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.5,
      }}
      className={twMerge(
        "mt-20 flex flex-col gap-8 pb-7",
        style.sectionContainerPaddingX
      )}
    >
      <motion.div
        drag
        dragSnapToOrigin
        className={twMerge(
          "h-12 w-12 rounded-full bg-amethyst-500",
          grabbingIcon ? "cursor-grabbing" : "cursor-grab"
        )}
        onDragStart={() => setGrabbingIcon(true)}
        onDragEnd={() => setGrabbingIcon(false)}
      />
      <div className="flex flex-col gap-10">
        <div
          id="social-links"
          className="flex SM:flex-row flex-col SM:justify-between gap-6 justify-start SM:items-center items-start"
        >
          <h3 className="XL:text-h2 LG:text-h3 SM:text-h4 text-h5 MD:font-semibold SM:w-[347px] MD:w-full font-semibold text-scorpion-500 dark:text-woodsmoke-50">
            {translate(useTranslations(), "footer.slogan")}
          </h3>
          <ul className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link, index) => (
              <li className="w-11 h-11" key={index}>
                <AnimatedTooltip
                  key={index}
                  items={[
                    {
                      id: 1,
                      name: link.name,
                      designation: "",
                      image: link.image,
                      imageAlt: link.alt,
                      className:
                        "h-11 w-auto flex items-center justify-center object-contain",
                      leftClass: "left-[-30px]",
                      url: link.url,
                    },
                  ]}
                />
              </li>
            ))}
          </ul>
        </div>
        <Separator className="SM:hidden block bg-woodsmoke-200 dark:bg-woodsmoke-600" />
        <ul
          id="nav-link"
          className="flex justify-between SM:flex-row gap-2 flex-col SM:w-6/12 XL:w-4/12 MD:w-5/12 SM:mx-auto"
        >
          <strong className="text-normal font-medium text-woodsmoke-600 dark:text-woodsmoke-50 pt-2 SM:hidden block">
            {translate(useTranslations(), "navigation.menu")}
          </strong>
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              <Link
                href={link.to}
                className={twMerge(
                  "text-large transition-transform ease-in-out",
                  pathname === link.to
                    ? "text-amethyst-500 font-bold"
                    : "text-woodsmoke-500 hover:text-woodsmoke-800 dark:hover:text-woodsmoke-200 dark:text-woodsmoke-300 font-normal"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex MD:flex-row flex-col items-center justify-center gap-2">
          <span
            id="copyright"
            className="text-center text-woodsmoke-400 dark:text-woodsmoke-300 XL:text-normal text-caption"
          >
            {translate(useTranslations(), "footer.copyright")}
          </span>
          <span className="font-bold text-amethyst-500 dark:text-amethyst-500 XL:text-normal text-caption">
            <LinkPreview
              target="_blank"
              url="https://paul-javier-portfolio.netlify.app"
              className="font-bold text-amethyst-500 dark:text-amethyst-500 XL:text-normal text-caption"
              theme={resolvedTheme}
            >
              {translate(useTranslations(), "footer.developer")}
            </LinkPreview>
          </span>
        </div>
      </div>
    </motion.footer>
  );
}
