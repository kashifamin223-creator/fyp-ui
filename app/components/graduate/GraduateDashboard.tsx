"use client";

import { useState } from "react";
import GraduateQuestionnaire from "./GraduateQuestionnaire";
import TherapyPlayerIntern from "../intern/TherapyPlayerIntern";

export default function GraduateDashboard() {
  // use a plain YouTube ID (TherapyPlayerIntern accepts full URLs or IDs)
  const defaultVideoId = "_-2OL-UhjU4"; // Peter Dinklage famous quote (Shorts)
  const [recommendedId, setRecommendedId] = useState<string | null>(defaultVideoId);

  return (
    <main className="p-6">
      <h2 className="text-2xl font-bold text-[#064E3B]">Graduate Dashboard</h2>

      <p className="text-sm text-gray-600 mt-2">Welcome — complete the quick 9-question graduate check-in and view a recommended video.</p>

      <div className="grid grid-cols-1 gap-6 mt-6">
        <GraduateQuestionnaire onRecommend={(id) => setRecommendedId(id)} />
        <TherapyPlayerIntern initialYouTubeId={recommendedId ?? defaultVideoId} localVideoSrc="/media/graduate-relax.mp4" forceFullViewport={false} />
      </div>
    </main>
  );
}
