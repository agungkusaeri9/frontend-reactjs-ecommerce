import { CgQr } from "react-icons/cg";
import AuthLayout from "../../layouts/AuthLayout";
import { FaCheck, FaEye, FaFacebook, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { RxEyeClosed } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import axios from "axios";
import { Alert, Toast } from "flowbite-react";
import authService from "./../../services/auth-service";

function RegisterPage() {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isPasswordHiddenConfirm, setIsPasswordHiddenConfirm] = useState(true);
  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmation_password: "",
  });

  const navigate = useNavigate();

  const HandleShowPassword = (action) => {
    if (action == "hide") {
      setIsPasswordHidden(true);
    } else {
      setIsPasswordHidden(false);
    }
  };

  const HandleShowPasswordConfirm = (action) => {
    if (action == "hide") {
      setIsPasswordHiddenConfirm(true);
    } else {
      setIsPasswordHiddenConfirm(false);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const payload = {
        name: form.name,
        email: form.email,
        password: form.password,
        password_confirmation: form.password_confirmation,
      };

      // const response = await axios.post(
      //   `${import.meta.env.VITE_API_URL}/api/auth/register`,
      //   payload
      // );

      // if (response.status == 201) {
      //   // munculkan toast react flowbit
      //   setShowToast(true);
      //   setTimeout(() => {
      //     navigate("/login");
      //   }, 1000);
      // }

      const result = await authService.register(payload);
      if (result.data.data) {
        // munculkan toast react flowbit
        setShowToast(true);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    } finally {
      setIsSubmitting(false);
    }
    // console.log("ok");
  };

  return (
    <AuthLayout>
      {showToast && (
        <Toast className="fixed top-4 right-4">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500">
            <FaCheck className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">
            Registration successful!
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex h-8 w-8"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>×
          </button>
        </Toast>
      )}
      <div className="bg-gray-200">
        <div className="max-w-screen-lg mx-auto py-10 flex justify-end">
          <div className="bg-white w-[600px] py-10 px-8 mx-5">
            <div className="items-center flex justify-between rounded-lg">
              {/* form login */}
              <div className="">
                <div className="text-2xl">Register</div>
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
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-16 text-lg"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name[0]}
                    </p> // Tampilkan error untuk name
                  )}
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-16 text-lg"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email[0]}
                    </p> // Tampilkan error untuk name
                  )}
                </div>
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type={isPasswordHidden ? "password" : "text"}
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-16 text-lg"
                      placeholder="Password"
                      value={form.password}
                      onChange={handleChange}
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
                <div>
                  <div className="relative">
                    <input
                      type={isPasswordHiddenConfirm ? "password" : "text"}
                      id="password_confirmation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-16 text-lg"
                      placeholder="Password Confirmation"
                      value={form.password_confirmation}
                      name="password_confirmation"
                      onChange={handleChange}
                    />
                    <div className="absolute top-5 right-5 cursor-pointer">
                      {isPasswordHiddenConfirm ? (
                        <RxEyeClosed
                          onClick={() => HandleShowPasswordConfirm("show")}
                        />
                      ) : (
                        <FaEye
                          onClick={() => HandleShowPasswordConfirm("hide")}
                        />
                      )}
                    </div>

                    {errors.password && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.password[0]}
                      </p> // Tampilkan error untuk name
                    )}
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    disabled={isSubmitting} // Nonaktifkan tombol jika `isSubmitting` true
                    className={`w-full p-5 text-lg text-white ${
                      isSubmitting
                        ? "bg-red-400 cursor-not-allowed"
                        : "bg-red-700 hover:bg-red-600"
                    }`}
                  >
                    {isSubmitting ? "Loading..." : "REGISTER"}
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
                  Sudah punya akun?
                  <Link to="/login" className="text-red-500 ml-2">
                    Log In
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

export default RegisterPage;
