import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 import Picture from "../assets/images/picture.png";
import Logo from "../assets/images/Logo.png";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Find user with matching email and password
    const user = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (user) {
      // Store current user in local storage
      localStorage.setItem("currentUser", JSON.stringify(user));
      // Redirect to dashboard or home page
      navigate("/Home");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="py-16">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        {/* Background Image Section */}
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{ backgroundImage: `url(${Picture})` }}
        ></div>

        {/* Login Form Section */}
        <div className="w-full p-8 lg:w-1/2">
          <img src={Logo} alt="Logo" className="mx-auto h-12 mb-4" />
          <img src={Logo} alt="Logo" className="mx-auto h-12 mb-4" />
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>

          {error && (
            <div className="mt-4 p-2 bg-red-100 text-red-700 text-sm rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Input */}
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <a href="#" className="text-xs text-gray-500">
                  Forget Password?
                </a>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Login Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                Login
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <a
              href="/register"
              className="text-xs text-gray-500 uppercase"
              onClick={(e) => {
                e.preventDefault();
                navigate("/register");
              }}
            >
              or sign up
            </a>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;