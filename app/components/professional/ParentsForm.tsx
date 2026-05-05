"use client";

import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { apiService, handleApiResponse, UserSession } from "../../services/api";
import { ParentsFormRequest } from "../../services/api";

export default function ParentsForm() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<ParentsFormRequest>({
    id: 0,
    userid: 0,
    age: 0,
    gender: "",
    parenting: "",
    number: 0,
    diagnosed: false,
    support: "",
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
    q6: false,
    q7: false,
    q8: false,
    q9: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof ParentsFormRequest, value: any) => {
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
      await apiService.submitParentsForm(submissionData),
      (data) => {
        console.log("Parents form submitted successfully:", data);
        alert("Assessment submitted successfully!");
      },
      (error) => {
        console.error("Parents form submission failed:", error);
        alert(`Submission failed: ${error}`);
      }
    );

    setIsSubmitting(false);
  };

  return (
    <div className={`max-w-4xl mx-auto p-8 rounded-2xl shadow-xl ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <h2 className={`text-2xl font-bold mb-6 ${
        theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
      }`}>
        Parent Assessment Form
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
                Parenting Style
              </label>
              <input
                type="text"
                value={formData.parenting}
                onChange={(e) => handleInputChange('parenting', e.target.value)}
                className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                  theme === 'dark' 
                    ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                    : 'border-gray-300 focus:ring-blue-400'
                }`}
                placeholder="e.g., Authoritative, Permissive"
              />
            </div>

            <div>
              <label className={`block font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Number of Children
              </label>
              <input
                type="number"
                value={formData.number}
                onChange={(e) => handleInputChange('number', parseInt(e.target.value))}
                className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                  theme === 'dark' 
                    ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                    : 'border-gray-300 focus:ring-blue-400'
                }`}
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
          
          <div className="space-y-3">
            {[
              "I feel overwhelmed with parenting responsibilities",
              "I have trouble balancing work and family life",
              "I often feel anxious about my children's well-being",
              "I struggle with discipline and setting boundaries",
              "I feel isolated from other parents",
              "I have difficulty managing my own emotions",
              "I worry about being a good enough parent",
              "I feel guilty about my parenting decisions",
              "I need help with stress management"
            ].map((question, index) => (
              <label key={index} className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData[`q${index + 1}` as keyof ParentsFormRequest] as boolean}
                  onChange={(e) => handleInputChange(`q${index + 1}` as keyof ParentsFormRequest, e.target.checked)}
                  className="mt-1 mr-3"
                />
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {question}
                </span>
              </label>
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
