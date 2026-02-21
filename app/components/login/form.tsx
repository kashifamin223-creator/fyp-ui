"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "../Home/Nevbar";
import { useTheme } from "../ThemeContext";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
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
            Login
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
          </div>

          <div className="mb-6">
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
          </div>

          <div className="space-y-3">
            <Link 
              href="./trauma-children" 
              className={`block w-full py-3 rounded-lg font-medium transition text-center ${
                theme === 'dark' 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              Children Trauma Support
            </Link>
            
            <button
              type="submit"
              className={`w-full py-2 rounded-lg font-medium transition ${
                theme === 'dark' 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Login
            </button>
          </div>

          <p className={`text-center text-sm mt-4 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Don't have an account?{" "}
            <Link href="./signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
