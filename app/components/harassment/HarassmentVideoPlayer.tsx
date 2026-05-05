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

const harassmentVideos: Video[] = [
  {
    id: "1",
    title: "Standing Up to Bullies",
    description: "Learn how to be brave and stand up for yourself and others",
    duration: "2:03",
    category: "Empowerment",
    thumbnail: "🛡️",
    videoUrl: "https://www.youtube.com/watch?v=HtJMj5gWYkg"
  },
  {
    id: "2", 
    title: "Building Self-Confidence",
    description: "Discover your inner strength and believe in yourself",
    duration: "6:29",
    category: "Confidence",
    thumbnail: "💪",
    videoUrl: "https://www.youtube.com/watch?v=pdjaxS4ME2A"
  },
  {
    id: "3",
    title: "Finding Your Voice",
    description: "Learn how to speak up and express yourself clearly",
    duration: "1:17",
    category: "Communication",
    thumbnail: "🗣️",
    videoUrl: "https://www.youtube.com/watch?v=sr5iRj9TMlE"
  },
  {
    id: "4",
    title: "Making Good Friends",
    description: "How to build healthy friendships and avoid toxic ones",
    duration: "5:02",
    category: "Friendship",
    thumbnail: "🤝",
    videoUrl: "https://www.youtube.com/watch?v=4ai7ckER2os"
  },
  {
    id: "5",
    title: "Online Safety Tips",
    description: "Stay safe on the internet and handle cyberbullying",
    duration: "4:45",
    category: "Digital Safety",
    thumbnail: "📱",
    videoUrl: "https://www.youtube.com/watch?v=CqH2QYt6oOc"
  },
  {
    id: "6",
    title: "Talking to Adults",
    description: "How to ask for help from trusted adults",
    duration: "1:21",
    category: "Support",
    thumbnail: "👨‍👩‍👧‍👦",
    videoUrl: "https://www.youtube.com/watch?v=ufzOhCAVeyM&list=PLlqY1ajT56E5oQliam29ar_aGC54gaxia"
  },
  {
    id: "7",
    title: "Managing Your Feelings",
    description: "Healthy ways to deal with anger and sadness",
    duration: "5:29",
    category: "Emotional Health",
    thumbnail: "💭",
    videoUrl: "https://www.youtube.com/watch?v=Vs-MyQgfH3A"
  },
  
];

export default function HarassmentVideoPlayer() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Empowerment", "Confidence", "Communication", "Friendship", "Digital Safety", "Support", "Emotional Health", "Leadership"];

  const filteredVideos = selectedCategory === "All" 
    ? harassmentVideos 
    : harassmentVideos.filter(video => video.category === selectedCategory);

  const getRecommendedVideos = () => {
    return harassmentVideos.slice(0, 4);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    const filtered = category === "All" 
      ? harassmentVideos 
      : harassmentVideos.filter(video => video.category === category);
    if (filtered.length > 0) {
      setSelectedVideo(filtered[0]);
    }
  };

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
    }
    if (url.includes('youtube.com/embed/')) {
      return `${url}?autoplay=1&mute=1`;
    }
    return url;
  };

  if (selectedVideo) {
    return (
      <div>
        <button
          onClick={() => setSelectedVideo(null)}
          className="mb-4 flex items-center text-red-600 hover:text-red-700 transition"
        >
          ← Back to all videos
        </button>
        
        <div className="bg-black rounded-lg overflow-hidden mb-4">
          <iframe
            src={getEmbedUrl(selectedVideo.videoUrl)}
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
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded">
              {selectedVideo.category}
            </span>
            <span>Duration: {selectedVideo.duration}</span>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2 text-orange-800">After watching this video:</h4>
          <ul className="text-sm space-y-1 text-orange-700">
            <li>• Practice what you learned in a safe way</li>
            <li>• Talk to a trusted adult about your feelings</li>
            <li>• Remember you are strong and capable</li>
            <li>• Reach out for help when you need it</li>
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
              onClick={() => handleCategoryClick(category)}
              className={`px-3 py-1 rounded-full text-sm transition ${
                selectedCategory === category
                  ? "bg-red-600 text-white"
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
              className="flex items-center p-3 bg-red-50 rounded-lg hover:bg-red-100 transition cursor-pointer"
            >
              <div className="text-3xl mr-3">{video.thumbnail}</div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">{video.title}</h4>
                <p className="text-xs text-gray-600">{video.duration}</p>
              </div>
              <div className="text-red-600">
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
          <li>• Try the exercises shown in the videos</li>
          <li>• Remember: You are brave and strong</li>
        </ul>
      </div>

      <div className="mt-4 bg-blue-50 rounded-lg p-4">
        <h4 className="font-semibold mb-2 text-blue-800">🆘 Need Help Now?</h4>
        <ul className="text-sm space-y-1 text-blue-700">
          <li>• Talk to a parent, teacher, or school counselor</li>
          <li>• Call 1121 for immediate help</li>
          <li>• 0800-89457 for support</li>
          <li>• 24/7 help is available</li>
        </ul>
      </div>
    </div>
  );
}
