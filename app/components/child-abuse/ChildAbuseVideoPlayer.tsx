"use client";

import React, { useState } from "react";

interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
}

const childAbuseVideos: Video[] = [
  {
    id: "1",
    title: "You Are Not Alone",
    description: "Understanding that help is available and you deserve to be safe",
    duration: "7:30",
    category: "Support",
    thumbnail: "🤗",
    videoUrl: "https://www.youtube.com/embed/example1"
  },
  {
    id: "2", 
    title: "Talking to Trusted Adults",
    description: "How to find and talk to adults who can help keep you safe",
    duration: "8:15",
    category: "Communication",
    thumbnail: "🗣️",
    videoUrl: "https://www.youtube.com/embed/example2"
  },
  {
    id: "3",
    title: "Building Your Inner Strength",
    description: "Discovering your courage and resilience in difficult times",
    duration: "9:45",
    category: "Empowerment",
    thumbnail: "💪",
    videoUrl: "https://www.youtube.com/embed/example3"
  },
  {
    id: "4",
    title: "Understanding Safe Touch",
    description: "Learning about body safety and personal boundaries",
    duration: "6:20",
    category: "Safety Education",
    thumbnail: "🛡️",
    videoUrl: "https://www.youtube.com/embed/example4"
  },
  {
    id: "5",
    title: "Healing Through Art",
    description: "Using drawing and creativity to express feelings and heal",
    duration: "7:00",
    category: "Creative Healing",
    thumbnail: "🎨",
    videoUrl: "https://www.youtube.com/embed/example5"
  },
  {
    id: "6",
    title: "Making Safe Choices",
    description: "Learning to recognize and get out of unsafe situations",
    duration: "8:30",
    category: "Safety Skills",
    thumbnail: "🧭",
    videoUrl: "https://www.youtube.com/embed/example6"
  },
  {
    id: "7",
    title: "Stories of Hope",
    description: "Inspiring stories from other kids who found help and healing",
    duration: "10:15",
    category: "Inspiration",
    thumbnail: "🌈",
    videoUrl: "https://www.youtube.com/embed/example7"
  },
  {
    id: "8",
    title: "Calming Your Worries",
    description: "Gentle exercises to help you feel peaceful and safe",
    duration: "5:45",
    category: "Relaxation",
    thumbnail: "🧘",
    videoUrl: "https://www.youtube.com/embed/example8"
  },
  {
    id: "9",
    title: "Your Rights as a Child",
    description: "Understanding that every child deserves to be safe and loved",
    duration: "6:00",
    category: "Rights Education",
    thumbnail: "⚖️",
    videoUrl: "https://www.youtube.com/embed/example9"
  }
];

export default function ChildAbuseVideoPlayer() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Support", "Communication", "Empowerment", "Safety Education", "Creative Healing", "Safety Skills", "Inspiration", "Relaxation", "Rights Education"];

  const filteredVideos = selectedCategory === "All" 
    ? childAbuseVideos 
    : childAbuseVideos.filter(video => video.category === selectedCategory);

  const getRecommendedVideos = () => {
    return childAbuseVideos.slice(0, 4);
  };

  if (selectedVideo) {
    return (
      <div>
        <button
          onClick={() => setSelectedVideo(null)}
          className="mb-4 flex items-center text-purple-600 hover:text-purple-700 transition"
        >
          ← Back to all videos
        </button>
        
        <div className="bg-black rounded-lg overflow-hidden mb-4">
          <iframe
            src={selectedVideo.videoUrl}
            title={selectedVideo.title}
            className="w-full h-64"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{selectedVideo.title}</h3>
          <p className="text-gray-600 mb-2">{selectedVideo.description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">
              {selectedVideo.category}
            </span>
            <span>Duration: {selectedVideo.duration}</span>
          </div>
        </div>

        <div className="bg-pink-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2 text-pink-800">After watching this video:</h4>
          <ul className="text-sm space-y-1 text-pink-700">
            <li>• Remember you are brave and valuable</li>
            <li>• Consider talking to a trusted adult</li>
            <li>• Your feelings are important and valid</li>
            <li>• Help is always available when you need it</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm transition ${
                selectedCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Recommended for You</h3>
        <div className="space-y-3">
          {getRecommendedVideos().map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition cursor-pointer"
            >
              <div className="text-3xl mr-3">{video.thumbnail}</div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">{video.title}</h4>
                <p className="text-xs text-gray-600">{video.duration}</p>
              </div>
              <div className="text-purple-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">All Videos</h3>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer"
            >
              <div className="text-2xl mr-3">{video.thumbnail}</div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">{video.title}</h4>
                <p className="text-xs text-gray-600">{video.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">
                    {video.category}
                  </span>
                  <span className="text-xs text-gray-500">{video.duration}</span>
                </div>
              </div>
              <div className="text-gray-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 bg-yellow-50 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-yellow-800">💡 Tips for Watching:</h4>
        <ul className="text-sm space-y-1 text-yellow-700">
          <li>• Watch with a trusted adult if you feel more comfortable</li>
          <li>• It's okay to pause if you need a break</li>
          <li>• Your feelings are important and valid</li>
          <li>• Remember: You are brave and strong</li>
        </ul>
      </div>

      <div className="mt-4 bg-red-50 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-red-800">🆘 Emergency Help:</h4>
        <ul className="text-sm space-y-1 text-red-700">
          <li>• Call 911 if you're in immediate danger</li>
          <li>• Call Child Abuse Hotline: 1-800-4-A-CHILD</li>
          <li>• Text "SAFE" to 741741 for crisis support</li>
          <li>• Tell a teacher, doctor, or police officer</li>
        </ul>
      </div>

      <div className="mt-4 bg-blue-50 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-800">💜 Remember:</h4>
        <ul className="text-sm space-y-1 text-blue-700">
          <li>• It is NEVER your fault</li>
          <li>• You deserve to be safe and loved</li>
          <li>• There are people who want to help you</li>
          <li>• You are not alone in this</li>
        </ul>
      </div>
    </div>
  );
}
