"use client";

import Navbar from "../../components/Home/Nevbar";
import Questionnaire from "../../components/intern/Questionnaire";
import TherapyPlayerIntern from "../../components/intern/TherapyPlayerIntern";
import InternSummary from "../../components/intern/InternSummary";
import { useState } from "react";

export default function InternPage() {
  const [submittedAnswers, setSubmittedAnswers] = useState<any | null>(null);
  const [therapyClicked, setTherapyClicked] = useState(false);
  return (
    <div className="min-h-screen bg-[#E6F7F1] font-sans">
      {/* Navbar */}
      <Navbar />

      <main className="mx-auto p-6 grid grid-cols-1 gap-8 items-start">
        <div>
          <Questionnaire
            onSubmit={(answers) => {
              setSubmittedAnswers(answers);
            }}
          />
        </div>

        <div>
          <TherapyPlayerIntern
            onTherapy={() => {
              setTherapyClicked(true);
            }}
          />
        </div>

        {submittedAnswers && therapyClicked && (
          <div>
            <InternSummary data={submittedAnswers} />
          </div>
        )}
      </main>
    </div>
  );
}
