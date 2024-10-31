import React from "react";
function NavbarAuth(...props) {
  const title = props.title;
  return (
    <div className="container mx-auto py-7 max-w-screen-lg bg-white px-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img src="/image/cart.svg" className="h-16" alt="" />
          <h3 className="text-2xl">{title}</h3>
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
