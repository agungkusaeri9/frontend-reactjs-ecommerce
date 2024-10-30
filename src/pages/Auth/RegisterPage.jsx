import axios from "axios";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    setLoading(true);

    if (password !== passwordConfirmation) {
      setErrors({
        passwordConfirmation: "Password dont match",
      });
      setLoading(false);

      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/register",
        {
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
        }
      );
      if (response.data.meta.status === "success") {
        Swal.fire({
          title: "success!",
          text: response.data.meta.message,
          icon: response.data.meta.status,
        });

        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.data.errors) {
        // Handle validation errors from Laravel API
        setErrors(error.response.data.errors);
      } else {
        // Handle other types of errors
        console.error("An unexpected error occurred:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen ">
      <div className="w-1/2 border border-gray-700 px-20 py-10 rounded-lg">
        <h2 className="text-2xl text-center mb-10">Register Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
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
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password Confirmation"
                value="password Confirmation"
              />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="*********"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            {errors.password_confirmation && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password_confirmation}
              </p>
            )}
          </div>
          <Button type="submit" className="mt-4 w-full">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
