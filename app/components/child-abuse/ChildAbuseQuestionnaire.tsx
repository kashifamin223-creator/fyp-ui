"use client";

import React, { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  scores: number[];
}

const childAbuseQuestions: Question[] = [
  {
    id: 1,
    question: "Do you feel safe at home?",
    options: [
      "Yes, I feel very safe at home",
      "Sometimes I feel safe, sometimes I don't",
      "I often feel scared or unsafe at home",
      "I rarely feel safe at home"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 2,
    question: "How do the adults at home treat you?",
    options: [
      "They are always kind and loving",
      "Sometimes they're kind, sometimes they're not",
      "They often yell or say mean things",
      "They often hurt me or make me feel very scared"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 3,
    question: "Has anyone ever hurt your body on purpose?",
    options: [
      "No, never",
      "Sometimes people play too rough",
      "Sometimes people hurt me when they're angry",
      "People hurt me often and it makes me scared"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 4,
    question: "Do you have enough food, clothes, and a safe place to sleep?",
    options: [
      "Yes, I always have what I need",
      "Sometimes I don't have enough",
      "I often don't have enough food or warm clothes",
      "I rarely have enough food or a safe place to sleep"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 5,
    question: "How do you feel about yourself?",
    options: [
      "I feel good about myself",
      "Sometimes I feel good, sometimes I don't",
      "I often feel bad about myself",
      "I almost always feel bad about myself"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 6,
    question: "Has anyone ever touched you in a way that made you uncomfortable or scared?",
    options: [
      "No, never",
      "Sometimes people make me uncomfortable",
      "Someone has touched me in ways I don't like",
      "Someone often touches me in scary ways"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 7,
    question: "Do you have adults you can trust and talk to?",
    options: [
      "Yes, I have trusted adults who help me",
      "Sometimes I can talk to adults",
      "I find it hard to trust adults",
      "I feel like I have no adults I can trust"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 8,
    question: "How often do you feel scared, sad, or angry?",
    options: [
      "Rarely, I usually feel happy",
      "Sometimes I have big feelings",
      "I often feel scared, sad, or angry",
      "I almost always feel scared, sad, or angry"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 9,
    question: "Do you believe you deserve to be safe and happy?",
    options: [
      "Yes, I know I deserve to be safe and happy",
      "Sometimes I believe it, sometimes I don't",
      "I often feel like I don't deserve good things",
      "I rarely feel like I deserve to be safe or happy"
    ],
    scores: [0, 1, 2, 3]
  }
];

export default function ChildAbuseQuestionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(childAbuseQuestions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < childAbuseQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    setShowResults(true);
  };

  const getTotalScore = () => {
    return answers.reduce((total, answerIndex, questionIndex) => {
      if (answerIndex === -1) return total;
      return total + childAbuseQuestions[questionIndex].scores[answerIndex];
    }, 0);
  };

  const getRiskLevel = () => {
    const score = getTotalScore();
    const maxScore = childAbuseQuestions.length * 3;
    const percentage = (score / maxScore) * 100;

    if (percentage <= 25) return { level: "Low Risk", color: "green", message: "You seem to be in a safe situation. Keep talking to trusted adults." };
    if (percentage <= 50) return { level: "Some Concern", color: "yellow", message: "There might be some concerns. Consider talking to a trusted adult." };
    if (percentage <= 75) return { level: "High Concern", color: "orange", message: "You may be in a difficult situation. Please reach out for help." };
    return { level: "Urgent Concern", color: "red", message: "Please get help immediately. Call 911 or the child abuse hotline." };
  };

  if (showResults) {
    const riskLevel = getRiskLevel();
    const score = getTotalScore();
    const maxScore = childAbuseQuestions.length * 3;

    return (
      <div className="text-center">
        <div className="mb-6">
          <div className={`text-6xl mb-4 ${
            riskLevel.color === 'green' ? 'text-green-500' :
            riskLevel.color === 'yellow' ? 'text-yellow-500' :
            riskLevel.color === 'orange' ? 'text-orange-500' : 'text-red-500'
          }`}>
            {riskLevel.color === 'green' ? '😊' :
             riskLevel.color === 'yellow' ? '😐' :
             riskLevel.color === 'orange' ? '😟' : '😢'}
          </div>
          <h3 className="text-2xl font-bold mb-2">Risk Level: {riskLevel.level}</h3>
          <p className="text-gray-600 mb-4">{riskLevel.message}</p>
          <div className="bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className={`h-4 rounded-full ${
                riskLevel.color === 'green' ? 'bg-green-500' :
                riskLevel.color === 'yellow' ? 'bg-yellow-500' :
                riskLevel.color === 'orange' ? 'bg-orange-500' : 'bg-red-500'
              }`}
              style={{ width: `${(score / maxScore) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500">Score: {score} out of {maxScore}</p>
        </div>

        <div className="bg-purple-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold mb-2 text-purple-800">Important Truths:</h4>
          <ul className="text-left text-sm space-y-2">
            <li>• It is NEVER your fault when adults hurt you</li>
            <li>• You deserve to be safe, loved, and cared for</li>
            <li>• There are adults who want to help you</li>
            <li>• You are brave for speaking up</li>
          </ul>
        </div>

        <div className="bg-red-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold mb-2 text-red-800">Get Help Now:</h4>
          <ul className="text-left text-sm space-y-2">
            <li>• Call 911 if you're in immediate danger</li>
            <li>• Call Child Abuse Hotline: 1-800-4-A-CHILD</li>
            <li>• Tell a teacher, doctor, or another trusted adult</li>
            <li>• Text "SAFE" to 741741 for crisis support</li>
          </ul>
        </div>

        <button
          onClick={() => {
            setShowResults(false);
            setCurrentQuestion(0);
            setAnswers(new Array(childAbuseQuestions.length).fill(-1));
          }}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Retake Assessment
        </button>
      </div>
    );
  }

  const question = childAbuseQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / childAbuseQuestions.length) * 100;

  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Question {currentQuestion + 1} of {childAbuseQuestions.length}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="bg-gray-200 rounded-full h-2">
          <div 
            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          {question.question}
        </h3>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(currentQuestion, index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                answers[currentQuestion] === index
                  ? "border-purple-500 bg-purple-50"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                  answers[currentQuestion] === index
                    ? "border-purple-500 bg-purple-500"
                    : "border-gray-300"
                }`}>
                  {answers[currentQuestion] === index && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-gray-700">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={previousQuestion}
          disabled={currentQuestion === 0}
          className={`px-6 py-2 rounded-lg transition ${
            currentQuestion === 0
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Previous
        </button>
        <button
          onClick={nextQuestion}
          disabled={answers[currentQuestion] === -1}
          className={`px-6 py-2 rounded-lg transition ${
            answers[currentQuestion] === -1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-purple-600 text-white hover:bg-purple-700"
          }`}
        >
          {currentQuestion === childAbuseQuestions.length - 1 ? "See Results" : "Next"}
        </button>
      </div>
    </div>
  );
}
