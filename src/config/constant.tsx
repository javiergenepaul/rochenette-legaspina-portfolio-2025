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
import { TxKeyPath } from "@/i18n";

export const locale =
  typeof window !== "undefined" ? navigator.language.split("-")[0] : "en";

const getTranslations = () => {
  const t = createTranslator({ locale, messages: EN });

  const getProjectInformationDescription = (
    project: "countryScape" | "scClaims" | "iqmk" | "yoo",
    section: "contribution" | "tools" | "challenge",
    count: number
  ) => {
    return Array.from({ length: count }, (_, i) =>
      translate(
        t,
        `project.information.${[project]}.${section}.${i + 1}` as TxKeyPath
      )
    );
  };

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
          1: translate(
            t,
            "about.certificate.certificates.systemAnalyst.description.1"
          ),
          2: translate(
            t,
            "about.certificate.certificates.systemAnalyst.description.2"
          ),
          3: translate(
            t,
            "about.certificate.certificates.systemAnalyst.description.3"
          ),
          4: translate(
            t,
            "about.certificate.certificates.systemAnalyst.description.4"
          ),
          5: translate(
            t,
            "about.certificate.certificates.systemAnalyst.description.5"
          ),
        },
        imageAlt: translate(
          t,
          "about.certificate.certificates.systemAnalyst.imageAlt"
        ),
      },
    },
    projects: {
      information: {
        title: {
          contribution: translate(t, "project.information.title.contribution"),
          tools: translate(t, "project.information.title.tools"),
          challenge: translate(t, "project.information.title.challenge"),
        },
        scClaims: {
          challenge: getProjectInformationDescription(
            "scClaims",
            "challenge",
            2
          ),
          contribution: getProjectInformationDescription(
            "scClaims",
            "contribution",
            5
          ),
          tools: getProjectInformationDescription("scClaims", "tools", 2),
        },
        yoo: {
          constribution: getProjectInformationDescription(
            "yoo",
            "contribution",
            5
          ),
          challenge: getProjectInformationDescription("yoo", "challenge", 2),
          tools: getProjectInformationDescription("yoo", "tools", 1),
        },
        countryScape: {
          contribution: getProjectInformationDescription(
            "countryScape",
            "contribution",
            4
          ),
          tools: getProjectInformationDescription("countryScape", "tools", 1),
          challenge: getProjectInformationDescription(
            "countryScape",
            "challenge",
            4
          ),
        },
        iqmk: {
          contribution: getProjectInformationDescription(
            "iqmk",
            "contribution",
            4
          ),
          tools: getProjectInformationDescription("iqmk", "tools", 1),
          challenge: getProjectInformationDescription("iqmk", "challenge", 3),
        },
      },
      scClaims: {
        title: translate(t, "project.projects.scClaims.title"),
        role: translate(t, "project.projects.scClaims.role"),
        description: translate(t, "project.projects.scClaims.description"),
      },
      yoo: {
        title: translate(t, "project.projects.yoo.title"),
        role: translate(t, "project.projects.yoo.role"),
        description: translate(t, "project.projects.yoo.description"),
      },
      countryScape: {
        title: translate(t, "project.projects.countryScape.title"),
        role: translate(t, "project.projects.countryScape.role"),
        description: translate(t, "project.projects.countryScape.description"),
      },
      iqmk: {
        title: translate(t, "project.projects.iqmk.title"),
        role: translate(t, "project.projects.iqmk.role"),
        description: translate(t, "project.projects.iqmk.description"),
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
    sidebarIcon: (
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.1117 0.5H0.885937C0.396094 0.5 0 0.886719 0 1.36484V11.6328C0 12.1109 0.396094 12.5 0.885937 12.5H11.1117C11.6016 12.5 12 12.1109 12 11.6352V1.36484C12 0.886719 11.6016 0.5 11.1117 0.5ZM3.56016 10.7258H1.77891V4.99766H3.56016V10.7258ZM2.66953 4.21719C2.09766 4.21719 1.63594 3.75547 1.63594 3.18594C1.63594 2.61641 2.09766 2.15469 2.66953 2.15469C3.23906 2.15469 3.70078 2.61641 3.70078 3.18594C3.70078 3.75312 3.23906 4.21719 2.66953 4.21719ZM10.2258 10.7258H8.44687V7.94141C8.44687 7.27813 8.43516 6.42266 7.52109 6.42266C6.59531 6.42266 6.45469 7.14688 6.45469 7.89453V10.7258H4.67813V4.99766H6.38437V5.78047H6.40781C6.64453 5.33047 7.22578 4.85469 8.09063 4.85469C9.89297 4.85469 10.2258 6.04063 10.2258 7.58281V10.7258V10.7258Z"
          fill="#645C6D"
        />
      </svg>
    ),
    darkSidebarIcon: (
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.1117 0.5H0.885937C0.396094 0.5 0 0.886719 0 1.36484V11.6328C0 12.1109 0.396094 12.5 0.885937 12.5H11.1117C11.6016 12.5 12 12.1109 12 11.6352V1.36484C12 0.886719 11.6016 0.5 11.1117 0.5ZM3.56016 10.7258H1.77891V4.99766H3.56016V10.7258ZM2.66953 4.21719C2.09766 4.21719 1.63594 3.75547 1.63594 3.18594C1.63594 2.61641 2.09766 2.15469 2.66953 2.15469C3.23906 2.15469 3.70078 2.61641 3.70078 3.18594C3.70078 3.75312 3.23906 4.21719 2.66953 4.21719ZM10.2258 10.7258H8.44687V7.94141C8.44687 7.27813 8.43516 6.42266 7.52109 6.42266C6.59531 6.42266 6.45469 7.14688 6.45469 7.89453V10.7258H4.67813V4.99766H6.38437V5.78047H6.40781C6.64453 5.33047 7.22578 4.85469 8.09063 4.85469C9.89297 4.85469 10.2258 6.04063 10.2258 7.58281V10.7258V10.7258Z"
          fill="#FBF4FF"
        />
      </svg>
    ),
  },
  {
    name: "Dribble",
    image: ASSETS.DribbleIcon,
    url: LINK_URL.dribble,
    alt: "Dribble Icon",
    sidebarIcon: (
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 0.5C2.68551 0.5 0 3.18746 0 6.49891C0 9.6467 2.42848 12.2304 5.51331 12.4783V12.5H6C9.31449 12.5 12 9.81254 12 6.50109C12 3.18987 9.31474 0.5 6 0.5ZM7.3258 11.3501C6.94938 11.4528 6.55536 11.5128 6.14923 11.5246H6C5.32278 11.5246 4.67669 11.3905 4.08688 11.1474C4.65795 9.08972 6.20603 7.61588 7.97796 6.95731C8.28375 8.43927 8.06178 10.0274 7.3258 11.3501ZM7.70816 6.02002C5.6858 6.74842 3.91957 8.38919 3.20988 10.6791C1.86169 9.7774 0.973374 8.24121 0.973374 6.49891C0.973374 5.88107 1.08497 5.28915 1.28913 4.74226C1.89766 5.04547 2.54836 5.25995 3.21752 5.37922C4.06993 5.5355 4.94328 5.53031 5.79322 5.37706C6.27701 5.28972 6.74932 5.1506 7.20218 4.96522C7.40376 5.30031 7.5733 5.65342 7.70816 6.02002ZM8.91616 6.68943C9.20839 8.03837 9.11977 9.46787 8.65337 10.7702C10.0371 9.90848 10.9713 8.39304 11.0243 6.65696C10.3364 6.53224 9.61936 6.54747 8.91616 6.68943ZM10.9566 5.66058C10.1948 5.5536 9.41147 5.58837 8.64624 5.75183C8.49553 5.32902 8.3053 4.92171 8.07866 4.53495C8.70736 4.17185 9.2815 3.71484 9.77504 3.18195C10.3787 3.86827 10.7982 4.72032 10.9566 5.66058ZM3.38949 4.42132C2.80818 4.31783 2.24355 4.13125 1.71663 3.86792C2.16981 3.13206 2.80736 2.5217 3.56499 2.10136L3.57082 2.10319L3.57104 2.10326L3.57107 2.10327L3.57108 2.10327C3.65362 2.12925 3.73241 2.15405 3.80829 2.18128C3.83628 2.19197 3.8637 2.20237 3.89049 2.21252L3.89091 2.21268L3.89093 2.21269L3.89095 2.2127C4.01399 2.25935 4.12385 2.301 4.21563 2.34355L4.24183 2.35665L4.24807 2.35955C4.30603 2.38651 4.38954 2.42631 4.4648 2.4622C4.5048 2.48129 4.54248 2.49925 4.57277 2.51357L4.57389 2.51419C4.5992 2.52779 4.62047 2.53921 4.64028 2.55102C4.65641 2.56148 4.67081 2.56996 4.67853 2.57447C4.69265 2.58274 4.70717 2.59092 4.71913 2.59757C4.72935 2.60326 4.73938 2.60879 4.7469 2.61291L4.75068 2.61499L4.75869 2.61942L4.7597 2.62C4.77086 2.62643 4.7844 2.63416 4.79983 2.64297C4.83292 2.66185 4.87475 2.68572 4.92069 2.71261C4.95307 2.73158 4.98337 2.74967 5.00808 2.76499C5.02646 2.7764 5.03644 2.78303 5.04024 2.78554L5.04047 2.78569C5.04202 2.78673 5.04238 2.78697 5.04176 2.78649L5.0631 2.80266L5.0868 2.81674C5.12294 2.8382 5.15857 2.86284 5.20302 2.8936L5.20303 2.89361L5.20305 2.89362L5.20323 2.89375C5.22352 2.90779 5.24567 2.92311 5.27053 2.93999L5.28742 2.95144L5.30178 2.95954C5.30177 2.95957 5.30244 2.96002 5.30387 2.96099C5.30773 2.96359 5.31711 2.96991 5.33345 2.98161C5.3586 2.99961 5.38895 3.02221 5.42237 3.04733L5.46193 3.07714C5.48227 3.0925 5.5029 3.10806 5.52045 3.12119C5.54362 3.13853 5.57197 3.15959 5.59757 3.17732C5.97106 3.46297 6.31246 3.78914 6.61639 4.14865C6.29302 4.26697 5.95972 4.35806 5.62037 4.41933C4.8806 4.5527 4.125 4.5563 3.39204 4.42179L3.39077 4.42154L3.38949 4.42132ZM6 1.4732C7.15376 1.4732 8.21665 1.86233 9.06495 2.51629C8.62018 2.99748 8.09936 3.40728 7.52908 3.72798C7.137 3.22964 6.68339 2.78096 6.17765 2.39571L6.16543 2.38641L6.15275 2.37796L6.1493 2.37556C6.1466 2.37365 6.143 2.37107 6.13839 2.36772C6.12905 2.36094 6.11748 2.35237 6.10361 2.34198C6.08787 2.33021 6.07208 2.3183 6.05513 2.3055L6.05509 2.30548L6.05161 2.30285C6.03787 2.29247 6.02332 2.28149 6.00738 2.26951C5.97292 2.2436 5.93512 2.21541 5.9004 2.19053C5.87613 2.17314 5.84126 2.14855 5.80563 2.12686L5.78304 2.11123L5.78291 2.11114L5.7829 2.11113C5.73657 2.07904 5.66707 2.0309 5.60383 1.99207C5.54475 1.95065 5.46491 1.90347 5.4126 1.87284C5.36195 1.84318 5.30741 1.81205 5.27355 1.79272L5.27328 1.79257L5.24763 1.77791C5.24128 1.7742 5.23576 1.77113 5.23361 1.76992L5.23331 1.76976L5.22017 1.76249L5.21572 1.76004C5.20817 1.75588 5.20061 1.75172 5.19275 1.74734C5.18375 1.74234 5.17648 1.73821 5.17117 1.73512L5.16752 1.73256L5.1546 1.72467C5.10785 1.69611 5.05915 1.67002 5.03271 1.65586L5.03214 1.65556L5.02293 1.65063L5.01163 1.64454L5.00002 1.63906C4.97679 1.62809 4.94246 1.61174 4.90348 1.59316C5.25643 1.51462 5.62337 1.4732 6 1.4732Z"
          fill="#645C6D"
        />
      </svg>
    ),
    darkSidebarIcon: (
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 0.5C2.68551 0.5 0 3.18746 0 6.49891C0 9.6467 2.42848 12.2304 5.51331 12.4783V12.5H6C9.31449 12.5 12 9.81254 12 6.50109C12 3.18987 9.31474 0.5 6 0.5ZM7.3258 11.3501C6.94938 11.4528 6.55536 11.5128 6.14923 11.5246H6C5.32278 11.5246 4.67669 11.3905 4.08688 11.1474C4.65795 9.08972 6.20603 7.61588 7.97796 6.95731C8.28375 8.43927 8.06178 10.0274 7.3258 11.3501ZM7.70816 6.02002C5.6858 6.74842 3.91957 8.38919 3.20988 10.6791C1.86169 9.7774 0.973374 8.24121 0.973374 6.49891C0.973374 5.88107 1.08497 5.28915 1.28913 4.74226C1.89766 5.04547 2.54836 5.25995 3.21752 5.37922C4.06993 5.5355 4.94328 5.53031 5.79322 5.37706C6.27701 5.28972 6.74932 5.1506 7.20218 4.96522C7.40376 5.30031 7.5733 5.65342 7.70816 6.02002ZM8.91616 6.68943C9.20839 8.03837 9.11977 9.46787 8.65337 10.7702C10.0371 9.90848 10.9713 8.39304 11.0243 6.65696C10.3364 6.53224 9.61936 6.54747 8.91616 6.68943ZM10.9566 5.66058C10.1948 5.5536 9.41147 5.58837 8.64624 5.75183C8.49553 5.32902 8.3053 4.92171 8.07866 4.53495C8.70736 4.17185 9.2815 3.71484 9.77504 3.18195C10.3787 3.86827 10.7982 4.72032 10.9566 5.66058ZM3.38949 4.42132C2.80818 4.31783 2.24355 4.13125 1.71663 3.86792C2.16981 3.13206 2.80736 2.5217 3.56499 2.10136L3.57082 2.10319L3.57104 2.10326L3.57107 2.10327L3.57108 2.10327C3.65362 2.12925 3.73241 2.15405 3.80829 2.18128C3.83628 2.19197 3.8637 2.20237 3.89049 2.21252L3.89091 2.21268L3.89093 2.21269L3.89095 2.2127C4.01399 2.25935 4.12385 2.301 4.21563 2.34355L4.24183 2.35665L4.24807 2.35955C4.30603 2.38651 4.38954 2.42631 4.4648 2.4622C4.5048 2.48129 4.54248 2.49925 4.57277 2.51357L4.57389 2.51419C4.5992 2.52779 4.62047 2.53921 4.64028 2.55102C4.65641 2.56148 4.67081 2.56996 4.67853 2.57447C4.69265 2.58274 4.70717 2.59092 4.71913 2.59757C4.72935 2.60326 4.73938 2.60879 4.7469 2.61291L4.75068 2.61499L4.75869 2.61942L4.7597 2.62C4.77086 2.62643 4.7844 2.63416 4.79983 2.64297C4.83292 2.66185 4.87475 2.68572 4.92069 2.71261C4.95307 2.73158 4.98337 2.74967 5.00808 2.76499C5.02646 2.7764 5.03644 2.78303 5.04024 2.78554L5.04047 2.78569C5.04202 2.78673 5.04238 2.78697 5.04176 2.78649L5.0631 2.80266L5.0868 2.81674C5.12294 2.8382 5.15857 2.86284 5.20302 2.8936L5.20303 2.89361L5.20305 2.89362L5.20323 2.89375C5.22352 2.90779 5.24567 2.92311 5.27053 2.93999L5.28742 2.95144L5.30178 2.95954C5.30177 2.95957 5.30244 2.96002 5.30387 2.96099C5.30773 2.96359 5.31711 2.96991 5.33345 2.98161C5.3586 2.99961 5.38895 3.02221 5.42237 3.04733L5.46193 3.07714C5.48227 3.0925 5.5029 3.10806 5.52045 3.12119C5.54362 3.13853 5.57197 3.15959 5.59757 3.17732C5.97106 3.46297 6.31246 3.78914 6.61639 4.14865C6.29302 4.26697 5.95972 4.35806 5.62037 4.41933C4.8806 4.5527 4.125 4.5563 3.39204 4.42179L3.39077 4.42154L3.38949 4.42132ZM6 1.4732C7.15376 1.4732 8.21665 1.86233 9.06495 2.51629C8.62018 2.99748 8.09936 3.40728 7.52908 3.72798C7.137 3.22964 6.68339 2.78096 6.17765 2.39571L6.16543 2.38641L6.15275 2.37796L6.1493 2.37556C6.1466 2.37365 6.143 2.37107 6.13839 2.36772C6.12905 2.36094 6.11748 2.35237 6.10361 2.34198C6.08787 2.33021 6.07208 2.3183 6.05513 2.3055L6.05509 2.30548L6.05161 2.30285C6.03787 2.29247 6.02332 2.28149 6.00738 2.26951C5.97292 2.2436 5.93512 2.21541 5.9004 2.19053C5.87613 2.17314 5.84126 2.14855 5.80563 2.12686L5.78304 2.11123L5.78291 2.11114L5.7829 2.11113C5.73657 2.07904 5.66707 2.0309 5.60383 1.99207C5.54475 1.95065 5.46491 1.90347 5.4126 1.87284C5.36195 1.84318 5.30741 1.81205 5.27355 1.79272L5.27328 1.79257L5.24763 1.77791C5.24128 1.7742 5.23576 1.77113 5.23361 1.76992L5.23331 1.76976L5.22017 1.76249L5.21572 1.76004C5.20817 1.75588 5.20061 1.75172 5.19275 1.74734C5.18375 1.74234 5.17648 1.73821 5.17117 1.73512L5.16752 1.73256L5.1546 1.72467C5.10785 1.69611 5.05915 1.67002 5.03271 1.65586L5.03214 1.65556L5.02293 1.65063L5.01163 1.64454L5.00002 1.63906C4.97679 1.62809 4.94246 1.61174 4.90348 1.59316C5.25643 1.51462 5.62337 1.4732 6 1.4732Z"
          fill="#FBF4FF"
        />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    image: ASSETS.WhatsAppIcon,
    url: LINK_URL.whatsapp,
    alt: "WhatsApp Icon",
    sidebarIcon: (
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 12.5L0.843498 9.4185C0.322999 8.5165 0.0494999 7.494 0.0499999 6.4455C0.0514999 3.1675 2.71899 0.5 5.99649 0.5C7.58698 0.5005 9.07998 1.12 10.203 2.244C11.3255 3.368 11.9435 4.862 11.943 6.451C11.9415 9.7295 9.27398 12.397 5.99649 12.397C5.00149 12.3965 4.02099 12.147 3.15249 11.673L0 12.5ZM3.29849 10.5965C4.13649 11.094 4.93649 11.392 5.99449 11.3925C8.71848 11.3925 10.9375 9.1755 10.939 6.45C10.94 3.719 8.73148 1.505 5.99849 1.504C3.27249 1.504 1.055 3.721 1.054 6.446C1.0535 7.5585 1.3795 8.3915 1.927 9.263L1.4275 11.087L3.29849 10.5965ZM8.99198 7.8645C8.95498 7.8025 8.85598 7.7655 8.70698 7.691C8.55848 7.6165 7.82798 7.257 7.69148 7.2075C7.55548 7.158 7.45648 7.133 7.35698 7.282C7.25798 7.4305 6.97298 7.7655 6.88648 7.8645C6.79998 7.9635 6.71298 7.976 6.56448 7.9015C6.41599 7.827 5.93699 7.6705 5.36949 7.164C4.92799 6.77 4.62949 6.2835 4.54299 6.1345C4.45649 5.986 4.53399 5.9055 4.60799 5.8315C4.67499 5.765 4.75649 5.658 4.83099 5.571C4.90649 5.485 4.93099 5.423 4.98099 5.3235C5.03049 5.2245 5.00599 5.1375 4.96849 5.063C4.93099 4.989 4.63399 4.2575 4.51049 3.96C4.38949 3.6705 4.26699 3.7095 4.17599 3.705L3.89099 3.7C3.79199 3.7 3.63099 3.737 3.49499 3.886C3.35899 4.035 2.97499 4.394 2.97499 5.1255C2.97499 5.857 3.50749 6.5635 3.58149 6.6625C3.65599 6.7615 4.62899 8.2625 6.11949 8.906C6.47399 9.059 6.75098 9.1505 6.96648 9.219C7.32248 9.332 7.64648 9.316 7.90248 9.278C8.18798 9.2355 8.78148 8.9185 8.90548 8.5715C9.02948 8.224 9.02948 7.9265 8.99198 7.8645Z"
          fill="#645C6D"
        />
      </svg>
    ),
    darkSidebarIcon: (
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 12.5L0.843498 9.4185C0.322999 8.5165 0.0494999 7.494 0.0499999 6.4455C0.0514999 3.1675 2.71899 0.5 5.99649 0.5C7.58698 0.5005 9.07998 1.12 10.203 2.244C11.3255 3.368 11.9435 4.862 11.943 6.451C11.9415 9.7295 9.27398 12.397 5.99649 12.397C5.00149 12.3965 4.02099 12.147 3.15249 11.673L0 12.5ZM3.29849 10.5965C4.13649 11.094 4.93649 11.392 5.99449 11.3925C8.71848 11.3925 10.9375 9.1755 10.939 6.45C10.94 3.719 8.73148 1.505 5.99849 1.504C3.27249 1.504 1.055 3.721 1.054 6.446C1.0535 7.5585 1.3795 8.3915 1.927 9.263L1.4275 11.087L3.29849 10.5965ZM8.99198 7.8645C8.95498 7.8025 8.85598 7.7655 8.70698 7.691C8.55848 7.6165 7.82798 7.257 7.69148 7.2075C7.55548 7.158 7.45648 7.133 7.35698 7.282C7.25798 7.4305 6.97298 7.7655 6.88648 7.8645C6.79998 7.9635 6.71298 7.976 6.56448 7.9015C6.41599 7.827 5.93699 7.6705 5.36949 7.164C4.92799 6.77 4.62949 6.2835 4.54299 6.1345C4.45649 5.986 4.53399 5.9055 4.60799 5.8315C4.67499 5.765 4.75649 5.658 4.83099 5.571C4.90649 5.485 4.93099 5.423 4.98099 5.3235C5.03049 5.2245 5.00599 5.1375 4.96849 5.063C4.93099 4.989 4.63399 4.2575 4.51049 3.96C4.38949 3.6705 4.26699 3.7095 4.17599 3.705L3.89099 3.7C3.79199 3.7 3.63099 3.737 3.49499 3.886C3.35899 4.035 2.97499 4.394 2.97499 5.1255C2.97499 5.857 3.50749 6.5635 3.58149 6.6625C3.65599 6.7615 4.62899 8.2625 6.11949 8.906C6.47399 9.059 6.75098 9.1505 6.96648 9.219C7.32248 9.332 7.64648 9.316 7.90248 9.278C8.18798 9.2355 8.78148 8.9185 8.90548 8.5715C9.02948 8.224 9.02948 7.9265 8.99198 7.8645Z"
          fill="#FBF4FF"
        />
      </svg>
    ),
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
  // SC Claims
  {
    title: translations.projects.scClaims.title,
    role: translations.projects.scClaims.role,
    desciption: translations.projects.scClaims.description,
    information: [
      {
        title: translations.projects.information.title.challenge,
        description: translations.projects.information.scClaims.challenge,
      },
      {
        title: translations.projects.information.title.tools,
        description: translations.projects.information.scClaims.tools,
      },
      {
        title: translations.projects.information.title.contribution,
        description: translations.projects.information.scClaims.contribution,
      },
    ],
    sectionId: "sc-claims",
    mockup: ASSETS.ScClaimsMockup,
    mockupAlt: "SC Claims Mockup",
    mockups: [
      { image: ASSETS.ScClaimsMockup1, alt: "SC Claims Mockup 1" },
      { image: ASSETS.ScClaimsMockup2, alt: "SC Claims Mockup 2" },
      { image: ASSETS.ScClaimsMockup1, alt: "SC Claims Mockup 3" },
    ],
  },
  // yoo
  {
    title: translations.projects.yoo.title,
    role: translations.projects.yoo.role,
    desciption: translations.projects.yoo.description,
    information: [
      {
        title: translations.projects.information.title.challenge,
        description: translations.projects.information.yoo.challenge,
      },
      {
        title: translations.projects.information.title.tools,
        description: translations.projects.information.yoo.tools,
      },
      {
        title: translations.projects.information.title.contribution,
        description: translations.projects.information.yoo.constribution,
      },
    ],
    sectionId: "yoo",
    mockup: ASSETS.YooMockup,
    mockupAlt: "YOO Mockup",
    mockups: [
      { image: ASSETS.YooMockup1, alt: "YOO Mockup 1" },
      { image: ASSETS.YooMockup2, alt: "YOO Mockup 2" },
      { image: ASSETS.YooMockup3, alt: "YOO Mockup 3" },
    ],
  },
  // IQMK
  {
    title: translations.projects.iqmk.title,
    role: translations.projects.iqmk.role,
    desciption: translations.projects.iqmk.description,
    information: [
      {
        title: translations.projects.information.title.contribution,
        description: translations.projects.information.iqmk.contribution,
      },
      {
        title: translations.projects.information.title.tools,
        description: translations.projects.information.iqmk.tools,
      },

      {
        title: translations.projects.information.title.challenge,
        description: translations.projects.information.iqmk.challenge,
      },
    ],
    sectionId: "iqmk-app",
    mockup: ASSETS.IQMKMockUp,
    mockupAlt: "IQMK Mockup",
    mockups: [
      { image: ASSETS.IQMKMockUp1, alt: "IQMK Mockup 1" },
      { image: ASSETS.IQMKMockUp2, alt: "IQMK Mockup 2" },
      { image: ASSETS.IQMKMockUp3, alt: "IQMK Mockup 3" },
    ],
  },

  // Country Scapes
  {
    title: translations.projects.countryScape.title,
    role: translations.projects.countryScape.role,
    desciption: translations.projects.countryScape.description,
    information: [
      {
        title: translations.projects.information.title.contribution,
        description:
          translations.projects.information.countryScape.contribution,
      },
      {
        title: translations.projects.information.title.tools,
        description: translations.projects.information.countryScape.tools,
      },

      {
        title: translations.projects.information.title.challenge,
        description: translations.projects.information.countryScape.challenge,
      },
    ],
    sectionId: "countryscape",
    mockup: ASSETS.CountryScapeMockup,
    mockupAlt: "CountryScape Mockup",
    mockups: [
      { image: ASSETS.CountryScapeMockup1, alt: "CountryScape Mockup 1" },
      { image: ASSETS.CountryScapeMockup2, alt: "CountryScape Mockup 2" },
      { image: ASSETS.CountryScapeMockup3, alt: "CoutryScape Mockup 3" },
    ],
  },
];
