"use client";

import { useState, useEffect } from "react";

function extractYouTubeId(urlOrId: string) {
  const idOnly = urlOrId.trim();
  if (!idOnly) return null;
  const ytRegex = /(?:v=|\/embed\/|youtu\.be\/|\/shorts\/|watch\?v=)([A-Za-z0-9_-]{11})/;
  const match = idOnly.match(ytRegex);
  if (match && match[1]) return match[1];
  if (idOnly.length === 11 && /^[A-Za-z0-9_-]+$/.test(idOnly)) return idOnly;
  return null;
}

// Career guidance, job search support, and motivation for unemployed individuals
const RECOMMENDED_VIDEOS = [
  { id: "DFD7yDR0-ko", title: "Building Confidence in Your Job Search", person: "Career Coaching" },
  { id: "4FT5RYuifwE", title: "How to Overcome Job Search Anxiety", person: "Mental Wellbeing" },
  { id: "ivs9S67wdEI", title: "Top Skills Employers Are Looking For", person: "Career Skills" },
  { id: "O_B1YGIcct0", title: "Staying Positive During Job Transition", person: "Motivation" },
  { id: "ZMByWenSRdI", title: "Interview Preparation Tips & Tricks", person: "Interview Prep" },
  { id: "2OEL4P1Rz04", title: "Stress Relief & Relaxation Meditation", person: "Relaxation" },
  { id: "OVf5c7NthSw", title: "Building Your Professional Network", person: "Networking" },
  { id: "R3abknwWX7k", title: "Creating an Impressive Resume", person: "Resume Writing" },
];

type Props = {
  onTherapy?: () => void;
  initialYouTubeId?: string | null;
};

export default function TherapyPlayerUnemployed({ onTherapy, initialYouTubeId = null }: Props) {
  const [input, setInput] = useState("");
  const [currentId, setCurrentId] = useState<string | null>(initialYouTubeId ?? RECOMMENDED_VIDEOS[0].id);

  useEffect(() => {
    if (initialYouTubeId) {
      const extracted = extractYouTubeId(initialYouTubeId);
      setCurrentId(extracted ?? initialYouTubeId);
    }
  }, [initialYouTubeId]);

  function loadVideo(idOrUrl: string) {
    const id = extractYouTubeId(idOrUrl);
    if (id) setCurrentId(id);
    try {
      onTherapy?.();
    } catch (e) {}
  }

  return (
    <section className="bg-white p-6 rounded-xl shadow-lg">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-[#0369A1]">Career Support & Wellbeing — For Job Seekers</h3>
        <p className="text-sm text-gray-600">
          Recommended videos for career guidance, job search motivation, and managing stress during your transition.
        </p>
      </div>

      <div className="mt-4 space-y-3">
        {currentId && (
          <div className="rounded overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <iframe
              src={`https://www.youtube.com/embed/${currentId}?rel=0&modestbranding=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              title="Career support video"
            />
          </div>
        )}

        <div className="flex gap-2 items-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg bg-gray-50"
            placeholder="Paste YouTube link or ID"
          />
          <button
            onClick={() => loadVideo(input)}
            className="px-4 py-2 rounded-lg bg-[#0EA5E9] text-white font-medium hover:bg-[#0284C7]"
          >
            Load
          </button>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold text-[#0369A1] mb-2">Career resources for job seekers</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {RECOMMENDED_VIDEOS.map((video, idx) => (
              <button
                key={`${video.id}-${idx}`}
                onClick={() => loadVideo(video.id)}
                className="text-left p-3 rounded-lg border border-gray-200 hover:border-[#0EA5E9] hover:bg-[#E0F2FE] transition-colors"
              >
                <span className="text-xs text-[#0EA5E9] font-medium">{video.person}</span>
                <div className="text-sm text-gray-800 truncate" title={video.title}>
                  {video.title}
                </div>
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-500">
          Click any recommendation to watch. Paste your own YouTube link above for custom content.
        </p>
      </div>
    </section>
  );
}