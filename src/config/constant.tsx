import * as ASSETS from "@/assets";
import { translate } from "@/lib";
import { createTranslator } from "next-intl";
import { EN } from "../../messages";
import { PATH } from "./path";
import {
  AboutMeContentInterface,
  NavLinksInterface,
  ProjectInterface,
  SkillsAndToolsInterface,
  SocialLinksInterface,
} from "./types";

const locale =
  typeof window !== "undefined" ? navigator.language.split("-")[0] : "en";

const getTranslations = () => {
  const t = createTranslator({ locale, messages: EN });
  return {
    work: {
      alliance: {
        title: translate(t, "about.work.experience.alliance.title"),
        companyName: translate(t, "about.work.experience.alliance.companyName"),
        description: {
          1: translate(t, "about.work.experience.alliance.description.1"),
          2: translate(t, "about.work.experience.alliance.description.2"),
          3: translate(t, "about.work.experience.alliance.description.3"),
          4: translate(t, "about.work.experience.alliance.description.4"),
          5: translate(t, "about.work.experience.alliance.description.5"),
        },
        imageAlt: translate(t, "about.work.experience.alliance.imageAlt"),
      },
      mach95: {
        title: translate(t, "about.work.experience.mach95.title"),
        companyName: translate(t, "about.work.experience.mach95.companyName"),
        description: {
          1: translate(t, "about.work.experience.mach95.description.1"),
          2: translate(t, "about.work.experience.mach95.description.2"),
          3: translate(t, "about.work.experience.mach95.description.3"),
          4: translate(t, "about.work.experience.mach95.description.4"),
        },
        imageAlt: translate(t, "about.work.experience.mach95.imageAlt"),
      },
      exodia: {
        title: translate(t, "about.work.experience.exodia.title"),
        companyName: translate(t, "about.work.experience.exodia.companyName"),
        description: {
          1: translate(t, "about.work.experience.exodia.description.1"),
          2: translate(t, "about.work.experience.exodia.description.2"),
          3: translate(t, "about.work.experience.exodia.description.3"),
          4: translate(t, "about.work.experience.exodia.description.4"),
        },
        imageAlt: translate(t, "about.work.experience.exodia.imageAlt"),
      },
    },
    education: {
      title: translate(t, "about.education.degree.computerEngineering.title"),
      subTitle: translate(
        t,
        "about.education.degree.computerEngineering.school"
      ),
      description: {
        1: translate(
          t,
          "about.education.degree.computerEngineering.description.1"
        ),
        2: translate(
          t,
          "about.education.degree.computerEngineering.description.2"
        ),
        3: translate(
          t,
          "about.education.degree.computerEngineering.description.3"
        ),
      },
      imageAlt: translate(
        t,
        "about.education.degree.computerEngineering.imageAlt"
      ),
    },
    certification: {
      dataAnalytics: {
        title: translate(
          t,
          "about.certificate.certificates.dataAnalytics.title"
        ),
        subTitle: translate(
          t,
          "about.certificate.certificates.dataAnalytics.organization"
        ),
        description: {
          1: translate(
            t,
            "about.certificate.certificates.dataAnalytics.description.1"
          ),
          2: translate(
            t,
            "about.certificate.certificates.dataAnalytics.description.2"
          ),
          3: translate(
            t,
            "about.certificate.certificates.dataAnalytics.description.3"
          ),
          4: translate(
            t,
            "about.certificate.certificates.dataAnalytics.description.4"
          ),
          5: translate(
            t,
            "about.certificate.certificates.dataAnalytics.description.5"
          ),
        },
        imageAlt: translate(
          t,
          "about.certificate.certificates.dataAnalytics.imageAlt"
        ),
      },
      systemAnalyst: {
        title: translate(
          t,
          "about.certificate.certificates.systemAnalyst.title"
        ),
        subTitle: translate(
          t,
          "about.certificate.certificates.systemAnalyst.organization"
        ),
        description: {
          1: translate(t, "about.certificate.certificates.systemAnalyst.description.1"),
          2: translate(t, "about.certificate.certificates.systemAnalyst.description.2"),
          3: translate(t, "about.certificate.certificates.systemAnalyst.description.3"),
          4: translate(t, "about.certificate.certificates.systemAnalyst.description.4"),
          5: translate(t, "about.certificate.certificates.systemAnalyst.description.5"),
        },
        imageAlt: translate(
          t,
          "about.certificate.certificates.systemAnalyst.imageAlt"
        ),
      },
    },
  };
};

const translations = getTranslations();

export const LINK_URL = {
  linkedIn: "https://www.linkedin.com/in/rochenette-legaspina-677a64263/",
  dribble: "https://dribbble.com/",
  whatsapp: "https://wa.me/639773007233",
  UC: "https://www.universityofcebu.net/",
  alliance: "https://www.alliance.com.ph/",
  mach95: "https://mach95.com/",
  exodia: "https://exodiagamedev.com/",
  figma: "https://www.figma.com/",
  blender: "https://www.blender.org/",
  word: "https://www.microsoft.com/en-us/microsoft-365/word",
  excel: "https://www.microsoft.com/en-us/microsoft-365/excel",
};

export const WORK_EXPERIENCE: AboutMeContentInterface[] = [
  // Alliance
  {
    title: translations.work.alliance.title,
    subTitle: translations.work.alliance.companyName,
    description: [
      translations.work.alliance.description[1],
      translations.work.alliance.description[2],
      translations.work.alliance.description[3],
      translations.work.alliance.description[4],
      translations.work.alliance.description[5],
    ],
    image: ASSETS.AllianceLogo,
    imageAlt: translations.work.alliance.imageAlt,
    backgroundColor: "bg-[#FFDADA]",
    url: LINK_URL.alliance,
  },
  // Mach95
  {
    title: translations.work.mach95.title,
    subTitle: translations.work.mach95.companyName,
    description: [
      translations.work.mach95.description[1],
      translations.work.mach95.description[2],
      translations.work.mach95.description[3],
      translations.work.mach95.description[4],
    ],
    image: ASSETS.Mach95Logo,
    imageAlt: translations.work.mach95.imageAlt,
    backgroundColor: "bg-[#D0CFFF]",
    url: LINK_URL.mach95,
  },
  // Exodia
  {
    title: translations.work.exodia.title,
    subTitle: translations.work.exodia.companyName,
    description: [
      translations.work.exodia.description[1],
      translations.work.exodia.description[2],
      translations.work.exodia.description[3],
      translations.work.exodia.description[4],
    ],
    image: ASSETS.ExodiaLogo,
    imageAlt: translations.work.exodia.imageAlt,
    backgroundColor: "bg-[#FBCBB2]",
    url: LINK_URL.exodia,
  },
];

export const SKILLS_AND_TOOLS: SkillsAndToolsInterface[] = [
  {
    image: ASSETS.FigmaLogo,
    title: "figma",
    url: LINK_URL.figma,
    alt: "Figma Logo",
    name: "UI/UX Design",
    designation: "Figma",
  },
  {
    image: ASSETS.BlenderLogo,
    title: "Belnder",
    url: LINK_URL.blender,
    alt: "Blender Logo",
    name: "3D Modeling",
    designation: "Blender",
  },
  {
    image: ASSETS.WordLogo,
    title: "Microsoft Word",
    url: LINK_URL.word,
    alt: "MS Word Logo",
    name: "Document Editing",
    designation: "MS Word",
  },
  {
    image: ASSETS.ExcelLogo,
    title: "Excel",
    url: LINK_URL.excel,
    alt: "Excel Logo",
    name: "Data Management",
    designation: "MS Excel",
  },
];

export const EDUCATION_EXPERIENCE: AboutMeContentInterface[] = [
  {
    title: translations.education.title,
    subTitle: translations.education.subTitle,
    description: [
      translations.education.description[1],
      translations.education.description[2],
      translations.education.description[3],
    ],
    image: ASSETS.UCLogo,
    imageAlt: translations.education.imageAlt,
  },
];

export const CERTIFICATION_EXPERIENCE: AboutMeContentInterface[] = [
  {
    title: translations.certification.dataAnalytics.title,
    subTitle: translations.certification.dataAnalytics.subTitle,
    description: [
      translations.certification.dataAnalytics.description[1],
      translations.certification.dataAnalytics.description[2],
      translations.certification.dataAnalytics.description[3],
      translations.certification.dataAnalytics.description[4],
      translations.certification.dataAnalytics.description[5],
    ],
    image: ASSETS.UdemyLogo,
    imageAlt: translations.certification.dataAnalytics.imageAlt,
    backgroundColor: "#EFCFFC",
  },
  {
    title: translations.certification.systemAnalyst.title,
    subTitle: translations.certification.systemAnalyst.subTitle,
    description: [
      translations.certification.systemAnalyst.description[1],
      translations.certification.systemAnalyst.description[2],
      translations.certification.systemAnalyst.description[3],
      translations.certification.systemAnalyst.description[4],
      translations.certification.systemAnalyst.description[5],
    ],
    image: ASSETS.CITLogo,
    imageAlt: translations.certification.systemAnalyst.imageAlt,
    backgroundColor: "#FDEEBA",
  },
];

export const SOCIAL_LINKS: SocialLinksInterface[] = [
  {
    name: "LinkedIn",
    image: ASSETS.LinkedInIcon,
    url: LINK_URL.linkedIn,
    alt: "LinkedIn Icon",
  },
  {
    name: "Dribble",
    image: ASSETS.DribbleIcon,
    url: LINK_URL.dribble,
    alt: "Dribble Icon",
  },
  {
    name: "WhatsApp",
    image: ASSETS.WhatsAppIcon,
    url: LINK_URL.whatsapp,
    alt: "WhatsApp Icon",
  },
];

export const NAV_LINKS: NavLinksInterface[] = [
  {
    label: PATH.HOME.name,
    to: PATH.HOME.getPath(locale),
  },
  {
    label: PATH.ABOUT.name,
    to: PATH.ABOUT.getPath(locale),
  },
  {
    label: PATH.PROJECT.name,
    to: PATH.PROJECT.getPath(locale),
  },
  {
    label: PATH.CONTACT.name,
    to: PATH.CONTACT.getPath(locale),
  },
];

export const PROJECTS: ProjectInterface[] = [
  {
    title: "SC Claims",
    role: "UI/UX Designer/ Systems Analyst",
    desciption:
      "The SC Claims App is a desktop-based solution that automates the validation and computation of senior citizen discounts on products sold to eligible customers. By streamlining this process, the app helps ensure accuracy and efficiency, reducing the time and effort previously required for manual computations.The new solution consolidates multiple files into a single, easy-to-manage system, improving both efficiency and accuracy, while ensuring timely reimbursements for senior citizen discounts.",
    contribution:
      "As a System Analyst and UI/UX Designer, I played a key role in gathering requirements, organizing client meetings, and documenting the project through Functional Specification Documents (FSD). I worked closely with the development team to ensure clear communication and understanding of the project goals, while also contributing to QA testing to ensure a smooth and error-free implementation.",
    tools:
      "For the design and documentation of the project, I utilized tools such as mock-ups, Microsoft Excel, and Word for specifications, data organization, and documentation.",
    challange:
      "One of the biggest challenges was the previous manual process, which involved lengthy validation and often resulted in errors due to human oversight and the management of multiple files. By transitioning to an automated system, we aimed to eliminate these issues, significantly reducing the time needed for processing and improving accuracy across the board.",
    sectionId: "sc-claims",
  },
  {
    title: "Country Scapes",
    role: "UI/UX Designer",
    desciption:
      "The SC Claims App is a desktop-based solution that automates the validation and computation of senior citizen discounts on products sold to eligible customers. By streamlining this process, the app helps ensure accuracy and efficiency, reducing the time and effort previously required for manual computations.The new solution consolidates multiple files into a single, easy-to-manage system, improving both efficiency and accuracy, while ensuring timely reimbursements for senior citizen discounts.",
    contribution:
      "As a System Analyst and UI/UX Designer, I played a key role in gathering requirements, organizing client meetings, and documenting the project through Functional Specification Documents (FSD). I worked closely with the development team to ensure clear communication and understanding of the project goals, while also contributing to QA testing to ensure a smooth and error-free implementation.",
    tools:
      "For the design and documentation of the project, I utilized tools such as mock-ups, Microsoft Excel, and Word for specifications, data organization, and documentation.",
    challange:
      "One of the biggest challenges was the previous manual process, which involved lengthy validation and often resulted in errors due to human oversight and the management of multiple files. By transitioning to an automated system, we aimed to eliminate these issues, significantly reducing the time needed for processing and improving accuracy across the board.",
    sectionId: "sc-claims",
  },
  {
    title: "Transport service and Food Delivery App",
    role: "UI/UX Designer",
    desciption:
      "The SC Claims App is a desktop-based solution that automates the validation and computation of senior citizen discounts on products sold to eligible customers. By streamlining this process, the app helps ensure accuracy and efficiency, reducing the time and effort previously required for manual computations.The new solution consolidates multiple files into a single, easy-to-manage system, improving both efficiency and accuracy, while ensuring timely reimbursements for senior citizen discounts.",
    contribution:
      "As a System Analyst and UI/UX Designer, I played a key role in gathering requirements, organizing client meetings, and documenting the project through Functional Specification Documents (FSD). I worked closely with the development team to ensure clear communication and understanding of the project goals, while also contributing to QA testing to ensure a smooth and error-free implementation.",
    tools:
      "For the design and documentation of the project, I utilized tools such as mock-ups, Microsoft Excel, and Word for specifications, data organization, and documentation.",
    challange:
      "One of the biggest challenges was the previous manual process, which involved lengthy validation and often resulted in errors due to human oversight and the management of multiple files. By transitioning to an automated system, we aimed to eliminate these issues, significantly reducing the time needed for processing and improving accuracy across the board.",
    sectionId: "sc-claims",
  },
  {
    title: "Logistic",
    role: "UI/UX Designer",
    desciption:
      "The SC Claims App is a desktop-based solution that automates the validation and computation of senior citizen discounts on products sold to eligible customers. By streamlining this process, the app helps ensure accuracy and efficiency, reducing the time and effort previously required for manual computations.The new solution consolidates multiple files into a single, easy-to-manage system, improving both efficiency and accuracy, while ensuring timely reimbursements for senior citizen discounts.",
    contribution:
      "As a System Analyst and UI/UX Designer, I played a key role in gathering requirements, organizing client meetings, and documenting the project through Functional Specification Documents (FSD). I worked closely with the development team to ensure clear communication and understanding of the project goals, while also contributing to QA testing to ensure a smooth and error-free implementation.",
    tools:
      "For the design and documentation of the project, I utilized tools such as mock-ups, Microsoft Excel, and Word for specifications, data organization, and documentation.",
    challange:
      "One of the biggest challenges was the previous manual process, which involved lengthy validation and often resulted in errors due to human oversight and the management of multiple files. By transitioning to an automated system, we aimed to eliminate these issues, significantly reducing the time needed for processing and improving accuracy across the board.",
    sectionId: "sc-claims",
  },
];
