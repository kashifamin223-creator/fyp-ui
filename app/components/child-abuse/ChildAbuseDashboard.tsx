"use client";

import ChildAbuseQuestionnaire from "./ChildAbuseQuestionnaire";
import ChildAbuseVideoPlayer from "./ChildAbuseVideoPlayer";
import Navbar from "../Home/Nevbar";

export default function ChildAbuseDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto p-6">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-[#7C3AED] mb-2">
              Child Abuse Support Center
            </h1>
            <p className="text-lg text-gray-600">
              A safe, confidential space for children to seek help and healing resources
            </p>
          </header>

          <nav className="bg-white rounded-lg shadow-md p-4 mb-8">
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                Dashboard
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                Resources
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                Progress
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                Emergency Help
              </button>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-[#7C3AED] mb-4">
                Safety Assessment
              </h2>
              <p className="text-gray-600 mb-6">
                Help us understand your situation with these private, caring questions
              </p>
              <ChildAbuseQuestionnaire />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-[#7C3AED] mb-4">
                Healing & Support Videos
              </h2>
              <p className="text-gray-600 mb-6">
                Watch videos designed to help you feel safe and supported
              </p>
              <ChildAbuseVideoPlayer />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-semibold text-lg mb-2">You Are Safe Here</h3>
              <p className="text-gray-600 text-sm">
                This is a completely private and safe space for you
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl mb-3">💜</div>
              <h3 className="font-semibold text-lg mb-2">You Deserve Love</h3>
              <p className="text-gray-600 text-sm">
                Every child deserves to be safe, loved, and cared for
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl mb-3">🆘</div>
              <h3 className="font-semibold text-lg mb-2">Help Is Available</h3>
              <p className="text-gray-600 text-sm">
                Adults are ready to help keep you safe right now
              </p>
            </div>
          </div>

          {/* Emergency Banner */}
          <div className="mt-8 bg-red-100 border-2 border-red-300 rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl mr-4">🚨</div>
              <h3 className="text-2xl font-bold text-red-800">If You're in Immediate Danger</h3>
            </div>
            <div className="text-center">
              <p className="text-lg text-red-700 mb-4">Call 911 or tell a trusted adult right away</p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4 className="font-semibold text-red-800 mb-2">Child Abuse Hotline</h4>
                  <p className="text-2xl font-bold text-red-600">1-800-4-A-CHILD</p>
                  <p className="text-sm text-gray-600">24/7 Confidential Support</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4 className="font-semibold text-red-800 mb-2">Text for Help</h4>
                  <p className="text-2xl font-bold text-red-600">Text "SAFE" to 741741</p>
                  <p className="text-sm text-gray-600">Crisis Text Line</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
