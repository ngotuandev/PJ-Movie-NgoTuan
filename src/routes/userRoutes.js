import { LayoutTheme } from "../HOC/layout/Layout";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";
import DetailPage from "../pages/DetailPage/DetailPage";
import PurchasePage from "../pages/PurchasePage/PurchasePage";
import AccountPage from "../pages/AccountPage/AccountPage";

export const userRoutes = [
  {
    path: "/",
    component: <LayoutTheme Component={HomePage} />,
    exact: true,
    isUseLayout: true,
  },
  {
    path: "/detail/:id",
    component: <LayoutTheme Component={DetailPage} />,
    isUseLayout: true,
  },
  {
    path: "/purchase/:id",
    component: <LayoutTheme Component={PurchasePage} />,
    isUseLayout: true,
  },
  {
    path: "/login",
    component: <LayoutTheme Component={LoginPage} />,
    isUseLayout: true,
  },
  {
    path: "/register",
    component: <LayoutTheme Component={RegisterPage} />,
    isUseLayout: true,
  },
  {
    path: "/account",
    component: <LayoutTheme Component={AccountPage} />,
    isUseLayout: true,
  },
];
