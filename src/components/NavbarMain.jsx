import { Navbar } from "flowbite-react";
import IconReact from "../assets/react.svg";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaCartArrowDown,
  FaExchangeAlt,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaSearch,
  FaTags,
  FaUser,
} from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { BiCart, BiGlobe, BiInfoCircle, BiNotification } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import authService from "./../services/auth-service";

function NavbarMain() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  useEffect(() => {
    // fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const result = await authService.profile();
      setUser(result.data.data);
    } catch (error) {
      console.log(error.data);
    }
  };
  return (
    <>
      <div className="bg-red-200 pb-5 md:h-40 bg-gradient-to-b from-[#524181] to-[#6c6bc5]">
        <div className="md:flex container mx-auto md:justify-between py-2 mb-5">
          <div className="hidden md:flex gap-2">
            <div className="flex gap-2">
              <a href="" className="text-xs md:text-sm text-white font-light">
                Seller Center
              </a>
              <span className="text-xs md:text-sm text-white font-light">
                |
              </span>
            </div>
            <div className="flex gap-2">
              <a href="" className="text-xs md:text-sm text-white font-light">
                Mulai Berjualan
              </a>
              <span className="text-xs md:text-sm text-white font-light">
                |
              </span>
            </div>
            <div className="flex gap-2">
              <a href="" className="text-xs md:text-sm text-white font-light">
                Download
              </a>
              <span className="text-xs md:text-sm text-white font-light">
                |
              </span>
            </div>
            <div className="flex gap-2">
              <a
                href=""
                className="flex  items-center text-xs md:text-sm text-white font-light gap-2"
              >
                <span>Ikuti Kami di</span>
                <div className="flex gap-2">
                  <a href="">
                    <FaFacebook className=" rounded-full h-5 w-5" />
                  </a>
                  <a href="">
                    <FaInstagram className=" rounded-full h-5 w-5" />
                  </a>
                  <a href="">
                    <GiGraduateCap className=" rounded-full h-5 w-5" />
                  </a>
                </div>
              </a>
            </div>
          </div>
          <div className="hidden md:flex gap-3">
            <div className="flex gap-2 items-center">
              <IoIosNotifications className="text-white" />
              <Link className="text-sm font-light text-white">Notifikasi</Link>
            </div>
            <div className="flex gap-2 items-center">
              <BiInfoCircle className="text-white" />
              <Link className="text-sm font-light text-white">Bantuan</Link>
            </div>
            <div className="flex gap-2 items-center">
              <BiGlobe className="text-white" />
              <Link className="text-sm font-light text-white">
                Bahasa Indonesia
              </Link>
            </div>
            {user ? (
              <div className="flex gap-2 items-center">
                <Link className="text-sm font-light text-white">
                  {user.name}
                </Link>
              </div>
            ) : (
              <>
                <div className="flex gap-2">
                  <Link
                    to="/register"
                    className="text-xs md:text-sm text-white font-semibold"
                  >
                    Daftar
                  </Link>
                  <span className="text-xs md:text-sm text-white font-light">
                    |
                  </span>
                </div>
                <div className="flex gap-2">
                  <Link
                    to="/login"
                    className="text-xs md:text-sm text-white font-semibold"
                  >
                    Login
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="md:flex md:justify-between container items-center mx-auto">
          <div className="md:w-[15%] flex justify-center mb-5">
            <Link to="/" className="md:flex gap-3 md:items-center">
              <img src="/image/shop.svg" alt="" className="h-20 mx-auto" />
              <span className="text-3xl text-center font-semibold text-white">
                My Store
              </span>
            </Link>
          </div>
          <div className="hidden md:block md:w-[70%]">
            <input
              type="text"
              className="lg:w-[1000px] h-[60px] rounded-md"
              placeholder="Cari produk, merek dan toko"
            />
          </div>
          <div className="hidden md:block">
            <BiCart className="text-white h-10 w-10 cursor-pointer" />
          </div>
          <div className="md:hidden px-4">
            <div className="w-full relative">
              <input
                type="text"
                className="rounded-sm w-full"
                placeholder="Cari produk, merek dan toko"
              />
              <button
                type="submit"
                className="absolute right-3 cursor-pointer top-3"
              >
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
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
            <Link to={"/products"}>
              <FaTags />
            </Link>
          </div>
          <div>
            <Link to={"/cart"}>
              <FaCartArrowDown />
            </Link>
          </div>
          <div>
            <Link to={"/transaction"}>
              <FaExchangeAlt />
            </Link>
          </div>
          <div>
            <Link to={"/profile"}>
              <FaUser />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarMain;
