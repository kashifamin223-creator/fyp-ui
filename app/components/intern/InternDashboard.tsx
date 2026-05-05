"use client";

import Questionnaire from "./Questionnaire";
import TherapyPlayerIntern from "./TherapyPlayerIntern";

export default function InternDashboard() {
  return (
    <main className="p-6">
      <h2 className="text-2xl font-bold text-[#064E3B]">Intern Dashboard</h2>

      <p className="text-sm text-gray-600 mt-2">Welcome — complete the quick 9-question check-in and try a short therapy video.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Questionnaire />
        <TherapyPlayerIntern /> 
      </div>
    </main>
  );
}
