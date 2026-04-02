// 2026 content constants — populate these for the 2026 portfolio
import { NavLinksInterface, SocialLinksInterface } from "./types";
import { PATH } from "@/config/path";

const locale =
  typeof window !== "undefined" ? navigator.language.split("-")[0] : "en";

export const NAV_LINKS_2026: NavLinksInterface[] = [
  { label: "Home", to: PATH.HOME.getPath("2026", locale) },
  { label: "About", to: PATH.ABOUT.getPath("2026", locale) },
  { label: "Projects", to: PATH.PROJECT.getPath("2026", locale) },
  { label: "Contact", to: PATH.CONTACT.getPath("2026", locale) },
];

export const SOCIAL_LINKS_2026: SocialLinksInterface[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rochenette-legaspina-677a64263/",
    alt: "LinkedIn",
  },
  {
    name: "Behance",
    url: "https://www.behance.net/rochenelegaspi/analytics",
    alt: "Behance",
  },
];
