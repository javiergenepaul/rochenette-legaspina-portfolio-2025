export interface PathInterface {
  [key: string]: {
    name: string;
    path: string;
  };
}

export const PATH: PathInterface = {
  HOME: {
    name: "Home",
    path: "/",
  },
  ABOUT: {
    name: "About",
    path: "/about",
  },
  PROJECT: {
    name: "Project",
    path: "/project",
  },
  CONTACT: {
    name: "Contact",
    path: "/contact",
  },
};
