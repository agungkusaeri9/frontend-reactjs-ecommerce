import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductIndex from "../pages/Product/ProductIndex";
import ProductShow from "../pages/Product/ProductShow";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import HomePage from "../pages/HomePage";

function RoutesIndex() {
  return (
    <Routes>
      <Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductIndex />} />
        <Route path="/product/:slug" element={<ProductShow />} />
      </Route>
    </Routes>
  );
}
export default RoutesIndex;
