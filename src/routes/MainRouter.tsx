import { Routes, Route } from "react-router-dom";
import Login from "../contents/Login";
import Dashboard from "../contents/Dashboard";
import Posts from "../contents/Posts";
import MainLayout from "../layouts/MainLayout/MainLayout";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />
      <Route
        path="/posts"
        element={
          <MainLayout>
            <Posts />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default MainRouter;
