"use client";

import { NavLinks, SOCIAL_LINKS, style } from "@/config";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { translate } from "@/lib";
import { useTranslations } from "next-intl";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className={twMerge(
        "mt-20 flex flex-col gap-8",
        style.sectionContainerPaddingX
      )}
    >
      <div className="h-12 w-12 rounded-full bg-amethyst-200" />
      <div className="flex flex-col gap-10">
        <div id="social-links" className="flex justify-between">
          <h3 className="text-h3 font-semibold text-scorpion-700 dark:text-woodsmoke-50">
            {translate(useTranslations(), "footer.slogan")}
          </h3>
          <ul className="flex gap-6">
            {SOCIAL_LINKS.map((link, index) => (
              <li key={index}>
                <a
                  className="h-10 w-10 rounded-full bg-amethyst-400 flex items-center justify-center"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={link.image} alt={link.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul id="nav-link" className="flex justify-between w-4/12 mx-auto">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.to}
                className={twMerge(
                  "text-large transition-transform ease-in-out",
                  pathname === link.to
                    ? "text-amethyst-500 font-bold"
                    : "text-scorpion-300 dark:text-woodsmoke-200 font-normal"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p id="copyright" className="text-center text-scorpion-500 dark:text-woodsmoke-300 text-normal">
          {translate(useTranslations(), "footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
