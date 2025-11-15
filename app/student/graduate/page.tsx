"use client";

import Link from "next/link";
import Navbar from "../../components/Home/Nevbar";

export default function InternPage() {
  return (
    <div className="min-h-screen bg-[#E6F7F1] font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-[#065F46] mb-4">
          Intern Opportunities
        </h1>
        <p className="text-[#065F46] mb-6">
          Welcome to the Intern section! Here you can find internship programs, guidance, and resources to help students gain practical experience in healthcare and related fields.
        </p>

        {/* Sample Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-[#D1FAE5] rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="font-semibold text-[#065F46] mb-2">Healthcare Internship</h2>
            <p className="text-[#065F46] text-sm mb-3">
              Join our healthcare internship program and gain hands-on experience in hospitals and clinics.
            </p>
            <Link 
              href="/apply/healthcare-intern"
              className="inline-block px-4 py-2 bg-[#10B981] text-white rounded hover:bg-[#0f9a6f] transition-colors"
            >
              Apply Now
            </Link>
          </div>

          <div className="p-4 bg-[#D1FAE5] rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="font-semibold text-[#065F46] mb-2">Research Internship</h2>
            <p className="text-[#065F46] text-sm mb-3">
              Participate in healthcare research projects and enhance your analytical skills.
            </p>
            <Link 
              href="/apply/research-intern"
              className="inline-block px-4 py-2 bg-[#10B981] text-white rounded hover:bg-[#0f9a6f] transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 p-6 text-center text-[#065F46]">
        &copy; {new Date().getFullYear()} Healthcare Support. All rights reserved.
      </footer>
    </div>
  );
}
