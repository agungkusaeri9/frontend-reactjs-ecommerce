import { Navbar } from "flowbite-react";
import IconReact from "../assets/react.svg";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
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
      <div className="bg-red-200 h-40 bg-gradient-to-b from-[#524181] to-[#6c6bc5]">
        <div className="flex container mx-auto justify-between py-2 mb-5">
          <div className="flex gap-2">
            <div className="flex gap-2">
              <a href="" className="text-sm text-white font-light">
                Seller Center
              </a>
              <span className="text-sm text-white font-light">|</span>
            </div>
            <div className="flex gap-2">
              <a href="" className="text-sm text-white font-light">
                Mulai Berjualan
              </a>
              <span className="text-sm text-white font-light">|</span>
            </div>
            <div className="flex gap-2">
              <a href="" className="text-sm text-white font-light">
                Download
              </a>
              <span className="text-sm text-white font-light">|</span>
            </div>
            <div className="flex gap-2">
              <a
                href=""
                className="flex  items-center text-sm text-white font-light gap-2"
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
          <div className="flex gap-3">
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
                    className="text-sm text-white font-semibold"
                  >
                    Daftar
                  </Link>
                  <span className="text-sm text-white font-light">|</span>
                </div>
                <div className="flex gap-2">
                  <Link
                    to="/login"
                    className="text-sm text-white font-semibold"
                  >
                    Login
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-between container items-center mx-auto">
          <div className="w-[15%]">
            <Link to="/" className="flex gap-3 items-center">
              <img src="/image/shop.svg" alt="" className="h-20" />
              <span className="text-3xl font-semibold text-white">
                My Store
              </span>
            </Link>
          </div>
          <div className="w-[70%]">
            <input
              type="text"
              className="w-[1000px] h-[60px] rounded-md"
              placeholder="Cari produk, merek dan toko"
            />
          </div>
          <div>
            <BiCart className="text-white h-10 w-10" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarMain;
