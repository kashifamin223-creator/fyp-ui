"use client";

import { useState } from "react";
import Navbar from "../../components/Home/Nevbar";
import EmployedDashboard from "../../components/employed/EmployedDashboard";
import TherapyPlayerEmployed from "../../components/employed/TherapyPlayerEmployed";

export default function EmployedPage() {
  const defaultVideoId = "D0H5B-YrMyg";
  const [recommendedId, setRecommendedId] = useState<string | null>(defaultVideoId);

  return (
    <div className="min-h-screen bg-[#E6F7F1] font-sans">
      <Navbar />

      <main className="mx-auto p-6 md:px-10 md:py-8 grid grid-cols-1 gap-8 items-start">
        <div>
          <EmployedDashboard onRecommend={(id) => setRecommendedId(id)} />
        </div>
        <div>
          <TherapyPlayerEmployed initialYouTubeId={recommendedId ?? defaultVideoId} />
        </div>
      </main>
    </div>
  );
}
