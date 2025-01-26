"use client";

import { NAV_LINKS, SOCIAL_LINKS, style } from "@/config";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { translate } from "@/lib";
import { useTranslations } from "next-intl";
import { LinkPreview } from "../ui/link-preview";
import { useTheme } from "next-themes";

export default function Footer() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  return (
    <footer
      className={twMerge(
        "mt-20 flex flex-col gap-8 pb-7",
        style.sectionContainerPaddingX
      )}
    >
      <div className="h-12 w-12 rounded-full bg-amethyst-200" />
      <div className="flex flex-col gap-10">
        <div id="social-links" className="flex justify-between">
          <h3 className="XL:text-h2 LG:text-h3 SM:text-h4 MD:font-semibold font-semibold text-scorpion-700 dark:text-woodsmoke-50">
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
          {NAV_LINKS.map((link, index) => (
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
        <div className="flex justify-center gap-2">
          <p
            id="copyright"
            className="text-center text-scorpion-500 dark:text-woodsmoke-300 text-normal"
          >
            {translate(useTranslations(), "footer.copyright")}
          </p>
          <span>
            <LinkPreview
              target="_blank"
              url="https://paul-javier-portfolio.netlify.app"
              className="font-bold text-amethyst-500 dark:text-amethyst-500"
              theme={resolvedTheme}
            >
              Gene Paul Mar Javier
            </LinkPreview>
          </span>
        </div>
      </div>
    </footer>
  );
}
