"use client";

import { useState } from "react";
import Navbar from "../../components/Home/Nevbar";
import ParentsDashboard from "../../components/parents/ParentsDashboard";
import TherapyPlayerParents from "../../components/parents/TherapyPlayerParents";

export default function ParentsPage() {
  const defaultVideoId = "WOpzqZrLA3w";
  const [recommendedId, setRecommendedId] = useState<string | null>(defaultVideoId);

  return (
    <div className="min-h-screen bg-[#E6F7F1] font-sans">
      <Navbar />

      <main className="mx-auto p-6 md:px-10 md:py-8 grid grid-cols-1 gap-8 items-start">
        <div>
          <ParentsDashboard onRecommend={(id) => setRecommendedId(id)} />
        </div>
        <div>
          <TherapyPlayerParents initialYouTubeId={recommendedId ?? defaultVideoId} />
        </div>
      </main>

      <footer className="mt-12 p-6 text-center text-[#065F46]">
        &copy; {new Date().getFullYear()} Healthcare Support. All rights reserved.
      </footer>
    </div>
  );
}
