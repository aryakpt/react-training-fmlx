import { ReactNode, useEffect } from "react";
import SidebarLayout from "../SidebarLayout/SidebarLayout";
import { sidebarItems } from "../../common/constants";
import HeaderLayout from "../HeaderLayout/HeaderLayout";

import styles from "./MainLayout.module.scss";
import useFirstPath from "../../common/hooks/useFirstPath";
import useAuth from "src/common/hooks/useAuth";
import { useDispatch } from "react-redux";
import { authActions } from "src/contents/auth/store";
import { userDummies } from "src/contents/auth/constants";
import { useSelector } from "react-redux";
import { AppState } from "src/common/store/store";
import { LoadingState } from "src/common/store/loadingReducer";
import { LoadingModal } from "src/components";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  const dispatch = useDispatch();

  const firstPathname = useFirstPath();
  const currUser = useAuth();

  const { isLoading } = useSelector<AppState, LoadingState>(
    (state) => state.loadingReducer,
  );

  // handle when the page refreshed
  useEffect(() => {
    const user = userDummies.find(
      (user) => user.username === currUser.user.username,
    )!;
    if (currUser) dispatch(authActions.setCurrentUser(user));
  }, [currUser, dispatch]);

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
        <main>
          <LoadingModal isOpen={isLoading} />
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
