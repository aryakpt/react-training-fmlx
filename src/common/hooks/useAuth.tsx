import { AUTH_LOCAL_NAME } from "../constants";
import { UserLocalStorage } from "../interfaces";

const useAuth = (): { user: UserLocalStorage } => {
  const user = localStorage.getItem(AUTH_LOCAL_NAME);
  return { user: user ? JSON.parse(user) : undefined };
};

export default useAuth;
