import React from "react";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import NavbarMobile from "../components/NavbarMobile";

function MainLayout({ children }) {
  return (
    <div className="bg-gray-100 relative">
      <NavbarMobile />
      <NavbarMain />
      <div className="container mx-auto py-10">{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
