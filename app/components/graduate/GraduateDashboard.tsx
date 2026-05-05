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
      

      <div className="grid grid-cols-1 gap-2 mt-2">
        <GraduateQuestionnaire onRecommend={(id) => setRecommendedId(id)} />
        <TherapyPlayerIntern initialYouTubeId={recommendedId ?? defaultVideoId} localVideoSrc="/media/graduate-relax.mp4" forceFullViewport={false} />
      </div>
    </main>
  );
}
