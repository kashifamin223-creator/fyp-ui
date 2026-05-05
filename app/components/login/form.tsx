"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "../Home/Nevbar";
import { useTheme } from "../ThemeContext";
import { apiService, handleApiResponse, UserSession } from "../../services/api";
import { useRouter } from "next/navigation";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { theme } = useTheme();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Clear previous errors

    const success = handleApiResponse(
      await apiService.login({ email, password }),
      (data) => {
        if (process.env.NODE_ENV === 'development') {
          console.log("Login successful:", data);
        }
        // Store user session
        UserSession.setUser(data);
        // You might get a token from the response, store it
        if (data.token) {
          UserSession.setToken(data.token);
        }
        alert("Login successful!");
        // Redirect to home or dashboard
        router.push("/home");
      },
      (error) => {
        if (process.env.NODE_ENV === 'development') {
          console.error("Login failed:", error);
        }
        
        // Handle specific error messages
        let errorMessage = "Login failed. Please try again.";
        
        if (error.includes("User Not Saved") || error.includes("Invalid credentials")) {
          errorMessage = "Invalid email or password. Please check your credentials and try again.";
        } else if (error.includes("User not found")) {
          errorMessage = "No account found with this email. Please check your email or sign up.";
        } else if (error.includes("password")) {
          errorMessage = "Incorrect password. Please try again.";
        } else if (error.includes("email")) {
          errorMessage = "Email not found. Please check your email or sign up.";
        }
        
        setError(errorMessage);
      }
    );

    setIsLoading(false);
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

          {/* Error Display */}
          {error && (
            <div className={`p-4 rounded-lg mb-6 ${
              theme === 'dark' 
                ? 'bg-red-900 text-red-200 border border-red-700' 
                : 'bg-red-100 text-red-800 border border-red-300'
            }`}>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{error}</span>
              </div>
            </div>
          )}

          <div className="space-y-3">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 rounded-lg font-medium transition ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : theme === 'dark' 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>

          <p className={`text-center text-sm mt-4 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
