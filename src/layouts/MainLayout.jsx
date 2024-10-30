import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import { Footer } from "flowbite-react";

function MainLayout({ children }) {
  return (
    <div>
      <NavbarComponent />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
