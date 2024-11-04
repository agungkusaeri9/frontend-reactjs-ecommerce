import React from "react";
import {
  FaCartArrowDown,
  FaExchangeAlt,
  FaHome,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function NavbarMobile() {
  return (
    <>
      <div className="fixed md:hidden w-full bg-white border border-slate-200 bottom-0 py-3">
        <div className="flex justify-between px-10">
          <div className="">
            <Link to={"/"}>
              <div className="text-center">
                <FaHome />
              </div>
            </Link>
          </div>
          <div>
            <Link to="">
              <FaSearch />
            </Link>
          </div>
          <div>
            <Link to="">
              <FaCartArrowDown />
            </Link>
          </div>
          <div>
            <Link to="">
              <FaExchangeAlt />
            </Link>
          </div>
          <div>
            <Link to="">
              <FaUser />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarMobile;
