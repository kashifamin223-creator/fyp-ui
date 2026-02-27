"use client";

import Link from "next/link";
import { useTheme } from "../ThemeContext";
import Image from "next/image";

export default function Logo() {
  const { theme } = useTheme();
  
  return (
    <Link href="/home" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
      <Image 
        src="/MentalHealthTherapyLogo.png" 
        alt="Mental Healthcare Therapy Logo"
        width={40}
        height={40}
        className="rounded-lg"
      />
      <span className={`text-2xl font-bold ${
        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
      }`}>
        Mental Healthcare Therapy
      </span>
    </Link>
  );
}
