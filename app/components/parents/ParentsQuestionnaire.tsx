"use client";

import React, { useState } from "react";
import { apiService, handleApiResponse, UserSession } from "../../services/api";

const QUESTIONS: string[] = [
  "I can balance parenting with my other responsibilities.",
  "I feel supported by my partner, family, or community.",
  "I have time for self-care and personal needs.",
  "I feel patient and in control when caring for my children.",
  "Parenting stress does not significantly affect my wellbeing.",
  "I can ask for help when I need it.",
  "I feel confident in my parenting decisions.",
  "I have adequate resources to meet my family's needs.",
  "Overall, I feel positive about my role as a parent.",
];

type Props = {
  onSubmit?: (data: any) => void;
  onRecommend?: (videoId: string | null) => void;
};

export default function ParentsQuestionnaire({ onSubmit, onRecommend }: Props) {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [parentingRole, setParentingRole] = useState("");
  const [numChildren, setNumChildren] = useState("");
  const [diagnosed, setDiagnosed] = useState("");
  const [treatment, setTreatment] = useState<string[]>([]);

  const [agreeAnswers, setAgreeAnswers] = useState<number[]>(Array(QUESTIONS.length).fill(-1));
  const [submitted, setSubmitted] = useState(false);
  const [stats, setStats] = useState<any | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');

  function toggleTreatment(value: string) {
    setTreatment((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  }

  function setAgree(index: number, value: number) {
    const copy = [...agreeAnswers];
    copy[index] = value;
    setAgreeAnswers(copy);
  }

  const submitForm = async () => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const user = UserSession.getUser();
      const userId = user?.id || 0;

      const formData = {
        id: 0,
        userid: userId,
        age: parseInt(age) || 0,
        gender: gender || "string",
        parenting: parentingRole || "string",
        number: parseInt(numChildren) || 0,
        diagnosed: diagnosed === "yes",
        support: treatment.join(", ") || "string",
        q1: agreeAnswers[0] === 1,
        q2: agreeAnswers[1] === 1,
        q3: agreeAnswers[2] === 1,
        q4: agreeAnswers[3] === 1,
        q5: agreeAnswers[4] === 1,
        q6: agreeAnswers[5] === 1,
        q7: agreeAnswers[6] === 1,
        q8: agreeAnswers[7] === 1,
        q9: agreeAnswers[8] === 1,
      };

      handleApiResponse(
        await apiService.submitParentsForm(formData),
        (data) => {
          console.log("Parents form submitted successfully:", data);
        },
        (error) => {
          console.error("Parents form submission failed:", error);
          setSubmitError(error || 'Failed to submit form');
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    const allValues = agreeAnswers.map((v) => (v === 1 ? 1 : 0));
    const answeredValues = allValues.filter((_, i) => agreeAnswers[i] !== -1);
    const answeredCount = answeredValues.length;
    const useValues = answeredCount > 0 ? answeredValues : allValues;
    const denom = useValues.length;
    const agreeSum = useValues.reduce<number>((a, b) => a + b, 0);
    const agreePercent = Math.round((agreeSum / denom) * 100);
    const mean = agreeSum / denom;
    const variance =
      useValues.reduce<number>((acc, val) => acc + Math.pow(val - mean, 2), 0) / denom;
    const std = Math.sqrt(variance);

    let stressLevel = "Low";
    let outlook = "Positive";
    if (agreePercent >= 70) {
      outlook = "Positive";
      stressLevel = "Low";
    } else if (agreePercent >= 40) {
      outlook = "Moderate";
      stressLevel = "Moderate";
    } else {
      outlook = "Challenged";
      stressLevel = "High";
    }

    const payload = {
      age,
      gender,
      parentingRole,
      numChildren,
      diagnosed,
      treatment,
      agreeAnswers,
      answeredCount,
      agreeSum,
      agreePercent,
      mean,
      std,
      outlook,
      stressLevel,
    };
    setStats({ agreeSum, agreePercent, mean, std, outlook, stressLevel, answeredCount });
    onSubmit?.(payload);

    // Submit form to API
    submitForm();

    // Stress management for parents videos (same category as WOpzqZrLA3w)
    let recommendedId: string | null = null;
    if (stressLevel === "High") {
      recommendedId = "WOpzqZrLA3w"; // Stress management for parents
    } else if (stressLevel === "Moderate") {
      recommendedId = "igeZrXAvxaI"; // 5 Stress Management Strategies for Parents
    } else {
      recommendedId = "WarhwKYtFnQ"; // Help! My Kid is Stressing Me Out
    }
    onRecommend?.(recommendedId);
  }

  return (
    <section className="w-full bg-white p-8 rounded-xl shadow-lg">
      <div className="mb-4">
        <h2 className="text-2xl font-extrabold text-[#064E3B]">Parents Dashboard</h2>
        <p className="text-sm text-gray-600 mt-1">
          A short confidential screen to assess parenting-related stress and wellbeing. Your responses are private.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            className="p-3 border border-gray-200 rounded-lg bg-gray-50"
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="p-3 border border-gray-200 rounded-lg bg-gray-50"
          >
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            <option>Prefer not to say</option>
          </select>
          <select
            value={parentingRole}
            onChange={(e) => setParentingRole(e.target.value)}
            className="p-3 border border-gray-200 rounded-lg bg-gray-50"
          >
            <option value="">Parenting role</option>
            <option>Single parent</option>
            <option>Co-parent</option>
            <option>Primary caregiver</option>
            <option>Other</option>
          </select>
          <select
            value={numChildren}
            onChange={(e) => setNumChildren(e.target.value)}
            className="p-3 border border-gray-200 rounded-lg bg-gray-50"
          >
            <option value="">Number of children</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4+</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="font-semibold text-sm">Have you ever been diagnosed with a mental health condition?</label>
          <div className="mt-2 flex gap-4">
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="diagnosed" value="yes" onChange={(e) => setDiagnosed(e.target.value)} /> <span>Yes</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="diagnosed" value="no" onChange={(e) => setDiagnosed(e.target.value)} /> <span>No</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="font-semibold text-sm">Current support (choose any)</label>
          <div className="mt-2 flex gap-4">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" onChange={() => toggleTreatment("Therapy")} /> <span>Therapy</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" onChange={() => toggleTreatment("Parenting group")} /> <span>Parenting group</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" onChange={() => toggleTreatment("Medication")} /> <span>Medication</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" onChange={() => toggleTreatment("None")} /> <span>None</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="font-semibold">9 quick statements — Parenting stress & wellbeing</label>
          <p className="text-xs text-gray-600">Select Agree or Disagree for each statement.</p>
          <div className="mt-3 space-y-3">
            {QUESTIONS.map((q, i) => (
              <div key={i} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                <div className="w-3/4 text-sm text-gray-700">
                  {i + 1}. {q}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setAgree(i, 1)}
                    className={`px-3 py-1 rounded ${agreeAnswers[i] === 1 ? "bg-[#10B981] text-white" : "bg-white border"}`}
                  >
                    Agree
                  </button>
                  <button
                    type="button"
                    onClick={() => setAgree(i, 0)}
                    className={`px-3 py-1 rounded ${agreeAnswers[i] === 0 ? "bg-red-100 text-red-700" : "bg-white border"}`}
                  >
                    Disagree
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 rounded-lg font-medium ${
              isSubmitting
                ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                : "bg-[#10B981] text-white hover:bg-green-600"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
        {submitError && (
          <div className="text-red-600 bg-red-50 p-3 rounded-lg text-sm">
            Error: {submitError}
          </div>
        )}
        {stats && (
          <div className="mt-4 p-3 border rounded bg-gray-50">
            <h4 className="font-semibold">Quick analysis</h4>
            <p className="text-sm">Agree percent = (Sum of Agree answers / {QUESTIONS.length}) × 100</p>
            <div className="mt-2 text-sm">
              <div>
                Sum of Agree answers: <strong>{stats.agreeSum}</strong>
              </div>
              <div>
                Agree percent: <strong>{stats.agreePercent}%</strong>
              </div>
              <div>
                Mean: <strong>{typeof stats.mean === "number" ? stats.mean.toFixed(2) : "—"}</strong>
              </div>
              <div>
                Std dev: <strong>{typeof stats.std === "number" ? stats.std.toFixed(2) : "—"}</strong>
              </div>
              <div className="mt-1">
                Wellbeing outlook: <strong>{stats.outlook}</strong>
              </div>
              <div className="mt-1">
                Inferred stress level: <strong>{stats.stressLevel}</strong>
              </div>
            </div>
          </div>
        )}

        <div className="mt-4 text-xs text-red-600">
          If you indicated any thoughts of self-harm, please seek immediate help from local emergency services or your nearest crisis hotline.
        </div>
      </form>
    </section>
  );
}
