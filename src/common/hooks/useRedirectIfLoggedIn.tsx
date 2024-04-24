import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { paths } from "src/routes/paths";
import { useEffect } from "react";

export function useRedirectIfLoggedIn(destination?: string) {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate(destination || paths.dashboard, { replace: true });
  }, []);
}
