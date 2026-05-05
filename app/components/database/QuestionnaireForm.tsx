"use client";

import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { 
  QuestionnaireResponse, 
  Questionnaire, 
  sampleQuestionnaire,
  getAnswerText,
  calculateScores,
  getRiskLevel 
} from "./DatabaseSchema";
import { apiService, handleApiResponse, UserSession } from "../../services/api";
import { useRouter } from "next/navigation";

interface Props {
  onSubmit?: (response: QuestionnaireResponse) => void;
  initialData?: Partial<QuestionnaireResponse>;
  showResults?: boolean;
  formType?: 'trauma' | 'harassment' | 'child';
}

export default function QuestionnaireForm({ onSubmit, initialData, showResults = false, formType = 'trauma' }: Props) {
  const { theme } = useTheme();
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<QuestionnaireResponse>({
    userid: initialData?.userid || 0,
    q1: initialData?.q1 || 0,
    q2: initialData?.q2 || 0,
    q3: initialData?.q3 || 0,
    q4: initialData?.q4 || 0,
    q5: initialData?.q5 || 0,
    q6: initialData?.q6 || 0,
    q7: initialData?.q7 || 0,
    q8: initialData?.q8 || 0,
    q9: initialData?.q9 || 0,
  });
  const [showScore, setShowScore] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswerChange = (questionId: number, answerIndex: number) => {
    const key = `q${questionId}` as keyof QuestionnaireResponse;
    setResponses(prev => ({
      ...prev,
      [key]: answerIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < sampleQuestionnaire.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowScore(true);
      submitForm();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const submitForm = async () => {
    // Get current user ID from session
    const user = UserSession.getUser();
    const userId = user?.id || responses.userid || 0;
    
    const submissionData = {
      ...responses,
      userid: userId
    };

    setIsSubmitting(true);

    let apiCall;
    switch (formType) {
      case 'trauma':
        apiCall = apiService.submitTraumaForm(submissionData);
        break;
      case 'harassment':
        apiCall = apiService.submitHarassmentForm(submissionData);
        break;
      case 'child':
        apiCall = apiService.submitChildForm(submissionData);
        break;
      default:
        apiCall = apiService.submitTraumaForm(submissionData);
    }

    const success = handleApiResponse(
      await apiCall,
      (data) => {
        console.log(`${formType} form submitted successfully:`, data);
        if (onSubmit) {
          onSubmit(submissionData);
        }
      },
      (error) => {
        console.error(`${formType} form submission failed:`, error);
        alert(`Submission failed: ${error}`);
      }
    );

    setIsSubmitting(false);
  };

  const handleSubmit = async () => {
    setShowScore(true);
    await submitForm();
  };

  const scores = calculateScores(responses, sampleQuestionnaire);
  const riskLevel = getRiskLevel(scores);

  if (showScore && showResults) {
    return (
      <div className={`max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}>
        <h2 className={`text-xl sm:text-2xl font-bold mb-6 text-center ${
          theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
        }`}>
          Assessment Results
        </h2>

        <div className={`mb-6 sm:mb-8 p-4 sm:p-6 rounded-lg text-center ${
          riskLevel === 'Low Risk' ? 'bg-green-100 text-green-800' :
          riskLevel === 'Moderate Risk' ? 'bg-yellow-100 text-yellow-800' :
          riskLevel === 'High Risk' ? 'bg-orange-100 text-orange-800' :
          'bg-red-100 text-red-800'
        }`}>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Risk Level: {riskLevel}</h3>
          <p className="text-sm sm:text-base">
            {riskLevel === 'Low Risk' && 'Your mental health appears to be in good condition.'}
            {riskLevel === 'Moderate Risk' && 'You may benefit from some support and self-care strategies.'}
            {riskLevel === 'High Risk' && 'Professional support is recommended.'}
            {riskLevel === 'Very High Risk' && 'Immediate professional support is strongly recommended.'}
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          <h3 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
          }`}>
            Category Scores
          </h3>
          {Object.entries(scores).map(([category, score]) => (
            <div key={category} className={`p-3 sm:p-4 rounded-lg ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <span className={`font-medium text-sm sm:text-base ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  {category}
                </span>
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Score: {score}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                <div 
                  className={`h-2 sm:h-3 rounded-full ${
                    score <= 1 ? 'bg-green-500' :
                    score <= 2 ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}
                  style={{ width: `${(score / 3) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className={`p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 ${
          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
        }`}>
          <h3 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
          }`}>
            Your Responses
          </h3>
          <div className="space-y-2 sm:space-y-3">
            {sampleQuestionnaire.questions.map((question, index) => {
              const answerKey = `q${index + 1}` as keyof QuestionnaireResponse;
              const answer = responses[answerKey] as number;
              return (
                <div key={question.id} className={`p-2 sm:p-3 rounded ${
                  theme === 'dark' ? 'bg-gray-600' : 'bg-white'
                }`}>
                  <p className={`text-sm font-medium mb-1 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    {question.text}
                  </p>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Answer: {getAnswerText(question, answer)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowScore(false)}
            className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition ${
              theme === 'dark' 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Back to Questions
          </button>
        </div>
      </div>
    );
  }

  const question = sampleQuestionnaire.questions[currentQuestion];
  const answerKey = `q${currentQuestion + 1}` as keyof QuestionnaireResponse;
  const currentAnswer = responses[answerKey] as number;

  return (
    <div className={`max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 space-y-2 sm:space-y-0">
          <span className={`text-sm font-medium ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Question {currentQuestion + 1} of {sampleQuestionnaire.questions.length}
          </span>
          <span className={`text-sm font-medium ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {Math.round(((currentQuestion + 1) / sampleQuestionnaire.questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / sampleQuestionnaire.questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-6 sm:mb-8">
        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
          theme === 'dark' ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
        }`}>
          {question.category}
        </div>
        <h2 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 ${
          theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
        }`}>
          {question.text}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`block p-3 sm:p-4 rounded-lg border-2 cursor-pointer transition-all ${
                currentAnswer === index
                  ? theme === 'dark'
                    ? 'border-blue-500 bg-blue-900'
                    : 'border-blue-500 bg-blue-50'
                  : theme === 'dark'
                    ? 'border-gray-600 bg-gray-700 hover:border-gray-500'
                    : 'border-gray-300 bg-white hover:border-gray-400'
              }`}
            >
              <div className="flex items-start">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={index}
                  checked={currentAnswer === index}
                  onChange={() => handleAnswerChange(question.id, index)}
                  className="mt-1 mr-3"
                />
                <span className={`text-sm sm:text-base ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-700'
                }`}>
                  {option}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition order-2 sm:order-1 ${
            currentQuestion === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : theme === 'dark'
                ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Previous
        </button>

        {currentQuestion === sampleQuestionnaire.questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition order-1 sm:order-2 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : theme === 'dark'
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
          </button>
        ) : (
          <button
            onClick={handleNext}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition order-1 sm:order-2 ${
              theme === 'dark'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Next
          </button>
        )}
      </div>

      {/* Quick Submit Button */}
      {showResults && (
        <div className="mt-4 text-center">
          <button
            onClick={handleSubmit}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              theme === 'dark'
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            View Results
          </button>
        </div>
      )}
    </div>
  );
}
