import clsx from "clsx";
import { SidebarItems } from "../../interfaces";
import styles from "./SidebarLayout.module.scss";
import { Link } from "react-router-dom";
import useFirstPath from "../../hooks/useFirstPath";
import { getFirstPathname } from "../../libs";

import FormulatrixLogo from "../../assets/images/logo.webp";

interface SidebarLayoutProps {
  items: SidebarItems[];
  classname?: string;
}
const SidebarLayout = (props: SidebarLayoutProps) => {
  const { items, classname } = props;
  const firstPathname = useFirstPath();

  return (
    <nav className={clsx(classname, styles.sidebar)}>
      <img
        className={styles.sidebarLogo}
        src={FormulatrixLogo}
        alt="logo formulatrix"
      />
      {items.map((route) => {
        return (
          <Link
            to={route.path}
            key={`sidebar-item-${route.path}`}
            className={clsx(styles.sidebarItem, {
              [styles.active]: firstPathname === getFirstPathname(route.path),
            })}
          >
            {route.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default SidebarLayout;
