export interface PathInterface {
  [key: string]: {
    name: string;
    getPath: (locale: string) => string;
  };
}

export const PATH: PathInterface = {
  HOME: {
    name: "Home",
    getPath: (locale: string) => `/${locale}`,
  },
  ABOUT: {
    name: "About",
    getPath: (locale: string) => `/${locale}/about`,
  },
  PROJECT: {
    name: "Project",
    getPath: (locale: string) => `/${locale}/projects`,
  },
  CONTACT: {
    name: "Contact",
    getPath: (locale: string) => `/${locale}/contact`,
  },
};
