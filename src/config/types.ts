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
}

export interface SocialLinksInterface {
  image: StaticImageData;
  url: string;
  alt: string;
}

export interface AboutMeContentInterface {
  title: string;
  subTitle: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
}
