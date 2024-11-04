import { Navbar } from "flowbite-react";
import IconReact from "../assets/react.svg";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaSearch } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { BiCart, BiGlobe, BiInfoCircle, BiNotification } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";

function NavbarMain() {
  const token = localStorage.getItem("access_token");

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
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
            {token ? (
              <div className="flex gap-2 items-center">
                <Link className="text-sm font-light text-white">Username</Link>
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
            <BiCart className="text-white h-10 w-10" />
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
    </>
  );
}

export default NavbarMain;
