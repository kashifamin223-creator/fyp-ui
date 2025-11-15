"use client";

import Logo from "./Logo";
import NavItem from "./NavItem";
import { useState } from "react";
import Link from "next/link";

const dropdownData = {
  student: [
    { label: "Intern", href: "/student/intern" },
    { label: "Graduate / Bachelor's", href: "/student/graduate" },
    { label: "Unemployed", href: "/student/unemployed" },
    { label: "MS / PhD", href: "/student/ms-phd" },
  ],
  children: [
    { label: "Trauma", href: "/children/trauma" },
    { label: "Harassment", href: "/children/harassment" },
    { label: "Child abuse", href: "/children/abuse" },
  ],
  professionals: [
    { label: "Old Age", href: "/professionals/old-age" },
    { label: "Employed", href: "/professionals/employed" },
    { label: "Unemployed", href: "/professionals/unemployed" },
    { label: "Hopeless / Homeless", href: "/professionals/hopeless-homeless" },
    { label: "Parents", href: "/professionals/parents" },
  ],
};

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<"student" | "children" | "professionals" | null>(null);

  const renderDropdown = (type: "student" | "children" | "professionals") => {
    return (
      <div className="absolute top-10 left-0 bg-white text-[#065F46] shadow-md rounded-lg py-2 w-56 z-50 border border-[#D1FAE5]">
        {dropdownData[type].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block px-4 py-2 hover:bg-[#D1FAE5] rounded"
          >
            {link.label}
          </Link>
        ))}
      </div>
    );
  };

  return (
    <nav className="w-full shadow-md py-4 px-8 bg-[#E6F7F1] flex justify-between items-center relative font-sans">
      {/* LEFT: LOGO */}
      <Logo />

      {/* RIGHT MENU */}
      <div className="flex space-x-6 items-center text-[#065F46]">
        {/* STUDENT */}
        <div
          className="relative"
          onMouseEnter={() => setOpenDropdown("student")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button className="font-medium hover:text-[#10B981] transition-colors rounded-md px-2 py-1">
            Student ▾
          </button>
          {openDropdown === "student" && renderDropdown("student")}
        </div>

        {/* CHILDREN */}
        <div
          className="relative"
          onMouseEnter={() => setOpenDropdown("children")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button className="font-medium hover:text-[#10B981] transition-colors rounded-md px-2 py-1">
            Children ▾
          </button>
          {openDropdown === "children" && renderDropdown("children")}
        </div>

        {/* PROFESSIONALS */}
        <div
          className="relative"
          onMouseEnter={() => setOpenDropdown("professionals")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button className="font-medium hover:text-[#10B981] transition-colors rounded-md px-2 py-1">
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
