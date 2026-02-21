"use client";

import HarassmentQuestionnaire from "./HarassmentQuestionnaire";
import HarassmentVideoPlayer from "./HarassmentVideoPlayer";
import Navbar from "../Home/Nevbar";

export default function HarassmentDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto p-6">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-[#DC2626] mb-2">
              Children Harassment Support Center
            </h1>
            <p className="text-lg text-gray-600">
              A safe space for children to address harassment and find empowerment resources
            </p>
          </header>

          <nav className="bg-white rounded-lg shadow-md p-4 mb-8">
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                Dashboard
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                Resources
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                Progress
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                Help
              </button>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-[#DC2626] mb-4">
                Harassment Assessment
              </h2>
              <p className="text-gray-600 mb-6">
                Help us understand your experiences with these confidential questions
              </p>
              <HarassmentQuestionnaire />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-[#DC2626] mb-4">
                Empowerment Videos
              </h2>
              <p className="text-gray-600 mb-6">
                Watch videos designed to help you feel strong and confident
              </p>
              <HarassmentVideoPlayer />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-semibold text-lg mb-2">Safe Space</h3>
              <p className="text-gray-600 text-sm">
                Your responses are completely private and secure
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="font-semibold text-lg mb-2">Build Confidence</h3>
              <p className="text-gray-600 text-sm">
                Learn skills to help you feel strong and brave
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-semibold text-lg mb-2">Support Available</h3>
              <p className="text-gray-600 text-sm">
                Help is always here when you need to talk
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
