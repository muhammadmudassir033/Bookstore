import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 import Picture from "../assets/images/Picture.png";
import Logo from "../assets/images/Logo.png";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match"); 
      return;
    }

    // Get existing users from local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    
    // Check if email already exists
    if (existingUsers.some(user => user.email === formData.email)) {
      setError("Email already registered");
      return;
    }

    // Add new user
    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="py-12">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        {/* Background Image Section */}
         <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{ backgroundImage: `url(${Picture})` }}
        ></div>  
      

        {/* Registration Form Section */}
        <div className="w-full p-8 lg:w-1/2">
          <img src={Logo} alt="Logo" className="mx-auto h-12 mb-4" />
          <p className="text-xl text-gray-600 text-center">Create your account!</p>

          {error && (
            <div className="mt-4 p-2 bg-red-100 text-red-700 text-sm rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

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
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
              />
            </div>

            {/* Confirm Password Input */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength="6"
              />
            </div>

            {/* Register Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                Register
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <a 
              href="/login" 
              className="text-xs text-gray-500 uppercase"
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
            >
              or login
            </a>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;