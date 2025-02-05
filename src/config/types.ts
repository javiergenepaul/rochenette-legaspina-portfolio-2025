import { StaticImageData } from "next/image";

export interface NavLinksInterface {
  label: string;
  to: string;
}

export interface SkillsAndToolsInterface {
  image: StaticImageData;
  title: string;
  url: string;
  alt: string;
  name: string;
  designation: string;
}

export interface SocialLinksInterface {
  name: string;
  image: StaticImageData;
  url: string;
  alt: string;
}

export interface AboutMeContentInterface {
  title: string;
  subTitle: string;
  description: string[];
  image: StaticImageData;
  imageAlt: string;
  backgroundColor?: string;
  url?: string;
}

export interface InfoInterface {
  title: string;
  description: string;
}

export interface ProjectInterface {
  title: string;
  role: string;
  desciption: string;
  information: InfoInterface[];
  sectionId: string;
}
