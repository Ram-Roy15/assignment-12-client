import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import ErrorPage from "../pages/ErrorPages/ErrorPage";
import Home from "../pages/Home/Home";
import JoinEmployee from "../pages/JoinPage/JoinEmployee";
import JoinManager from "../pages/JoinPage/JoinManager";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import PrivateRouter from "./PrivateRouter";
import AddAssets from "../pages/HR_Pages/AddAssets";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/join-employees",
        element: <JoinEmployee></JoinEmployee>,
      },
      {
        path: "/join-manager",
        element: <JoinManager></JoinManager>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile></Profile>
          </PrivateRouter>
        ),
      },
      {
        path: "/add-assets",
        element: (
          <PrivateRouter>
            <AddAssets></AddAssets>
          </PrivateRouter>
        ),
      },
    ],
  },
]);
