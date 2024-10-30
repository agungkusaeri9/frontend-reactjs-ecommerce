import React, { useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { CgQr } from "react-icons/cg";
import { RxEyeClosed } from "react-icons/rx";
import { FaEye, FaFacebook, FaGoogle } from "react-icons/fa";

function LoginPage() {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const HandleShowPassword = (action) => {
    if (action == "hide") {
      setIsPasswordHidden(true);
    } else {
      setIsPasswordHidden(false);
    }
  };

  return (
    <AuthLayout>
      <div className="bg-gray-200 h-[740px]">
        <div className="max-w-screen-lg mx-auto ">
          <div className="bg-white w-[600px] float-right mt-10 py-10 px-8">
            <div className="items-center flex justify-between rounded-lg">
              {/* form login */}
              <div className="">
                <div className="text-2xl">Log In</div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="text-sm border border-[rgb(255, 191, 0)] bg-[rgb(254, 250, 236)] p-3">
                  Login Dengan Qr
                </div>
                <div>
                  <CgQr className="cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="my-5">
              <form action="" method="">
                <div className="mb-6">
                  <input
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-16 text-lg"
                    placeholder="No. Handphone/Username/Email"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type={isPasswordHidden ? "password" : "text"}
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-16 text-lg"
                    placeholder="Password"
                    required
                  />
                  <div className="absolute top-5 right-5 cursor-pointer">
                    {isPasswordHidden ? (
                      <RxEyeClosed onClick={() => HandleShowPassword("show")} />
                    ) : (
                      <FaEye onClick={() => HandleShowPassword("hide")} />
                    )}
                  </div>
                </div>
                <div className="mt-10">
                  <button className="bg-red-700 w-full p-5 text-lg text-white hover:bg-red-600">
                    LOG IN
                  </button>
                </div>
              </form>
              <div className="flex justify-between mt-5">
                <a href="" className="text-blue-600">
                  Lupa Password
                </a>
                <a href="" className="text-blue-600">
                  Login dengan no. Handphone
                </a>
              </div>
              <div className="flex mt-5 justify-between items-center gap-5">
                <div className="border-b-2 w-full"></div>
                <p className="text-slate-600">ATAU</p>
                <div className="border-b-2 w-full"></div>
              </div>
              <div className="flex justify-between gap-5 mt-5">
                <a
                  href=""
                  className="flex bg-white hover:bg-slate-100 items-center justify-center border p-5 w-full gap-2"
                >
                  <div>
                    <FaFacebook className="text-blue-600" />
                  </div>
                  <p>Facebook</p>
                </a>
                <a
                  href=""
                  className="flex bg-white hover:bg-slate-100 items-center justify-center border p-5 w-full gap-2"
                >
                  <div>
                    <FaGoogle className="text-red-600" />
                  </div>
                  <p>Facebook</p>
                </a>
              </div>

              <div className="text-center text-lg mt-5">
                <p>
                  Baru Di Shopee?
                  <a href="" className="text-red-500 ml-2">
                    Daftar
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default LoginPage;
