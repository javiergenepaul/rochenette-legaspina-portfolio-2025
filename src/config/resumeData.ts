export type ResumeCategory = "general" | "uiux" | "3d" | "systems";
export type ResumeTheme = "simple" | "modern";
export type ResumeMode = "light" | "dark";

// ---------------------------------------------------------------------------
// Personal Info
// ---------------------------------------------------------------------------
export const RESUME_PERSONAL_INFO = {
  name: "Rochenette Legaspina",
  email: "rochenettelegaspina@gmail.com",
  location: "Cebu, Philippines",
  linkedin: "linkedin.com/in/rochenette-legaspina-677a64263",
  behance: "behance.net/rochenelegaspi",
  portfolio: "rochenette-legaspina-portfolio.vercel.app/2025/en",
  titles: {
    general: "UI/UX Designer & System Analyst",
    uiux: "UI/UX Designer",
    "3d": "3D Modeller & UI/UX Designer",
    systems: "System Analyst & UI/UX Designer",
  } as Record<ResumeCategory, string>,
};

// ---------------------------------------------------------------------------
// Section config
// ---------------------------------------------------------------------------
export interface ResumeSectionConfig {
  key: string;
  label: string;
  component: string;
  order: number;
  visible: boolean;
  categories: ResumeCategory[];
  variant?: string;
  /** Modern two-column layout: which column this section belongs to */
  column: "main" | "sidebar";
}

export const RESUME_SECTIONS: ResumeSectionConfig[] = [
  {
    key: "ExperienceSection",
    label: "Work Experience",
    component: "ExperienceSection",
    order: 1,
    visible: true,
    categories: ["general", "uiux", "3d", "systems"],
    column: "main",
  },
  {
    key: "ProjectsSection",
    label: "Projects",
    component: "ProjectsSection",
    order: 2,
    visible: true,
    categories: ["general", "uiux", "3d", "systems"],
    column: "main",
  },
  {
    key: "SkillsSection",
    label: "Skills & Tools",
    component: "SkillsSection",
    order: 3,
    visible: true,
    categories: ["general", "uiux", "3d", "systems"],
    column: "sidebar",
  },
  {
    key: "EducationSection",
    label: "Education",
    component: "EducationSection",
    order: 4,
    visible: true,
    categories: ["general", "uiux", "3d", "systems"],
    column: "sidebar",
  },
  {
    key: "CertificationsSection",
    label: "Certifications",
    component: "CertificationsSection",
    order: 5,
    visible: true,
    categories: ["general", "uiux", "systems"],
    column: "sidebar",
  },
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------
export interface ResumeExperienceEntry {
  company: string;
  location: string;
  period: string;
  categories: ResumeCategory[];
  roles: Record<ResumeCategory, string>;
  bullets: {
    resume: string[];
    website: string[];
  };
}

export const RESUME_EXPERIENCE_DATA: ResumeExperienceEntry[] = [
  {
    company: "Alliance Software Inc.",
    location: "Cebu, Philippines",
    period: "2023 – Present",
    categories: ["general", "uiux", "systems"],
    roles: {
      general: "System Analyst & UI/UX Designer",
      uiux: "UI/UX Designer",
      "3d": "UI/UX Designer",
      systems: "System Analyst & UI/UX Designer",
    },
    bullets: {
      resume: [
        "Documented Functional Specifications (FSD) and captured requirements.",
        "Delivered UI/UX solutions to improve user experience and functionality.",
        "Analyzed client needs and new feature requests.",
        "Provided detailed functionality specifications to the development team.",
        "Ensured timely resolution of support ticket requests.",
      ],
      website: [
        "Documented Functional Specifications (FSD) and captured all requirements.",
        "Delivered solutions to improve user experience and functionality.",
        "Analyzed client needs and new feature requests.",
        "Provided detailed functionality to the development team.",
        "Ensured timely resolution of support ticket requests.",
      ],
    },
  },
  {
    company: "Mach95",
    location: "Cebu, Philippines",
    period: "2021 – 2023",
    categories: ["general", "uiux", "3d"],
    roles: {
      general: "UI/UX Designer",
      uiux: "UI/UX Designer",
      "3d": "UI/UX Designer",
      systems: "UI/UX Designer",
    },
    bullets: {
      resume: [
        "Designed UI/UX for e-commerce platforms, web apps, and logistics systems.",
        "Created user-friendly, visually appealing designs to enhance UX.",
        "Developed logos and branding materials aligned with company identity.",
        "Collaborated with clients to meet design needs and requirements.",
      ],
      website: [
        "Designed UI/UX for e-commerce platforms, web apps, and logistics.",
        "Created user-friendly, visually appealing designs to improve UX.",
        "Developed logos and branding materials to align with company identity.",
        "Collaborated with clients to meet design needs and requirements.",
      ],
    },
  },
  {
    company: "Exodia IT Solutions",
    location: "Cebu, Philippines",
    period: "2019 – 2021",
    categories: ["general", "3d"],
    roles: {
      general: "3D Modeller & Substance Painter",
      uiux: "3D Modeller & Substance Painter",
      "3d": "3D Modeller & Substance Painter",
      systems: "3D Modeller & Substance Painter",
    },
    bullets: {
      resume: [
        "Created 3D models for a VR platform.",
        "Applied retopology to optimize model performance.",
        "Used Substance Painter for 3D texturing to enhance visuals.",
        "Ensured timely resolution of support requests.",
      ],
      website: [
        "Created 3D models for a VR platform.",
        "Applied retopology to optimize model performance.",
        "Used Substance Painter for 3D texturing to improve visuals.",
        "Ensured timely resolution of support requests.",
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export interface ResumeProjectEntry {
  title: string;
  role: string;
  tools: string[];
  period?: string;
  categories: ResumeCategory[];
  bullets: {
    resume: string[];
    website: string[];
  };
}

export const RESUME_PROJECTS_DATA: ResumeProjectEntry[] = [
  {
    title: "SC Claims",
    role: "UI/UX Designer & System Analyst",
    tools: ["Moqups", "Figma"],
    period: "2023",
    categories: ["general", "uiux", "systems"],
    bullets: {
      resume: [
        "Served as System Analyst and UI/UX Designer.",
        "Designed workflow to replace manual discount calculation process.",
        "Performed QA testing to ensure system met requirements.",
      ],
      website: [
        "Served as System Analyst and UI/UX Designer.",
        "Designed workflow to replace manual discount calculation process.",
        "Performed QA testing to ensure system met requirements.",
      ],
    },
  },
  {
    title: "YOO",
    role: "UI/UX Designer",
    tools: ["Figma"],
    period: "2022",
    categories: ["general", "uiux"],
    bullets: {
      resume: [
        "Created system flow and wireframes from scratch.",
        "Provided high-fidelity designs for a food delivery and transport app.",
      ],
      website: [
        "Created system flow and wireframes from scratch.",
        "Provided high-fidelity designs for a food delivery + transport app.",
      ],
    },
  },
  {
    title: "IQMK",
    role: "UI/UX Designer",
    tools: ["Figma"],
    period: "2022",
    categories: ["general", "uiux"],
    bullets: {
      resume: [
        "Designed a wellness and financial goals app while maintaining brand identity.",
        "Focused on design clarity and intuitive user flow.",
      ],
      website: [
        "Designed a wellness & financial goals app maintaining brand identity.",
        "Focused on design clarity while preserving brand identity.",
      ],
    },
  },
  {
    title: "CountryScape",
    role: "UI/UX Designer",
    tools: ["Figma"],
    period: "2021",
    categories: ["general", "uiux"],
    bullets: {
      resume: [
        "Gathered requirements to align UI with user needs.",
        "Streamlined design process for intuitive hotel booking UX.",
      ],
      website: [
        "Gathered requirements to align the UI with user needs.",
        "Streamlined design process for intuitive hotel booking UX.",
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------
export interface ResumeEducationEntry {
  degree: string;
  school: string;
  period: string;
  bullets: {
    resume: string[];
    website: string[];
  };
}

export const RESUME_EDUCATION_DATA: ResumeEducationEntry[] = [
  {
    degree: "Bachelor of Science in Computer Engineering",
    school: "University of Cebu",
    period: "2016 – 2021",
    bullets: {
      resume: [
        "Graduated with a B.S. in Computer Engineering.",
        "Approved thesis on a VR platform for condos and townhouses.",
        "Contributed to a game development startup (Casa Gorordo VR Museum).",
      ],
      website: [
        "Graduated with a B.S. in Computer Engineering.",
        "Approved thesis project on a VR platform for condos and townhouses.",
        "Contributed to a game development startup project (Casa Gorordo VR Museum).",
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// Certifications
// ---------------------------------------------------------------------------
export interface ResumeCertificationEntry {
  title: string;
  org: string;
  period?: string;
  categories: ResumeCategory[];
  bullets: {
    resume: string[];
    website: string[];
  };
}

export const RESUME_CERTIFICATIONS_DATA: ResumeCertificationEntry[] = [
  {
    title: "Data Analytics Course",
    org: "CIT-U / Alliance Software Inc.",
    period: "2023",
    categories: ["general", "uiux", "systems"],
    bullets: {
      resume: [
        "Attended an 8-hour seminar focused on Data Analytics.",
        "Gained practical skills in data visualization and analysis.",
        "Collaborated on data-driven dashboards for business solutions.",
      ],
      website: [
        "Attended an 8-hour seminar at Alliance Software focused on Data Analytics.",
        "Gained practical skills in data visualization and analysis.",
        "Collaborated on creating data-driven dashboards for business solutions.",
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------
export interface ResumeSkillEntry {
  name: string;
  category: string;
  categories: ResumeCategory[];
}

export const RESUME_SKILLS_DATA: ResumeSkillEntry[] = [
  {
    name: "Figma",
    category: "UI/UX Design",
    categories: ["general", "uiux", "systems"],
  },
  {
    name: "Blender",
    category: "3D Modelling",
    categories: ["general", "3d"],
  },
  {
    name: "Photoshop",
    category: "Photo Editing",
    categories: ["general", "uiux", "3d"],
  },
  {
    name: "Adobe Illustrator",
    category: "Logo Creation",
    categories: ["general", "uiux", "3d"],
  },
  {
    name: "Microsoft Word",
    category: "Document Editing",
    categories: ["general", "systems"],
  },
  {
    name: "MS Excel",
    category: "Data Management",
    categories: ["general", "systems"],
  },
];
