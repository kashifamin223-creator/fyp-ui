"use client";

import React, { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  scores: number[];
}

const harassmentQuestions: Question[] = [
  {
    id: 1,
    question: "How do you feel when you're around other kids at school or online?",
    options: [
      "I feel comfortable and happy",
      "Sometimes I feel a little nervous",
      "I often feel worried or scared",
      "I feel very scared most of the time"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 2,
    question: "Has anyone ever said mean things to you that made you feel bad about yourself?",
    options: [
      "No, people are usually nice to me",
      "Sometimes people say things that bother me",
      "Often people say mean things",
      "People say very mean things to me almost every day"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 3,
    question: "Do you feel safe when you're using the internet or social media?",
    options: [
      "Yes, I feel safe online",
      "Sometimes I feel worried about what people might say",
      "I often feel scared or uncomfortable online",
      "I feel very unsafe and scared online"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 4,
    question: "Have you ever been left out on purpose by other kids?",
    options: [
      "No, I'm usually included",
      "Sometimes I feel left out",
      "I often get left out of activities",
      "I'm almost always left out and feel alone"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 5,
    question: "How do you feel about going to school each day?",
    options: [
      "I'm happy to go to school",
      "Sometimes I don't want to go",
      "I often try to avoid going to school",
      "I really don't want to go and feel scared"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 6,
    question: "Has anyone ever taken your things without asking or broken them on purpose?",
    options: [
      "No, that never happens",
      "Sometimes people take my things",
      "Often people take or break my things",
      "People take or break my things almost every day"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 7,
    question: "Do you have someone you can talk to about problems with other kids?",
    options: [
      "Yes, I have adults who help me",
      "Sometimes I can talk to people",
      "I find it hard to talk about these problems",
      "I feel like I have no one to talk to"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 8,
    question: "How often do you feel sad or angry because of how others treat you?",
    options: [
      "Rarely, I usually feel good",
      "Sometimes I feel sad or angry",
      "Often I feel sad or angry",
      "I feel sad or angry almost all the time"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 9,
    question: "Do you believe in yourself and your ability to handle difficult situations?",
    options: [
      "Yes, I feel confident and strong",
      "Sometimes I feel confident",
      "I often doubt myself",
      "I rarely feel confident in myself"
    ],
    scores: [0, 1, 2, 3]
  }
];

export default function HarassmentQuestionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(harassmentQuestions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < harassmentQuestions.length - 1) {
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
      return total + harassmentQuestions[questionIndex].scores[answerIndex];
    }, 0);
  };

  const getRiskLevel = () => {
    const score = getTotalScore();
    const maxScore = harassmentQuestions.length * 3;
    const percentage = (score / maxScore) * 100;

    if (percentage <= 25) return { level: "Low Risk", color: "green", message: "You're doing well! Keep building positive relationships." };
    if (percentage <= 50) return { level: "Mild Concern", color: "yellow", message: "Some challenges exist. Consider talking to a trusted adult." };
    if (percentage <= 75) return { level: "Moderate Concern", color: "orange", message: "You're facing difficult situations. Please seek support from adults." };
    return { level: "High Concern", color: "red", message: "Immediate support needed. Please talk to a trusted adult right away." };
  };

  if (showResults) {
    const riskLevel = getRiskLevel();
    const score = getTotalScore();
    const maxScore = harassmentQuestions.length * 3;

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

        <div className="bg-red-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold mb-2 text-red-800">Important Resources:</h4>
          <ul className="text-left text-sm space-y-2">
            <li>• Talk to a trusted adult (parent, teacher, counselor)</li>
            <li>• Call helpline: 1121</li>
            <li>• Keep a record of what happens</li>
            <li>• Remember: It's not your fault and you deserve to be safe</li>
          </ul>
        </div>

        <button
          onClick={() => {
            setShowResults(false);
            setCurrentQuestion(0);
            setAnswers(new Array(harassmentQuestions.length).fill(-1));
          }}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Retake Assessment
        </button>
      </div>
    );
  }

  const question = harassmentQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / harassmentQuestions.length) * 100;

  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Question {currentQuestion + 1} of {harassmentQuestions.length}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="bg-gray-200 rounded-full h-2">
          <div 
            className="bg-red-600 h-2 rounded-full transition-all duration-300"
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
                  ? "border-red-500 bg-red-50"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                  answers[currentQuestion] === index
                    ? "border-red-500 bg-red-500"
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
              : "bg-red-600 text-white hover:bg-red-700"
          }`}
        >
          {currentQuestion === harassmentQuestions.length - 1 ? "See Results" : "Next"}
        </button>
      </div>
    </div>
  );
}
