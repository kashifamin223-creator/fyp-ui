"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "../Home/Nevbar";
import { useTheme } from "../ThemeContext";

interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const { theme } = useTheme();

  const validateEmail = (emailValue: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Email:", email);
      console.log("Password:", password);
      alert("Account created successfully!");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrors({});
      setSubmitted(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className={`p-8 rounded-2xl shadow-lg w-full max-w-md ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <h2 className={`text-2xl font-bold text-center mb-6 ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
          }`}>
            Sign Up
          </h2>

          <div className="mb-4">
            <label className={`block font-medium mb-2 ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring ${
                theme === 'dark' 
                  ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-blue-500' 
                  : 'border-gray-300 focus:ring-blue-400'
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className={`block font-medium mb-2 ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring ${
                theme === 'dark' 
                  ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-blue-500' 
                  : 'border-gray-300 focus:ring-blue-400'
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="mb-6">
            <label className={`block font-medium mb-2 ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Confirm Password
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring ${
                theme === 'dark' 
                  ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-blue-500' 
                  : 'border-gray-300 focus:ring-blue-400'
              }`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded-lg font-medium transition ${
              theme === 'dark' 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {submitted ? "Creating Account..." : "Create Account"}
          </button>

          <p className={`text-center text-sm mt-4 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Already have an account?{" "}
            <Link href="./" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
