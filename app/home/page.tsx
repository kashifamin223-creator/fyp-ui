"use client";

import Navbar from "../components/Home/Nevbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#E6F7F1] font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 bg-[#10B981]/10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#065F46] mb-4">
          Welcome to Healthcare Support
        </h1>
        <p className="text-[#065F46] max-w-xl mx-auto mb-8">
          Providing guidance, resources, and support for Students, Children, and Professionals.
        </p>
        <Link
          href="/about"
          className="px-6 py-3 bg-[#10B981] text-white rounded-lg hover:bg-[#0f9a6f] transition-colors"
        >
          Learn More
        </Link>
      </section>

      {/* Sections */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Student */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-[#065F46] mb-4">Students</h2>
          <p className="text-[#065F46] mb-4">
            Explore internships, graduate programs, and guidance to build your future.
          </p>
          <Link
            href="/student"
            className="inline-block px-4 py-2 bg-[#10B981] text-white rounded hover:bg-[#0f9a6f] transition-colors"
          >
            Explore
          </Link>
        </div>

        {/* Children */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-[#065F46] mb-4">Children</h2>
          <p className="text-[#065F46] mb-4">
            Guidance and support for children facing trauma, harassment, or abuse.
          </p>
          <Link
            href="/children"
            className="inline-block px-4 py-2 bg-[#10B981] text-white rounded hover:bg-[#0f9a6f] transition-colors"
          >
            Explore
          </Link>
        </div>

        {/* Professionals */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-[#065F46] mb-4">Professionals</h2>
          <p className="text-[#065F46] mb-4">
            Support for employed, unemployed, elderly, or parents seeking help.
          </p>
          <Link
            href="/professionals"
            className="inline-block px-4 py-2 bg-[#10B981] text-white rounded hover:bg-[#0f9a6f] transition-colors"
          >
            Explore
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 p-6 text-center text-[#065F46] bg-[#D1FAE5]">
        &copy; {new Date().getFullYear()} Healthcare Support. All rights reserved.
      </footer>
    </div>
  );
}