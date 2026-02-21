"use client";

import Logo from "./Logo";
import NavItem from "./NavItem";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../ThemeContext";

const dropdownData = {
  student: [
    { label: "Intern", href: "/student/intern" },
    { label: "Graduate / Bachelor's", href: "/student/graduate" },
    // { label: "Postgraduate", href: "/student/postgraduate" },
  ],
  children: [
    { label: "Trauma Support", href: "/trauma-children" },
    { label: "Harassment Support", href: "/harassment" },
    { label: "Child Abuse Support", href: "/child-abuse" },
  ],
  professionals: [
    { label: "Old Age", href: "/professionals/old-age" },
    { label: "Employed", href: "/professionals/employed" },
    { label: "Unemployed", href: "/student/unemployed" },
    { label: "Parents", href: "/professionals/parents" },
  ],
};

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<"student" | "children" | "professionals" | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (type: "student" | "children" | "professionals") => {
    setOpenDropdown((prev) => (prev === type ? null : type));
  };

  const renderDropdown = (type: "student" | "children" | "professionals") => {
    return (
      <div className={`absolute top-10 left-0 shadow-md rounded-lg py-2 w-56 z-50 border ${
        theme === 'dark' 
          ? 'bg-gray-800 text-gray-200 border-gray-700' 
          : 'bg-white text-[#065F46] border-[#D1FAE5]'
      }`}>
       {dropdownData[type]?.map((link) =>
  link ? (
    <Link
      key={link.href}
      href={link.href}
      className={`block px-4 py-2 rounded ${
        theme === 'dark' 
          ? 'hover:bg-gray-700' 
          : 'hover:bg-[#D1FAE5]'
      }`}
    >
      {link.label}
    </Link>
  ) : null
)}
      </div>
    );
  };

  return (
    <nav ref={navRef} className={`w-full shadow-md py-4 px-8 flex justify-between items-center relative font-sans ${
      theme === 'dark' 
        ? 'bg-gray-900 text-gray-200' 
        : 'bg-[#E6F7F1] text-[#065F46]'
    }`}>
      {/* LEFT: LOGO */}
      <Logo />

      {/* RIGHT MENU */}
      <div className="flex space-x-6 items-center">
        {/* STUDENT */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("student")}
            className={`font-medium transition-colors rounded-md px-2 py-1 ${
              theme === 'dark' 
                ? 'hover:text-gray-300' 
                : 'hover:text-[#10B981]'
            }`}
          >
            Student ▾
          </button>
          {openDropdown === "student" && renderDropdown("student")}
        </div>

        {/* CHILDREN */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("children")}
            className={`font-medium transition-colors rounded-md px-2 py-1 ${
              theme === 'dark' 
                ? 'hover:text-gray-300' 
                : 'hover:text-[#10B981]'
            }`}
          >
            Children ▾
          </button>
          {openDropdown === "children" && renderDropdown("children")}
        </div>

        {/* PROFESSIONALS */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("professionals")}
            className={`font-medium transition-colors rounded-md px-2 py-1 ${
              theme === 'dark' 
                ? 'hover:text-gray-300' 
                : 'hover:text-[#10B981]'
            }`}
          >
            Professionals ▾
          </button>
          {openDropdown === "professionals" && renderDropdown("professionals")}
        </div>

        {/* OTHER LINKS */}
        <NavItem label="About" href="/about" />
        <NavItem label="References" href="/references" />

        {/* THEME TOGGLE */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-lg transition-colors ${
            theme === 'dark' 
              ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
