import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function NavbarAuth() {
  return (
    <div className="container mx-auto py-7 max-w-screen-lg bg-white">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <FaShoppingCart className="text-6xl" />
          <h3 className="text-2xl">Login</h3>
        </div>
        <div>
          <a href="#" className="text-red-800">
            Butuh Bantuan?
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavbarAuth;
