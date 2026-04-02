export interface PathInterface {
  [key: string]: {
    name: string;
    getPath: (year: string, locale: string) => string;
  };
}

export const PATH: PathInterface = {
  HOME: {
    name: "Home",
    getPath: (year: string, locale: string) => `/${year}/${locale}`,
  },
  ABOUT: {
    name: "About",
    getPath: (year: string, locale: string) => `/${year}/${locale}/about`,
  },
  PROJECT: {
    name: "Project",
    getPath: (year: string, locale: string) => `/${year}/${locale}/projects`,
  },
  CONTACT: {
    name: "Contact Me",
    getPath: (year: string, locale: string) => `/${year}/${locale}/contact`,
  },
};
