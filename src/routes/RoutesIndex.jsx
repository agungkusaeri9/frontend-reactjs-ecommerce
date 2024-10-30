import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductIndex from "../pages/Product/ProductIndex";
import ProductShow from "../pages/Product/ProductShow";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import PrivateRoute from "../PrivateRoute";

function RoutesIndex() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/product" element={<ProductIndex />} />
      <Route path="/product/:slug" element={<ProductShow />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
export default RoutesIndex;
