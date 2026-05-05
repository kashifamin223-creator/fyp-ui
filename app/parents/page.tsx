"use client";

import Navbar from "../components/Home/Nevbar";
import ParentsForm from "../components/professional/ParentsForm";

export default function ParentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Parent Mental Health Assessment
            </h1>
            <p className="text-gray-600">
              This assessment helps us understand your mental health needs as a parent and provide appropriate support.
            </p>
          </div>

          <ParentsForm />
        </div>
      </main>
    </div>
  );
}
