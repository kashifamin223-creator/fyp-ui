"use client";

import Link from "next/link";
import { useTheme } from "../ThemeContext";

interface Props {
  label: string;
  href: string;
}

export default function NavItem({ label, href }: Props) {
  const { theme } = useTheme();
  
  return (
    <Link 
      href={href} 
      className={`transition font-medium ${
        theme === 'dark' 
          ? 'text-gray-300 hover:text-gray-100' 
          : 'text-gray-700 hover:text-blue-600'
      }`}
    >
      {label}
    </Link>
  );
}
