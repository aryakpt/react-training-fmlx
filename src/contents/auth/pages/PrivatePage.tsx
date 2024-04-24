import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../../common/hooks/useAuth";
import { paths } from "../../../routes/paths";
// import { sidebarItems } from "../../../common/constants";

const PrivatePage = (props: PropsWithChildren) => {
  // const location = useLocation();
  const { user } = useAuth();

  // const isMenuExist = sidebarItems.find((menu) =>
  //   location.pathname.includes(menu.path),
  // );

  if (!user) {
    return <Navigate to={paths.login} />;
  }

  // if (!isMenuExist) {
  //   return <Navigate to={paths.dashboard} />;
  // }

  return props.children;
};

export default PrivatePage;
