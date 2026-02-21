"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "../../components/Home/Nevbar";
import UnemployedDasbard from "../../components/unemployed/unemployeedasboard";
import UnemployeeForm from "../../components/unemployed/unemployeeform";
import TherapyPlayer from "../../components/unemployed/therapyplayer";
export default function UnemployedPage() {
  const [submittedData, setSubmittedData] = useState<any | null>(null);
  const [therapyClicked, setTherapyClicked] = useState(false);

  return (
    <div className="min-h-screen bg-[#E6F7F1] font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Form first (full-width), then therapy control; dashboard appears after submit + therapy */}
      <main className="mx-auto p-6 grid grid-cols-1 gap-8 items-start">
        <div>
          <UnemployeeForm
            onSubmit={(data) => {
              setSubmittedData(data);
            }}
          />
        </div>

        <div>
          <TherapyPlayer
            onTherapy={() => {
              setTherapyClicked(true);
            }}
          />
        </div>

        {submittedData && therapyClicked && (
          <div>
            <UnemployedDasbard stats={submittedData} />
          </div>
        )}
      </main>
    </div>
  );
}
