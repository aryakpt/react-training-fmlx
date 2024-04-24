import { useLocation } from "react-router-dom";
import { getFirstPathname } from "../../libs";

const usePath = () => {
  const { pathname } = useLocation();
  return getFirstPathname(pathname);
};

export default usePath;
