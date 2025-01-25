"use client";

import { NavLinks, style } from "@/config";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { MenuIcon } from "@/assets";
import { ThemeToggleSwitch } from "./theme-toggle-switch";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Navigation Links */}
      <nav className="bg-scorpion-50 dark:bg-black justify-self-center w-8/12 justify-between px-8 py-2 rounded-full items-center shadow-[0_0_14px_rgba(57,7,75,0.14)] sticky top-[32px] z-50 sm:flex hidden">
        <div className="flex gap-2 items-center">
          <div
            aria-label="dot image"
            className="h-[2.75rem] w-[2.75rem] bg-amethyst-500 rounded-full justify-center flex items-center text-scorpion-200 text-large font-bold"
          >
            R
          </div>
        </div>
        <ul className="flex gap-6">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.to}
                className={twMerge(
                  "xl:text-large lg:text-normal transition-transform ease-in-out",
                  pathname === link.to
                    ? "text-scorpion-950 font-bold translate-y-[-0.125rem]"
                    : "text-scorpion-500 font-normal"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggleSwitch
          checked={resolvedTheme === "dark"}
          onCheckedChange={(event: boolean) =>
            setTheme(event ? "dark" : "light")
          }
        />
      </nav>
      {/* Burger Menu */}
      <nav
        className={twMerge(
          "sm:hidden flex justify-between items-center sticky top-0 py-2 bg-amethyst-300/60 backdrop-blur-lg",
          style.sectionContainerPaddingX
        )}
      >
        <div
          aria-label="dot image"
          className="h-[2.75rem] w-[2.75rem] bg-amethyst-500 rounded-full justify-center flex items-center text-scorpion-200 text-large font-bold"
        >
          R
        </div>
        <div className="p-2 overflow-hidden">
          <Image src={MenuIcon} alt="menu icon" />
        </div>
      </nav>
    </>
  );
}
