import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../authSlice";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        {
          email,
          password,
        }
      );

      if (response.data.meta.status === "success") {
        Swal.fire({
          title: "success!",
          text: response.data.meta.message,
          icon: response.data.meta.status,
        });
      }

      const accessToken = response.data.data.access_token;

      // Simpan token ke state menggunakan Redux
      dispatch(setToken(accessToken));
      navigate("/");
    } catch (error) {
      if (error.response.data.meta.code == 401) {
        Swal.fire({
          title: "error!",
          text: error.response.data.meta.message,
          icon: error.response.data.meta.status,
        });
      }
      if (error.response && error.response.data.errors) {
        // Handle validation errors from Laravel API
        setErrors(error.response.data.errors);
      } else {
        // Handle other types of errors
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <div class="bg-gray-100 flex items-center justify-center h-screen ">
      <div className="w-1/2 border border-gray-700 px-20 py-10 rounded-lg">
        <h2 className="text-2xl text-center mb-10">Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="mail@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p classemail="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p classpassword="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          <Button type="submit" className="mt-4 w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
