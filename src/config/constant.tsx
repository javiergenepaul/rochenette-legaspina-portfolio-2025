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
  // Country Scapes
  {
    title: "Country Scapes",
    role: "UI/UX Designer",
    desciption:
      "The SC Claims App is a desktop-based solution that automates the validation and computation of senior citizen discounts on products sold to eligible customers. By streamlining this process, the app helps ensure accuracy and efficiency, reducing the time and effort previously required for manual computations.The new solution consolidates multiple files into a single, easy-to-manage system, improving both efficiency and accuracy, while ensuring timely reimbursements for senior citizen discounts.",
    information: [
      {
        title: "Contributions",
        description:
          "As the UI/UX Designer, I was responsible for gathering the requirements and specifications to ensure the platform's user interface aligned with the target user needs. I worked closely with stakeholders to identify key user pain points and organized the design process for a smooth user journey. Additionally, I ensured that the interface was intuitive and aesthetically pleasing while facilitating easy navigation.",
      },
      {
        title: "Tools",
        description:
          "For this project, I utilized Figma to design the user interface and create wireframes that captured the seamless experience for the users",
      },

      {
        title: "Challenge",
        description:
          "Many online booking websites can be difficult to navigate and often provide limited information on hotels, which can frustrate users. Additionally, the overwhelming amount of options and the cluttered design on some platforms can make the booking process feel cumbersome. Users often struggle to find detailed, relevant information when making decisions about their stays.",
      },
      {
        title: "Solution",
        description:
          "To tackle these challenges, I focused on creating a clean and user-friendly interface that highlighted key hotel details in an easily digestible format. By simplifying the booking process and ensuring clear, concise information about each property, users could make decisions with confidence. A robust filtering system was introduced to allow users to quickly find accommodations that best matched their preferences. I also incorporated visually striking imagery and engaging content to enhance the user’s experience. Ultimately, the new design empowered users to make informed decisions quickly and efficiently, improving overall satisfaction.",
      },
    ],
    sectionId: "sc-claims",
  },
  // Transport service and Food Delivery App
  {
    title: "Transport service and Food Delivery App",
    role: "UI/UX Designer",
    desciption:
      "The SC Claims App is a desktop-based solution that automates the validation and computation of senior citizen discounts on products sold to eligible customers. By streamlining this process, the app helps ensure accuracy and efficiency, reducing the time and effort previously required for manual computations.The new solution consolidates multiple files into a single, easy-to-manage system, improving both efficiency and accuracy, while ensuring timely reimbursements for senior citizen discounts.",
    information: [
      {
        title: "Contribution",
        description:
          "As the UI/UX Designer, I was responsible for gathering project specifications and understanding user requirements to ensure the app was intuitive and user-friendly. I collaborated with stakeholders to refine the design, focusing on ease of use and efficient navigation for both food delivery and transportation services. Additionally, I created wireframes and prototypes to communicate the design vision and supported the development team in implementing the app’s features.",
      },
      {
        title: "Tools",
        description:
          "For this project, I used Figma to create wireframes, design prototypes, and refine the user interface for both food delivery and transportation services.",
      },
      {
        title: "Challange",
        description:
          "Many online booking websites can be difficult to navigate and often provide limited information on hotels, which can frustrate users. Additionally, the overwhelming amount of options and the cluttered design on some platforms can make the booking process feel cumbersome. Users often struggle to find detailed, relevant information when making decisions about their stays.",
      },
      {
        title: "Solution",
        description:
          "To overcome these challenges, I focused on simplifying the app’s design and creating a user-friendly experience for both food delivery and transportation services. I introduced clear, easily navigable sections for each service, reducing clutter and improving access to information. Real-time tracking was integrated, providing users with live updates about their food delivery or transportation status. The interface was optimized for mobile devices, ensuring that users could quickly view and select their options without feeling overwhelmed. By consolidating food delivery and transportation services under a unified platform, the app offers a seamless experience that saves time and improves satisfaction.",
      },
    ],
    sectionId: "food-delivery-app",
  },
  // IQMK
  {
    title: "IQMK",
    role: "UI/UX Designer",
    desciption:
      "The website offers a curated collection of premium herbal medicines, exclusively available through the platform. With a focus on holistic health, each product is thoughtfully selected to enhance well-being and support a balanced lifestyle. Users can discover a wide range of natural remedies, supplements, and wellness tools, ensuring they have access to high-quality, plant-based resources for optimal health.",
    information: [
      {
        title: "Contributions",
        description:
          "As the UI/UX Designer, I worked with stakeholders to gather user needs and simplify the design process. My goal was to create a clean, user-friendly interface with easy navigation for a smooth overall experience.",
      },
      {
        title: "Tools",
        description:
          "Utilized Figma for wireframing, prototyping, and designing the interface.",
      },
      {
        title: "Challange",
        description:
          "Ensured design clarity while preserving brand consistency and maintaining a cohesive color scheme across the platform.",
      },
    ],
    sectionId: "iqmk-app",
  },
  // Logistic
  {
    title: "Logistic",
    role: "UI/UX Designer",
    desciption:
      "Logistics Solutions offer businesses and customers a streamlined way to manage the transportation of goods and resources. The platform is designed to optimize delivery efficiency, simplifying the complex tasks associated with coordinating shipments and managing inventory. With secure tracking systems, users can ensure that their deliveries are safe, on-time, and well-monitored. The platform eliminates time-consuming manual processes, making logistics management seamless and more efficient. Ultimately, it enhances operational efficiency and helps businesses save both time and resources.. Users can discover a wide range of natural remedies, supplements, and wellness tools, ensuring they have access to high-quality, plant-based resources for optimal health.",
    information: [
      {
        title: "Contribution",
        description:
          "As the UI/UX Designer, I gathered project requirements and analyzed user needs to create an intuitive, efficient design. I focused on ensuring the interface met the needs of logistics professionals, prioritizing simplicity and easy navigation. I also designed wireframes and prototypes in Figma, delivering a practical and visually engaging solution for complex logistics tasks.",
      },
      {
        title: "Tools",
        description:
          "For this project, I used Figma to design wireframes, develop interactive prototypes, and optimize the user interface, ensuring an intuitive experience for logistics management.",
      },
      {
        title: "Challange",
        description:
          "To address these challenges, I designed a clean, intuitive interface that makes real-time shipment tracking and monitoring easy for users. I integrated all logistics systems—inventory management, shipment coordination, and order processing—into a seamless platform that eliminates confusion and reduces the risk of delays. The interface was optimized to display large amounts of data in a clear, digestible format, making complex logistics operations more manageable. Advanced tracking and security features were incorporated, ensuring users could monitor the safety and status of their shipments at all times. By consolidating these features in one platform, I provided a more streamlined, efficient experience for users managing multiple shipments and schedules.To address these challenges, I designed a clean, intuitive interface that makes real-time shipment tracking and monitoring easy for users. I integrated all logistics systems—inventory management, shipment coordination, and order processing—into a seamless platform that eliminates confusion and reduces the risk of delays. The interface was optimized to display large amounts of data in a clear, digestible format, making complex logistics operations more manageable. Advanced tracking and security features were incorporated, ensuring users could monitor the safety and status of their shipments at all times. By consolidating these features in one platform, I provided a more streamlined, efficient experience for users managing multiple shipments and schedules.",
      },
    ],
    sectionId: "logistic",
  },
  // SC Claims
  {
    title: "SC Claims",
    role: "UI/UX Designer/ Systems Analyst",
    desciption:
      "The SC Claims App is a desktop-based solution that automates the validation and computation of senior citizen discounts on products sold to eligible customers. By streamlining this process, the app helps ensure accuracy and efficiency, reducing the time and effort previously required for manual computations.The new solution consolidates multiple files into a single, easy-to-manage system, improving both efficiency and accuracy, while ensuring timely reimbursements for senior citizen discounts.",
    information: [
      {
        title: "Contribution",
        description:
          "As a System Analyst and UI/UX Designer, I played a key role in gathering requirements, organizing client meetings, and documenting the project through Functional Specification Documents (FSD). I worked closely with the development team to ensure clear communication and understanding of the project goals, while also contributing to QA testing to ensure a smooth and error-free implementation.",
      },
      {
        title: "Tools",
        description:
          "For the design and documentation of the project, I utilized tools such as mock-ups, Microsoft Excel, and Word for specifications, data organization, and documentation.",
      },
      {
        title: "Challange",
        description:
          "One of the biggest challenges was the previous manual process, which involved lengthy validation and often resulted in errors due to human oversight and the management of multiple files. By transitioning to an automated system, we aimed to eliminate these issues, significantly reducing the time needed for processing and improving accuracy across the board.",
      },
    ],
    sectionId: "sc-claims",
  },
];
