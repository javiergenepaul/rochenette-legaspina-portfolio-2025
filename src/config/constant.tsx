import {
  AllianceLogo,
  BlenderLogo,
  CITLogo,
  DribbleIcon,
  ExcelLogo,
  ExodiaLogo,
  FigmaLogo,
  LinkedInIcon,
  Mach95Logo,
  UCLogo,
  UdemyLogo,
  WhatsAppIcon,
  WordLogo,
} from "@/assets";
import { AboutMeContentProps } from "@/components";
import { translate } from "@/lib";
import { createTranslator } from "next-intl";
import { EN } from "../../messages";
import { StaticImageData } from "next/image";

const locale = "en";

const getTranslations = () => {
  const t = createTranslator({ locale, messages: EN });
  return {
    work: {
      alliance: {
        title: translate(t, "about.work.experience.alliance.title"),
        companyName: translate(t, "about.work.experience.alliance.companyName"),
        description: translate(t, "about.work.experience.alliance.description"),
        imageAlt: translate(t, "about.work.experience.alliance.imageAlt"),
      },
      mach95: {
        title: translate(t, "about.work.experience.mach95.title"),
        companyName: translate(t, "about.work.experience.mach95.companyName"),
        description: translate(t, "about.work.experience.mach95.description"),
        imageAlt: translate(t, "about.work.experience.mach95.imageAlt"),
      },
      exodia: {
        title: translate(t, "about.work.experience.exodia.title"),
        companyName: translate(t, "about.work.experience.exodia.companyName"),
        description: translate(t, "about.work.experience.exodia.description"),
        imageAlt: translate(t, "about.work.experience.exodia.imageAlt"),
      },
    },
  };
};

const translations = getTranslations();

export const WORK_EXPERIENCE: AboutMeContentProps[] = [
  {
    title: translations.work.alliance.title,
    subTitle: translations.work.alliance.companyName,
    description: translations.work.alliance.description,
    image: AllianceLogo,
    imageAlt: translations.work.alliance.imageAlt,
  },
  {
    title: translations.work.mach95.title,
    subTitle: translations.work.mach95.companyName,
    description: translations.work.mach95.description,
    image: Mach95Logo,
    imageAlt: translations.work.mach95.imageAlt,
  },
  {
    title: translations.work.exodia.title,
    subTitle: translations.work.exodia.companyName,
    description: translations.work.exodia.description,
    image: ExodiaLogo,
    imageAlt: translations.work.exodia.imageAlt,
  },
];

interface SkillsAndToolsInterface {
  image: StaticImageData;
  title: string;
  url: string;
  alt: string;
}

interface SocialLinksInterface {
  image: StaticImageData;
  url: string;
  alt: string;
}

export const SKILLS_AND_TOOLS: SkillsAndToolsInterface[] = [
  {
    image: FigmaLogo,
    title: "figma",
    url: "https://www.figma.com/",
    alt: "Figma Logo",
  },
  {
    image: BlenderLogo,
    title: "Belnder",
    url: "https://www.blender.org/",
    alt: "Blender Logo",
  },
  {
    image: WordLogo,
    title: "Microsoft Word",
    url: "https://www.microsoft.com/en-us/microsoft-365/word",
    alt: "MS Word Logo",
  },
  {
    image: ExcelLogo,
    title: "Excel",
    url: "https://www.microsoft.com/en-us/microsoft-365/excel",
    alt: "Excel Logo",
  },
];

export const EDUCATION_EXPERIENCE: AboutMeContentProps[] = [
  {
    title: "Bachelor of Science in Computer Engineering",
    subTitle: "University of Cebu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: UCLogo,
    imageAlt: "University of Cebu Logo",
  },
];

export const CERTIFICATION_EXPERIENCE: AboutMeContentProps[] = [
  {
    title: "Data Analytics Course",
    subTitle: "Speaker: CIT-U",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: UdemyLogo,
    imageAlt: "CIT Logo",
  },
  {
    title: "System Analyst and a UI/UX Desginer",
    subTitle: "Udemy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: CITLogo,
    imageAlt: "Udemy Logo",
  },
];

export const SOCIAL_LINKS: SocialLinksInterface[] = [
  {
    image: LinkedInIcon,
    url: "https://www.linkedin.com/in/rochenette-legaspina-677a64263/",
    alt: "LinkedIn Icon",
  },
  {
    image: DribbleIcon,
    url: "https://www.linkedin.com/in/rochenette-legaspina-677a64263/",
    alt: "Dribble Icon",
  },
  {
    image: WhatsAppIcon,
    url: "https://www.linkedin.com/in/rochenette-legaspina-677a64263/",
    alt: "WhatsApp Icon",
  },
];
