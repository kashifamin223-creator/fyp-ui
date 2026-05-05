"use client";

import { useState } from "react";
import Navbar from "../components/Home/Nevbar";
import QuestionnaireForm from "../components/database/QuestionnaireForm";
import { QuestionnaireResponse } from "../components/database/DatabaseSchema";

export default function QuestionnairePage() {
  const [responses, setResponses] = useState<QuestionnaireResponse | null>(null);

  const handleQuestionnaireSubmit = (response: QuestionnaireResponse) => {
    console.log("Questionnaire Response:", response);
    setResponses(response);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Mental Health Assessment
            </h1>
            <p className="text-gray-600">
              Please answer all questions honestly to help us provide the best support for your needs.
            </p>
          </div>

          <QuestionnaireForm 
            onSubmit={handleQuestionnaireSubmit}
            showResults={true}
          />

          {responses && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Database Format Output
              </h2>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                <pre>{JSON.stringify(responses, null, 2)}</pre>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                This is the format that would be stored in your database with numeric answers (0-3) 
                corresponding to the multiple choice options.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
