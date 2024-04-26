import { paths } from "src/routes/paths";
import { SidebarItems } from "../interfaces";

export const sidebarItems: SidebarItems[] = [
  { title: "Dashboard", path: paths.dashboard },
  { title: "Posts", path: paths.posts },
  { title: "Optimization", path: paths.optimization },
];

export const AUTH_LOCAL_NAME = "fmlx_auth";
