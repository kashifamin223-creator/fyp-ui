"use client";

import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { apiService, handleApiResponse, UserSession } from "../../services/api";
import { UnemployedFormRequest } from "../../services/api";

export default function UnemployedForm() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<UnemployedFormRequest>({
    id: 0,
    userid: 0,
    age: 0,
    gender: "",
    employment: "",
    diagnosed: false,
    support: "",
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    q5: 0,
    q6: 0,
    q7: 0,
    q8: 0,
    q9: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof UnemployedFormRequest, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get current user ID from session
    const user = UserSession.getUser();
    const userId = user?.id || 0;

    const submissionData = {
      ...formData,
      userid: userId
    };

    const success = handleApiResponse(
      await apiService.submitUnemployedForm(submissionData),
      (data) => {
        console.log("Unemployed form submitted successfully:", data);
        alert("Assessment submitted successfully!");
      },
      (error) => {
        console.error("Unemployed form submission failed:", error);
        alert(`Submission failed: ${error}`);
      }
    );

    setIsSubmitting(false);
  };

  const questions = [
    "How would you rate your current stress level?",
    "How confident are you about finding employment?",
    "How often do you feel anxious about finances?",
    "How would you rate your overall mood?",
    "How well are you sleeping lately?",
    "How often do you feel hopeless about the future?",
    "How would you rate your self-esteem?",
    "How often do you socialize with others?",
    "How would you rate your ability to cope with stress?"
  ];

  return (
    <div className={`max-w-4xl mx-auto p-8 rounded-2xl shadow-xl ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <h2 className={`text-2xl font-bold mb-6 ${
        theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
      }`}>
        Unemployment Mental Health Assessment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className={`p-6 rounded-lg ${
          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
        }`}>
          <h3 className={`text-lg font-semibold mb-4 ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
          }`}>
            Personal Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Age
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
                className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                  theme === 'dark' 
                    ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                    : 'border-gray-300 focus:ring-blue-400'
                }`}
              />
            </div>

            <div>
              <label className={`block font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Gender
              </label>
              <select
                value={formData.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                  theme === 'dark' 
                    ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                    : 'border-gray-300 focus:ring-blue-400'
                }`}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className={`block font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Employment Status
              </label>
              <input
                type="text"
                value={formData.employment}
                onChange={(e) => handleInputChange('employment', e.target.value)}
                className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                  theme === 'dark' 
                    ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                    : 'border-gray-300 focus:ring-blue-400'
                }`}
                placeholder="e.g., Recently laid off, Long-term unemployed"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className={`block font-medium mb-2 ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Support System
            </label>
            <textarea
              value={formData.support}
              onChange={(e) => handleInputChange('support', e.target.value)}
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                theme === 'dark' 
                  ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                  : 'border-gray-300 focus:ring-blue-400'
              }`}
              rows={3}
              placeholder="Describe your support system..."
            />
          </div>

          <div className="mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.diagnosed}
                onChange={(e) => handleInputChange('diagnosed', e.target.checked)}
                className="mr-2"
              />
              <span className={`font-medium ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Previously diagnosed with mental health condition
              </span>
            </label>
          </div>
        </div>

        {/* Assessment Questions */}
        <div className={`p-6 rounded-lg ${
          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
        }`}>
          <h3 className={`text-lg font-semibold mb-4 ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
          }`}>
            Assessment Questions
          </h3>
          
          <div className="space-y-4">
            {questions.map((question, index) => (
              <div key={index}>
                <label className={`block font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  {question}
                </label>
                <select
                  value={formData[`q${index + 1}` as keyof UnemployedFormRequest] as number}
                  onChange={(e) => handleInputChange(`q${index + 1}` as keyof UnemployedFormRequest, parseInt(e.target.value))}
                  className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                    theme === 'dark' 
                      ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                      : 'border-gray-300 focus:ring-blue-400'
                  }`}
                >
                  <option value={0}>Never</option>
                  <option value={1}>Rarely</option>
                  <option value={2}>Sometimes</option>
                  <option value={3}>Often</option>
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 rounded-lg font-semibold transition ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : theme === 'dark' 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
          </button>
        </div>
      </form>
    </div>
  );
}
