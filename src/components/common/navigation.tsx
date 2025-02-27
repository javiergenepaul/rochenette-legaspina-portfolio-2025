"use client";

import Link from "next/link";
import { NAV_LINKS, style } from "@/config";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { ThemeToggleSwitch } from "./theme-toggle-switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./sidebar/sidebar";

export default function Navigation() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  const [grabbingIcon, setGrabbingIcon] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Navigation Links */}
      <nav className="select-none bg-scorpion-50 dark:bg-woodsmoke-900 justify-self-center w-8/12 justify-between px-8 py-2 rounded-full items-center shadow-[0_0_14px_rgba(57,7,75,0.14)] fixed inset-x-0  top-[32px] z-[9999] SM:flex hidden">
        <div className="flex gap-2 items-center">
          <motion.div
            drag
            dragSnapToOrigin
            aria-label="dot image"
            className={twMerge(
              "h-[2.75rem] w-[2.75rem] bg-amethyst-500 rounded-full justify-center flex items-center text-scorpion-200 text-large font-bold cursor-grab",
              grabbingIcon ? "cursor-grabbing" : "cursor-grab"
            )}
            onDragStart={() => setGrabbingIcon(true)}
            onDragEnd={() => setGrabbingIcon(false)}
          >
            R
          </motion.div>
        </div>
        <ul className="flex gap-6">
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              <Link
                href={link.to}
                className={twMerge(
                  "XL:text-large LG:text-normal transition-transform ease-in-out",
                  pathname === link.to
                    ? "text-amethyst-500 font-bold translate-y-[-0.125rem]"
                    : "text-woodsmoke-500 hover:text-woodsmoke-800 dark:hover:text-woodsmoke-200 dark:text-woodsmoke-300 font-normal"
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
          "SM:hidden flex justify-between items-center sticky top-0 py-2 bg-amethyst-300/60 backdrop-blur-lg",
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
          <Sidebar />
        </div>
      </nav>
    </>
  );
}
