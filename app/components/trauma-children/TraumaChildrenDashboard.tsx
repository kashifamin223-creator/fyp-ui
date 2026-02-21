"use client";

import TraumaQuestionnaire from "./TraumaQuestionnaire";
import TraumaVideoPlayer from "./TraumaVideoPlayer";
import Navbar from "../Home/Nevbar";

export default function TraumaDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto p-6">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-[#064E3B] mb-2">
              Children Trauma Support Center
            </h1>
            <p className="text-lg text-gray-600">
              A safe space for children to assess stress and find healing resources
            </p>
          </header>

          <nav className="bg-white rounded-lg shadow-md p-4 mb-8">
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
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
              <h2 className="text-2xl font-semibold text-[#064E3B] mb-4">
                Stress Assessment
              </h2>
              <p className="text-gray-600 mb-6">
                Help us understand how you're feeling with these gentle questions
              </p>
              <TraumaQuestionnaire />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-[#064E3B] mb-4">
                Healing Videos
              </h2>
              <p className="text-gray-600 mb-6">
                Watch calming videos designed to help you feel better
              </p>
              <TraumaVideoPlayer />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl mb-3">🌈</div>
              <h3 className="font-semibold text-lg mb-2">Safe Space</h3>
              <p className="text-gray-600 text-sm">
                Everything you share here is private and secure
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="font-semibold text-lg mb-2">Build Strength</h3>
              <p className="text-gray-600 text-sm">
                Learn coping skills that help you feel stronger
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl mb-3">🤗</div>
              <h3 className="font-semibold text-lg mb-2">Support Available</h3>
              <p className="text-gray-600 text-sm">
                Help is always here when you need it
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
