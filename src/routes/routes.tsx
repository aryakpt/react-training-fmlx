import { lazy, useEffect } from "react";
import { Outlet, Route, createRoutesFromElements } from "react-router-dom";
import Login from "../contents/auth/pages/Login";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { paths } from "./paths";
import PrivatePage from "../contents/auth/pages/PrivatePage";

const Dashboard = lazy(() => import("../contents/Dashboard"));
const Posts = lazy(() => import("../contents/Posts"));

const ErrorElement = () => <div>Something Wrong Happened!s</div>;

const Reload = () => {
  useEffect(() => {
    window.location.reload();
  }, []);
  return null;
};

export const routes = createRoutesFromElements(
  <>
    <Route path={paths.login} element={<Login />} />
    <Route
      element={
        <PrivatePage>
          <MainLayout>
            <Outlet />
          </MainLayout>
        </PrivatePage>
      }
    >
      <Route
        path={paths.dashboard}
        element={<Dashboard />}
        errorElement={<ErrorElement />}
      />
      <Route
        path={paths.posts}
        element={<Posts />}
        errorElement={<ErrorElement />}
      />
      <Route path="*" element={<Reload />} />
    </Route>
  </>,
);
