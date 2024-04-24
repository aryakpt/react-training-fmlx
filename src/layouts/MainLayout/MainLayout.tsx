import { ReactNode } from "react";
import SidebarLayout from "../SidebarLayout/SidebarLayout";
import { sidebarItems } from "../../common/constants";
import HeaderLayout from "../HeaderLayout/HeaderLayout";

import styles from "./MainLayout.module.scss";
import useFirstPath from "../../common/hooks/useFirstPath";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;

  const firstPathname = useFirstPath();

  return (
    <div className={styles.wrapper}>
      <SidebarLayout items={sidebarItems} />
      <div className={styles.mainWrapper}>
        <HeaderLayout
          title={
            sidebarItems.find((item) => item.path.includes(firstPathname))
              ?.title ?? ""
          }
        />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
