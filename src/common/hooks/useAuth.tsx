import { useEffect, useState } from "react";

interface UserLocalStorage {
  username: string;
  name: string;
}

const AUTH_LOCAL_NAME = "fmlx_auth";

const useAuth = () => {
  const [user, setUser] = useState<UserLocalStorage | undefined>(undefined);

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem(AUTH_LOCAL_NAME);
    if (user) setUser(JSON.parse(user));
    return setUser(undefined);
  };

  useEffect(() => {
    getUserFromLocalStorage();
  }, []);

  return { user };
};

export default useAuth;
