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

const traumaVideos: Video[] = [
  {
    id: "1",
    title: "Deep Breathing for Kids",
    description: "Learn simple breathing exercises to calm your mind and body",
    duration: "5:30",
    category: "Calming",
    thumbnail: "🫁",
    videoUrl: "https://www.youtube.com/embed/qG-AP8xV6QI"
  },
  {
    id: "2", 
    title: "Story Time: The Brave Little Bear",
    description: "A comforting story about being brave when you feel scared",
    duration: "8:15",
    category: "Stories",
    thumbnail: "🐻",
    videoUrl: "https://www.youtube.com/embed/example1"
  },
  {
    id: "3",
    title: "Mindful Moments for Children",
    description: "Gentle exercises to help you feel peaceful and safe",
    duration: "6:45",
    category: "Mindfulness",
    thumbnail: "🧘",
    videoUrl: "https://www.youtube.com/embed/example2"
  },
  {
    id: "4",
    title: "Drawing Your Feelings",
    description: "Learn how to express your emotions through art",
    duration: "7:20",
    category: "Creative",
    thumbnail: "🎨",
    videoUrl: "https://www.youtube.com/embed/example3"
  },
  {
    id: "5",
    title: "Safe Place Visualization",
    description: "Create a special safe place in your imagination",
    duration: "10:00",
    category: "Relaxation",
    thumbnail: "🏰",
    videoUrl: "https://www.youtube.com/embed/example4"
  },
  {
    id: "6",
    title: "Happy Movement Dance",
    description: "Fun movements to help your body feel good and happy",
    duration: "4:30",
    category: "Movement",
    thumbnail: "💃",
    videoUrl: "https://www.youtube.com/embed/example5"
  }
];

export default function TraumaVideoPlayer() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Calming", "Stories", "Mindfulness", "Creative", "Relaxation", "Movement"];

  const filteredVideos = selectedCategory === "All" 
    ? traumaVideos 
    : traumaVideos.filter(video => video.category === selectedCategory);

  const getRecommendedVideos = () => {
    return traumaVideos.slice(0, 3);
  };

  if (selectedVideo) {
    return (
      <div>
        <button
          onClick={() => setSelectedVideo(null)}
          className="mb-4 flex items-center text-blue-600 hover:text-blue-700 transition"
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
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
              {selectedVideo.category}
            </span>
            <span>Duration: {selectedVideo.duration}</span>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2 text-green-800">After watching this video:</h4>
          <ul className="text-sm space-y-1 text-green-700">
            <li>• Take three deep breaths</li>
            <li>• Notice how you're feeling</li>
            <li>• Draw or write about your experience</li>
            <li>• Talk to a trusted adult if you need support</li>
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
                  ? "bg-blue-600 text-white"
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
              className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition cursor-pointer"
            >
              <div className="text-3xl mr-3">{video.thumbnail}</div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">{video.title}</h4>
                <p className="text-xs text-gray-600">{video.duration}</p>
              </div>
              <div className="text-blue-600">
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
          <li>• Find a quiet, comfortable place</li>
          <li>• It's okay to pause if you need a break</li>
          <li>• Try the exercises along with the video</li>
          <li>• Watch videos as many times as you need</li>
        </ul>
      </div>
    </div>
  );
}
