export interface NavLink {
  name: string;
  link: string;
}

export const navLinks: NavLink[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Recipes",
    link: "/recipes",
  },
  {
    name: "Recipe Builder",
    link: "/recipe-builder",
  },
];
