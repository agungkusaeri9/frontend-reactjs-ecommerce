import React from "react";
import NavbarAuth from "../components/NavbarAuth";
import Footer from "../components/Footer";

function AuthLayout({ children }) {
  return (
    <>
      <NavbarAuth />
      {children}
      <Footer />
    </>
  );
}

export default AuthLayout;
