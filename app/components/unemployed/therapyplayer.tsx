"use client";

import { useRef, useState } from "react";

function extractYouTubeId(urlOrId: string) {
  // If the user paste only ID, return it. Otherwise try to extract from common URL patterns.
  const idOnly = urlOrId.trim();
  if (!idOnly) return null;
  const ytRegex = /(?:v=|\/embed\/|youtu\.be\/)([A-Za-z0-9_-]{11})/;
  const match = idOnly.match(ytRegex);
  if (match && match[1]) return match[1];
  // fallback: if length 11, assume it's an ID
  if (idOnly.length === 11 && /^[A-Za-z0-9_-]+$/.test(idOnly)) return idOnly;
  return null;
}

export default function TherapyPlayer({ onTherapy }: { onTherapy?: () => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [soundOn, setSoundOn] = useState(false);
  // no persistent inline youtube embed; we'll open fullscreen overlay on demand

  // a gentle relaxing video suggestion (user can change)
  const suggestedYouTube = "https://www.youtube.com/watch?v=2OEL4P1Rz04";

  function toggleSound() {
    const v = videoRef.current;
    const a = audioRef.current;
    if (!v || !a) return;

    if (soundOn) {
      a.pause();
      v.muted = true;
      setSoundOn(false);
    } else {
      v.muted = false;
      a.currentTime = 0;
      a.play().catch(() => {});
      setSoundOn(true);
    }
  }

  function openFullscreenYouTube(urlOrId: string) {
    const id = extractYouTubeId(urlOrId);
    if (!id) return;

    // pause background audio if playing
    const a = audioRef.current;
    if (a && !a.paused) a.pause();

    // create overlay container
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "#000";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "9999";

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&loop=1&playlist=${id}&rel=0`;
    iframe.allow = "autoplay; encrypted-media; fullscreen";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "0";

    // close button
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "12px";
    closeBtn.style.right = "12px";
    closeBtn.style.zIndex = "10000";
    closeBtn.style.padding = "8px 12px";
    closeBtn.style.background = "rgba(255,255,255,0.9)";
    closeBtn.style.border = "none";
    closeBtn.style.borderRadius = "6px";
    closeBtn.style.cursor = "pointer";

    overlay.appendChild(iframe);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);

    function cleanup() {
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }

    closeBtn.addEventListener("click", () => cleanup());

    document.addEventListener(
      "fullscreenchange",
      function onFs() {
        if (!document.fullscreenElement) {
          cleanup();
          document.removeEventListener("fullscreenchange", onFs);
        }
      },
      { once: true }
    );

    // request fullscreen on overlay (must be in user gesture)
    if (overlay.requestFullscreen) {
      overlay.requestFullscreen().catch(() => {});
    }
  }

  function useSuggestion() {
    openFullscreenYouTube(suggestedYouTube);
    // notify parent that therapy was started (user gesture)
    try {
      onTherapy?.();
    } catch (e) {}
  }

  return (
    <section className="w-full bg-white p-6 rounded-xl shadow-lg mt-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-[#064E3B]">Relaxation Corner</h3>
          <p className="text-sm text-gray-600">Looping calming media. Paste a YouTube link or use the suggestion below.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={toggleSound} className="px-3 py-1 rounded bg-[#10B981] text-white text-sm">{soundOn ? "Sound On" : "Enable Sound"}</button>
          <button onClick={useSuggestion} className="px-3 py-1 rounded bg-gray-100 text-sm">Therapy</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {/* background loop */}
        <div className="w-full rounded overflow-hidden">
          <video ref={videoRef} src="/media/relax-loop.mp4" className="w-full h-48 object-cover bg-black" playsInline autoPlay loop muted />
        </div>

        {/* YouTube plays in fullscreen overlay when user clicks Therapy; no inline iframe shown */}
      </div>

      <audio ref={audioRef} src="/media/relax-sound.mp3" loop />

      <p className="mt-3 text-xs text-gray-500">If media does not play, add compatible files to the <code>/public/media</code> folder or click the sound button to start audio. YouTube playback may require user interaction.</p>
    </section>
  );
}
