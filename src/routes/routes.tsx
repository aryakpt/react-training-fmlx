/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react";
import { Outlet, Route, createRoutesFromElements } from "react-router-dom";
import Login from "../contents/auth/pages/Login";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { paths } from "./paths";
import PrivatePage from "../contents/auth/pages/PrivatePage";
import Dashboard from "src/contents/Dashboard";
import PostList from "src/contents/posts/pages/List";
import Optimization from "src/contents/optimization/pages";

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
        element={<PostList />}
        errorElement={<ErrorElement />}
      />
      <Route
        path={paths.optimization}
        element={<Optimization />}
        errorElement={<ErrorElement />}
      />
      <Route path="*" element={<Reload />} />
    </Route>
  </>,
);
