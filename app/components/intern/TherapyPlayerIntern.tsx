"use client";

import { useRef, useState, useEffect } from "react";

function extractYouTubeId(urlOrId: string) {
  const idOnly = urlOrId.trim();
  if (!idOnly) return null;
  // support multiple URL formats: watch?v=, /embed/, youtu.be/, /shorts/, full id
  const ytRegex = /(?:v=|\/embed\/|youtu\.be\/|\/shorts\/|watch\?v=)([A-Za-z0-9_-]{11})/;
  const match = idOnly.match(ytRegex);
  if (match && match[1]) return match[1];
  if (idOnly.length === 11 && /^[A-Za-z0-9_-]+$/.test(idOnly)) return idOnly;
  return null;
}

type Props = {
  onTherapy?: () => void;
  initialYouTubeId?: string | null;
  localVideoSrc?: string;
  forceFullViewport?: boolean;
};

export default function TherapyPlayerIntern({ onTherapy, initialYouTubeId = null, localVideoSrc, forceFullViewport = false }: Props) {
  const [input, setInput] = useState("");
  const [currentId, setCurrentId] = useState<string | null>(initialYouTubeId ?? "dQw4w9WgXcQ"); // default sample
  const [muted, setMuted] = useState(false);
  const localVideoRef = useRef<HTMLVideoElement | null>(null);

  // sync when parent provides a new video id
  useEffect(() => {
    if (initialYouTubeId) {
      // allow parent to pass either a full URL or an ID
      const extracted = extractYouTubeId(initialYouTubeId);
      setCurrentId(extracted ?? initialYouTubeId);
    }
    // if parent indicates full-viewport preference, enable fullscreen view
    if (forceFullViewport && initialYouTubeId) setIsFullscreenView(true);
  }, [initialYouTubeId, forceFullViewport]);

  const [isFullscreenView, setIsFullscreenView] = useState<boolean>(false);
  // removed unused effect

  function loadVideo() {
    const id = extractYouTubeId(input);
    if (id) setCurrentId(id);
    try {
      onTherapy?.();
    } catch (e) {}
  }

  function toggleMute() {
    const v = localVideoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }

  return (
    <section className="bg-white p-6 rounded-xl shadow">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[#0F766E]">Therapy Video</h3>
          <p className="text-sm text-gray-600">A concise player tailored for interns — inline playback and a small selection.</p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="w-full rounded overflow-hidden bg-black">
          {/* inline local video (looping) */}
          <video ref={localVideoRef} src={localVideoSrc ?? "/media/intern-relax.mp4"} className="w-full h-48 object-cover" controls loop muted={muted} />
        </div>

        <div className="flex gap-2 items-center">
          <button onClick={toggleMute} className="px-3 py-1 rounded bg-gray-100">{muted ? 'Unmute' : 'Mute'}</button>
          <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 px-3 py-1 border rounded" placeholder="Paste YouTube link or ID" />
          <button onClick={loadVideo} className="px-3 py-1 rounded bg-[#10B981] text-white">Load</button>
          <button onClick={() => { try { onTherapy?.(); } catch(e){} }} className="px-3 py-1 rounded bg-gray-100">Start Therapy</button>
        </div>

        {currentId && !isFullscreenView && (
          <div className="mt-2 rounded overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <iframe
              src={`https://www.youtube.com/embed/${currentId}?rel=0&modestbranding=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              title="Intern therapy video"
            />
          </div>
        )}

        {currentId && isFullscreenView && (
          <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
            <button onClick={() => setIsFullscreenView(false)} className="absolute top-4 right-4 z-60 px-3 py-2 bg-white rounded">Close</button>
            <div className="w-full h-full">
              <iframe
                src={`https://www.youtube.com/embed/${currentId}?rel=0&modestbranding=1&autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                title="Intern therapy video fullscreen"
              />
            </div>
          </div>
        )}

        <p className="text-xs text-gray-500">Tip: Use the local video for short breathing exercises, or load a YouTube clip for guided sessions.</p>
      </div>
    </section>
  );
}
