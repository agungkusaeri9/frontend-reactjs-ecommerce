import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductIndex from "../pages/Product/ProductIndex";
import ProductShow from "../pages/Product/ProductShow";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import PrivateRoute from "../PrivateRoute";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

function RoutesIndex() {
  return (
    <Routes>
      <Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductIndex />} />
        <Route path="/product/:slug" element={<ProductShow />} />
      </Route>
    </Routes>
  );
}
export default RoutesIndex;
