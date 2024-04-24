import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../common/hooks/useAuth";
import { paths } from "../../../routes/paths";
import { sidebarItems } from "../../../common/constants";

const PrivatePage = (props: PropsWithChildren) => {
  const { user } = useAuth();

  const location = useLocation();

  const isMenuExist = sidebarItems.find(
    (menu) => location.pathname == menu.path,
  );

  if (!user) {
    return <Navigate to={paths.login} replace={true} />;
  }

  if (!isMenuExist) {
    return <Navigate to={paths.dashboard} replace={true} />;
  }

  return props.children;
};

export default PrivatePage;
