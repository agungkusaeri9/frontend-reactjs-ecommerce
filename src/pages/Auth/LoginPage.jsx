import React, { useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { CgQr } from "react-icons/cg";
import { RxEyeClosed } from "react-icons/rx";
import { FaEye, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.id]: e.target.value,
    }));
  };

  const HandleShowPassword = (action) => {
    if (action == "hide") {
      setIsPasswordHidden(true);
    } else {
      setIsPasswordHidden(false);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    try {
      const payload = {
        email: form.email,
        password: form.password,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        payload
      );
      if (response.status == 200) {
        const access_token = response.data.data.access_token;
        localStorage.setItem("access_token", access_token);
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
      if (error.response.status == 401) {
        setErrorMessage(error.response.data.meta.message);
      }
    } finally {
      setIsSubmitting(false);
      // setErrorMessage("");
    }
  };

  return (
    <AuthLayout title="Log In">
      <div className="bg-gray-200 py-10">
        <div className="max-w-screen-lg mx-auto py-10 flex justify-end">
          <div className="bg-white w-[600px] py-10 px-8 mx-5">
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
              {errorMessage && (
                <div className="bg-red-500 my-5 p-10 border rounded-md text-white py-10">
                  {errorMessage}
                </div>
              )}
              <form action="" method="" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <input
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-16 text-lg"
                    placeholder="Email"
                    onChange={handleChange}
                    value={form.email}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email[0]}
                    </p> // Tampilkan error untuk name
                  )}
                </div>
                <div>
                  <div className="relative">
                    <input
                      type={isPasswordHidden ? "password" : "text"}
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-16 text-lg"
                      placeholder="Password"
                      onChange={handleChange}
                      value={form.password}
                    />
                    <div className="absolute top-5 right-5 cursor-pointer">
                      {isPasswordHidden ? (
                        <RxEyeClosed
                          onClick={() => HandleShowPassword("show")}
                        />
                      ) : (
                        <FaEye onClick={() => HandleShowPassword("hide")} />
                      )}
                    </div>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.password[0]}
                    </p> // Tampilkan error untuk name
                  )}
                </div>
                <div className="mt-10">
                  <button
                    className={`bg-red-700 w-full p-5 text-lg text-white hover:bg-red-600 ${
                      isSubmitting
                        ? "bg-red-400 cursor-not-allowed"
                        : "bg-red-700 hover:bg-red-600"
                    }`}
                  >
                    {isSubmitting ? "Loading..." : " LOG IN"}
                  </button>
                </div>
              </form>
              <div className="flex justify-between mt-5">
                <Link to="javascript:void(0)" className="text-blue-600">
                  Lupa Password
                </Link>
                <Link to="javascript:void(0)" className="text-blue-600">
                  Login dengan no. Handphone
                </Link>
              </div>
              <div className="flex mt-5 justify-between items-center gap-5">
                <div className="border-b-2 w-full"></div>
                <p className="text-slate-600">ATAU</p>
                <div className="border-b-2 w-full"></div>
              </div>
              <div className="flex justify-between gap-5 mt-5">
                <Link
                  to="javascript:void(0)"
                  className="flex bg-white hover:bg-slate-100 items-center justify-center border p-5 w-full gap-2"
                >
                  <div>
                    <FaFacebook className="text-blue-600" />
                  </div>
                  <p>Facebook</p>
                </Link>
                <Link
                  to="javascript:void(0)"
                  className="flex bg-white hover:bg-slate-100 items-center justify-center border p-5 w-full gap-2"
                >
                  <div>
                    <FaGoogle className="text-red-600" />
                  </div>
                  <p>Facebook</p>
                </Link>
              </div>

              <div className="text-center text-lg mt-5">
                <p>
                  Baru Di Shopee?
                  <Link to="/register" className="text-red-500 ml-2">
                    Daftar
                  </Link>
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
