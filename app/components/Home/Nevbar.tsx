"use client";

import Logo from "./Logo";
import NavItem from "./NavItem";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const dropdownData = {
  student: [
    { label: "Intern", href: "/student/intern" },
    { label: "Graduate / Bachelor's", href: "/student/graduate" },
    
    ,
  ],
  children: [
    { label: "Trauma", href: "/children/trauma" },
    { label: "Harassment", href: "/children/harassment" },
    { label: "Child abuse", href: "/children/abuse" },
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
      <div className="absolute top-10 left-0 bg-white text-[#065F46] shadow-md rounded-lg py-2 w-56 z-50 border border-[#D1FAE5]">
       {dropdownData[type]?.map((link) =>
  link ? (
    <Link
      key={link.href}
      href={link.href}
      className="block px-4 py-2 hover:bg-[#D1FAE5] rounded"
    >
      {link.label}
    </Link>
  ) : null
)}
      </div>
    );
  };

  return (
    <nav ref={navRef} className="w-full shadow-md py-4 px-8 bg-[#E6F7F1] flex justify-between items-center relative font-sans">
      {/* LEFT: LOGO */}
      <Logo />

      {/* RIGHT MENU */}
      <div className="flex space-x-6 items-center text-[#065F46]">
        {/* STUDENT */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("student")}
            className="font-medium hover:text-[#10B981] transition-colors rounded-md px-2 py-1"
          >
            Student ▾
          </button>
          {openDropdown === "student" && renderDropdown("student")}
        </div>

        {/* CHILDREN */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("children")}
            className="font-medium hover:text-[#10B981] transition-colors rounded-md px-2 py-1"
          >
            Children ▾
          </button>
          {openDropdown === "children" && renderDropdown("children")}
        </div>

        {/* PROFESSIONALS */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("professionals")}
            className="font-medium hover:text-[#10B981] transition-colors rounded-md px-2 py-1"
          >
            Professionals ▾
          </button>
          {openDropdown === "professionals" && renderDropdown("professionals")}
        </div>

        {/* OTHER LINKS */}
        <NavItem label="About" href="/about" />
        <NavItem label="References" href="/references" />
      </div>
    </nav>
  );
}
