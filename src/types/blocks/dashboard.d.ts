import { Brand, Nav } from "./base";

export interface Dashboard {
  sidebar?: Sidebar;
}

export interface Sidebar {
  brand?: Brand;
  main_nav?: Nav;
  bottom_nav?: Nav;
  user_nav?: Nav;
  variant?: "inset" | "sidebar" | "floating";
}
