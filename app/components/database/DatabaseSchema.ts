// Database Schema for Questionnaire System

export interface QuestionnaireResponse {
  userid: number;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  q5: number;
  q6: number;
  q7: number;
  q8: number;
  q9: number;
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  category: string;
}

export interface Questionnaire {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

// Sample questionnaire data
export const sampleQuestionnaire: Questionnaire = {
  id: 1,
  title: "Mental Health Assessment",
  description: "Please answer the following questions to help us understand your mental health needs.",
  questions: [
    {
      id: 1,
      text: "How often do you feel anxious or worried?",
      options: [
        "Never",
        "Rarely", 
        "Sometimes",
        "Often"
      ],
      category: "Anxiety"
    },
    {
      id: 2,
      text: "How would you rate your overall mood lately?",
      options: [
        "Very good",
        "Good",
        "Fair", 
        "Poor"
      ],
      category: "Mood"
    },
    {
      id: 3,
      text: "How well are you sleeping at night?",
      options: [
        "Very well",
        "Well",
        "Not well",
        "Very poorly"
      ],
      category: "Sleep"
    },
    {
      id: 4,
      text: "How often do you feel overwhelmed by daily tasks?",
      options: [
        "Never",
        "Rarely",
        "Sometimes",
        "Often"
      ],
      category: "Stress"
    },
    {
      id: 5,
      text: "How would you describe your energy levels?",
      options: [
        "Very high",
        "High",
        "Low",
        "Very low"
      ],
      category: "Energy"
    },
    {
      id: 6,
      text: "How often do you enjoy activities you used to like?",
      options: [
        "Always",
        "Often",
        "Sometimes",
        "Never"
      ],
      category: "Interest"
    },
    {
      id: 7,
      text: "How would you rate your ability to concentrate?",
      options: [
        "Excellent",
        "Good",
        "Fair",
        "Poor"
      ],
      category: "Focus"
    },
    {
      id: 8,
      text: "How often do you feel sad or depressed?",
      options: [
        "Never",
        "Rarely",
        "Sometimes",
        "Often"
      ],
      category: "Depression"
    },
    {
      id: 9,
      text: "How would you rate your overall stress level?",
      options: [
        "Very low",
        "Low",
        "High",
        "Very high"
      ],
      category: "Stress"
    }
  ]
};

// Sample response data matching the user's format
export const sampleResponses: QuestionnaireResponse[] = [
  {
    userid: 11,
    q1: 0,  // Never (index 0)
    q2: 0,  // Very good (index 0)
    q3: 1,  // Well (index 1)
    q4: 1,  // Rarely (index 1)
    q5: 1,  // High (index 1)
    q6: 1,  // Often (index 1)
    q7: 1,  // Good (index 1)
    q8: 1,  // Rarely (index 1)
    q9: 1   // Low (index 1)
  }
];

// Helper functions
export function getAnswerText(question: Question, answerIndex: number): string {
  if (answerIndex >= 0 && answerIndex < question.options.length) {
    return question.options[answerIndex];
  }
  return "Invalid answer";
}

export function calculateScores(response: QuestionnaireResponse, questionnaire: Questionnaire): Record<string, number> {
  const scores: Record<string, number> = {};
  
  questionnaire.questions.forEach((question, index) => {
    const answerKey = `q${index + 1}` as keyof QuestionnaireResponse;
    const answer = response[answerKey] as number;
    
    if (!scores[question.category]) {
      scores[question.category] = 0;
    }
    scores[question.category] += answer;
  });
  
  return scores;
}

export function getRiskLevel(scores: Record<string, number>): string {
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
  const maxPossibleScore = 9 * 3; // 9 questions, max score 3 each
  
  const percentage = (totalScore / maxPossibleScore) * 100;
  
  if (percentage <= 25) return "Low Risk";
  if (percentage <= 50) return "Moderate Risk";
  if (percentage <= 75) return "High Risk";
  return "Very High Risk";
}
