"use client";

import Navbar from "../../components/Home/Nevbar";
import Graduate from "../../components/graduate/graduate";

export default function GraduatePage() {
  return (
    <div className="min-h-screen bg-[#E6F7F1] font-sans">
      <Navbar />

      <section className="mx-auto p-6">
        <Graduate />
      </section>

      <footer className="mt-12 p-6 text-center text-[#065F46]">
        &copy; {new Date().getFullYear()} Healthcare Support. All rights reserved.
      </footer>
    </div>
  );
}
