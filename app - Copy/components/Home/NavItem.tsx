"use client";

import Link from "next/link";

interface Props {
  label: string;
  href: string;
}

export default function NavItem({ label, href }: Props) {
  return (
    <Link 
      href={href} 
      className="text-gray-700 hover:text-blue-600 transition font-medium"
    >
      {label}
    </Link>
  );
}
