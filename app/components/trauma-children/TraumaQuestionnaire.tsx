"use client";

import React, { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  scores: number[];
}

const traumaQuestions: Question[] = [
  {
    id: 1,
    question: "How have you been sleeping lately?",
    options: [
      "I sleep well and wake up rested",
      "Sometimes I have trouble falling asleep",
      "I often wake up during the night",
      "I have nightmares or trouble sleeping most nights"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 2,
    question: "When you think about scary things that happened, how do you feel?",
    options: [
      "I don't think about scary things much",
      "Sometimes I feel a little worried",
      "I often feel scared or sad when I remember",
      "I feel very scared and it's hard to stop thinking about it"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 3,
    question: "How do you feel when you're around other kids or adults?",
    options: [
      "I feel comfortable and happy",
      "Sometimes I feel a little shy or nervous",
      "I often feel worried around people",
      "I feel scared or unsafe around most people"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 4,
    question: "Do you get angry or upset easily?",
    options: [
      "I usually stay calm",
      "Sometimes I get upset but calm down quickly",
      "I often feel angry and it's hard to calm down",
      "I feel very angry most of the time and might lose control"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 5,
    question: "How do you feel about going to school or doing activities?",
    options: [
      "I enjoy school and activities",
      "Sometimes I don't feel like going",
      "I often try to avoid school or activities",
      "I really don't want to go and feel scared"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 6,
    question: "Do you have scary dreams or thoughts that bother you?",
    options: [
      "I rarely have scary dreams",
      "Sometimes I have bad dreams",
      "I often have scary dreams or thoughts",
      "I have very scary dreams almost every night"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 7,
    question: "How do you feel about your body and health?",
    options: [
      "I feel healthy and strong",
      "Sometimes I have small aches or worries",
      "I often feel sick or have headaches/stomachaches",
      "My body often hurts and I feel sick a lot"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 8,
    question: "Do you feel like you can talk to grown-ups about your feelings?",
    options: [
      "Yes, I can talk to adults when I need to",
      "Sometimes I can talk, but not always",
      "I find it hard to talk about my feelings",
      "I never feel like I can talk to anyone about how I feel"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    id: 9,
    question: "How do you feel about the future?",
    options: [
      "I feel hopeful and excited about what's next",
      "Sometimes I feel good about the future",
      "I often worry about what might happen",
      "I feel very scared about the future"
    ],
    scores: [0, 1, 2, 3]
  }
];

export default function TraumaQuestionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(traumaQuestions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < traumaQuestions.length - 1) {
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
      return total + traumaQuestions[questionIndex].scores[answerIndex];
    }, 0);
  };

  const getStressLevel = () => {
    const score = getTotalScore();
    const maxScore = traumaQuestions.length * 3;
    const percentage = (score / maxScore) * 100;

    if (percentage <= 25) return { level: "Low", color: "green", message: "You're doing well! Keep using your coping skills." };
    if (percentage <= 50) return { level: "Mild", color: "yellow", message: "Some stress is normal. Try the breathing exercises and videos." };
    if (percentage <= 75) return { level: "Moderate", color: "orange", message: "You're going through a tough time. Consider talking to a trusted adult." };
    return { level: "High", color: "red", message: "Please talk to a counselor or trusted adult about how you're feeling." };
  };

  if (showResults) {
    const stressLevel = getStressLevel();
    const score = getTotalScore();
    const maxScore = traumaQuestions.length * 3;

    return (
      <div className="text-center">
        <div className="mb-6">
          <div className={`text-6xl mb-4 ${
            stressLevel.color === 'green' ? 'text-green-500' :
            stressLevel.color === 'yellow' ? 'text-yellow-500' :
            stressLevel.color === 'orange' ? 'text-orange-500' : 'text-red-500'
          }`}>
            {stressLevel.color === 'green' ? '😊' :
             stressLevel.color === 'yellow' ? '😐' :
             stressLevel.color === 'orange' ? '😟' : '😢'}
          </div>
          <h3 className="text-2xl font-bold mb-2">Your Stress Level: {stressLevel.level}</h3>
          <p className="text-gray-600 mb-4">{stressLevel.message}</p>
          <div className="bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className={`h-4 rounded-full ${
                stressLevel.color === 'green' ? 'bg-green-500' :
                stressLevel.color === 'yellow' ? 'bg-yellow-500' :
                stressLevel.color === 'orange' ? 'bg-orange-500' : 'bg-red-500'
              }`}
              style={{ width: `${(score / maxScore) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500">Score: {score} out of {maxScore}</p>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold mb-2">Recommended Next Steps:</h4>
          <ul className="text-left text-sm space-y-2">
            <li>• Watch the calming videos in the Healing Videos section</li>
            <li>• Try deep breathing exercises (4 counts in, 4 counts out)</li>
            <li>• Talk to a trusted adult about your feelings</li>
            <li>• Draw or write about your feelings in a journal</li>
          </ul>
        </div>

        <button
          onClick={() => {
            setShowResults(false);
            setCurrentQuestion(0);
            setAnswers(new Array(traumaQuestions.length).fill(-1));
          }}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Retake Assessment
        </button>
      </div>
    );
  }

  const question = traumaQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / traumaQuestions.length) * 100;

  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Question {currentQuestion + 1} of {traumaQuestions.length}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
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
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                  answers[currentQuestion] === index
                    ? "border-blue-500 bg-blue-500"
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
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {currentQuestion === traumaQuestions.length - 1 ? "See Results" : "Next"}
        </button>
      </div>
    </div>
  );
}
