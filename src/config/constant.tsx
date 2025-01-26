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
    education: {
      title: translate(t, "about.education.degree.computerEngineering.title"),
      subTitle: translate(
        t,
        "about.education.degree.computerEngineering.school"
      ),
      description: translate(
        t,
        "about.education.degree.computerEngineering.description"
      ),
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
        description: translate(
          t,
          "about.certificate.certificates.dataAnalytics.description"
        ),
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
        description: translate(
          t,
          "about.certificate.certificates.systemAnalyst.description"
        ),
        imageAlt: translate(
          t,
          "about.certificate.certificates.systemAnalyst.imageAlt"
        ),
      },
    },
  };
};

const translations = getTranslations();

export const WORK_EXPERIENCE: AboutMeContentInterface[] = [
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

export const EDUCATION_EXPERIENCE: AboutMeContentInterface[] = [
  {
    title: translations.education.title,
    subTitle: translations.education.subTitle,
    description: translations.education.description,
    image: UCLogo,
    imageAlt: translations.education.imageAlt,
  },
];

export const CERTIFICATION_EXPERIENCE: AboutMeContentInterface[] = [
  {
    title: translations.certification.dataAnalytics.title,
    subTitle: translations.certification.dataAnalytics.subTitle,
    description: translations.certification.dataAnalytics.description,
    image: UdemyLogo,
    imageAlt: translations.certification.dataAnalytics.imageAlt,
  },
  {
    title: translations.certification.systemAnalyst.title,
    subTitle: translations.certification.systemAnalyst.subTitle,
    description: translations.certification.systemAnalyst.description,
    image: CITLogo,
    imageAlt: translations.certification.systemAnalyst.imageAlt,
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
