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
import RequestedAssets from "../pages/EmployeePages/RequestedAssets";
import MyTeam from "../pages/EmployeePages/MyTeam";
import AssetsLists from "../pages/HR_Pages/AssetsLists";
import MyEmployee from "../pages/HR_Pages/MyEmployee";

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
      {
        path: "/requested-assets",
        element: (
          <PrivateRouter>
            <RequestedAssets></RequestedAssets>
          </PrivateRouter>
        ),
      },
      {
        path: "/my-team",
        element: (
          <PrivateRouter>
            <MyTeam></MyTeam>
          </PrivateRouter>
        ),
      },
      {
        path: "/my-list",
        element: (
          <PrivateRouter>
            <AssetsLists></AssetsLists>
          </PrivateRouter>
        ),
      },
      {
        path: "/my-employee",
        element: (
          <PrivateRouter>
            <MyEmployee></MyEmployee>
          </PrivateRouter>
        ),
      },
    ],
  },
]);
