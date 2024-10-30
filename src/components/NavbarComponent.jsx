import { Navbar } from "flowbite-react";
import IconReact from "../assets/react.svg";
import React from "react";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src={IconReact}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="/">
          <Navbar.Link>Home</Navbar.Link>
        </Link>
        <Link to="/product">
          <Navbar.Link>Product</Navbar.Link>
        </Link>
        <Link to="/login">
          <Navbar.Link>Login</Navbar.Link>
        </Link>
        <Link to="/register">
          <Navbar.Link>Register</Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
