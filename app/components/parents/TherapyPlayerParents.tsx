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

// Stress management for parents — curated from same creator as WOpzqZrLA3w and similar parent-focused content
const RECOMMENDED_VIDEOS = [
  { id: "WOpzqZrLA3w", title: "Stress Management for Parents", person: "Stress Management" },
  { id: "igeZrXAvxaI", title: "5 Stress Management Strategies for Parents | Tuesday Tips", person: "Parenting Tips" },
  { id: "WarhwKYtFnQ", title: "Help! My Kid is Stressing Me Out", person: "Parenting Support" },
  { id: "2CRL05ZWAbo", title: "A Parents' Guide to Stress: Using CBT Skills", person: "CBT for Parents" },
  { id: "qp0HIF3SfI4", title: "Brené Brown — The Power of Vulnerability", person: "Brené Brown" },
  { id: "lmyZMtPVodo", title: "Simon Sinek — Why Good Leaders Make You Feel Safe", person: "Simon Sinek" },
  { id: "lmyZMtPVodo", title: "Simon Sinek — How Great Leaders Inspire Action", person: "Simon Sinek" },
  { id: "PQAqVbAQVtM", title: "Brené Brown & Simon Sinek — Leadership & Connection", person: "Brené Brown & Simon Sinek" },
];

type Props = {
  onTherapy?: () => void;
  initialYouTubeId?: string | null;
};

export default function TherapyPlayerParents({ onTherapy, initialYouTubeId = null }: Props) {
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
        <h3 className="text-xl font-semibold text-[#064E3B]">Stress Management — For Parents</h3>
        <p className="text-sm text-gray-600">
          Recommended stress management videos for parents to support your wellbeing and reduce parenting stress.
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
              title="Support video"
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
            className="px-4 py-2 rounded-lg bg-[#10B981] text-white font-medium"
          >
            Load
          </button>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold text-[#065F46] mb-2">Stress management for parents</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {RECOMMENDED_VIDEOS.map((video, idx) => (
              <button
                key={`${video.id}-${idx}`}
                onClick={() => loadVideo(video.id)}
                className="text-left p-3 rounded-lg border border-gray-200 hover:border-[#10B981] hover:bg-[#E6F7F1] transition-colors"
              >
                <span className="text-xs text-[#10B981] font-medium">{video.person}</span>
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
