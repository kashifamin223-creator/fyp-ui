"use client";

import React, { useState } from "react";
import { submitInternForm } from "@/app/services/internApi";

const QUESTIONS: string[] = [
  "I feel motivated to learn new skills.",
  "I can manage my workload effectively.",
  "I receive useful feedback from mentors.",
  "I feel included by my team.",
  "I can ask for help when I need it.",
  "My goals for this internship are clear.",
  "I have the resources I need to do good work.",
  "I feel confident presenting my ideas.",
  "Overall, this internship is positively impacting me.",
];


type Props = {
  onSubmit?: (data: any) => void;
};

export default function Questionnaire({ onSubmit }: Props) {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [internStatus, setInternStatus] = useState("");
  const [diagnosed, setDiagnosed] = useState("");
  const [treatment, setTreatment] = useState<string[]>([]);

  // binary agree/disagree for the 9 questions: 1 = agree, 0 = disagree, -1 = unanswered
  const [agreeAnswers, setAgreeAnswers] = useState<number[]>(Array(QUESTIONS.length).fill(-1));
  const [submitted, setSubmitted] = useState(false);
  const [stats, setStats] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function toggleTreatment(value: string) {
    setTreatment((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  }


  function setAgree(index: number, value: number) {
    const copy = [...agreeAnswers];
    copy[index] = value;
    setAgreeAnswers(copy);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      setSubmitted(true);
      // compute simple statistics over agree/disagree (agree=1, disagree=0, unanswered treated as 0)
      const values: number[] = agreeAnswers.map((v) => (v === 1 ? 1 : 0));
      const agreeSum = values.reduce((a: number, b: number) => a + b, 0);
      const agreePercent = Math.round((agreeSum / QUESTIONS.length) * 100);
      const mean = agreeSum / QUESTIONS.length;
      const variance = values.reduce((a: number, b: number) => a + Math.pow(b - mean, 2), 0) / QUESTIONS.length;
      const std = Math.sqrt(variance);
      let stressLevel = "Low";
      if (agreePercent >= 70) stressLevel = "High";
      else if (agreePercent >= 40) stressLevel = "Moderate";

      const localStats = { agreeSum, agreePercent, mean, std, stressLevel };
      setStats(localStats);

      // Map form data to API payload
      const apiPayload = {
        id: 0,
        userid: 0, // TODO: Replace with actual user ID from auth
        age: parseInt(age) || 0,
        gender,
        status: internStatus,
        diagnosed: diagnosed === "yes",
        treatment: treatment.join(", "),
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

      // Submit to API
      const response = await submitInternForm(apiPayload);
      console.log("Form submitted successfully:", response);

      // Call optional callback
      onSubmit?.({ ...apiPayload, ...localStats });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to submit form";
      setError(errorMessage);
      console.error("Form submission error:", err);
      setSubmitted(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="w-full bg-white p-8 rounded-xl shadow-lg">
      <div className="mb-4">
        <h2 className="text-2xl font-extrabold text-[#064E3B]">Intern Dashboard</h2>
        <p className="text-sm text-gray-600 mt-1">Welcome — complete the quick 9-question check-in and try a short therapy video.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" className="p-3 border border-gray-200 rounded-lg bg-gray-50" />
          <select value={gender} onChange={(e) => setGender(e.target.value)} className="p-3 border border-gray-200 rounded-lg bg-gray-50">
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            <option>Prefer not to say</option>
          </select>
          <select value={internStatus} onChange={(e) => setInternStatus(e.target.value)} className="p-3 border border-gray-200 rounded-lg bg-gray-50">
            <option value="">Intern status</option>
            <option>Intern - Full-time</option>
            <option>Intern - Part-time</option>
            <option>Intern - Remote</option>
            <option>Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="font-semibold text-sm">Have you ever been diagnosed with a mental health condition?</label>
          <div className="mt-2 flex gap-4">
            <label className="inline-flex items-center gap-2"><input type="radio" name="diagnosed" value="yes" onChange={(e) => setDiagnosed(e.target.value)} /> <span>Yes</span></label>
            <label className="inline-flex items-center gap-2"><input type="radio" name="diagnosed" value="no" onChange={(e) => setDiagnosed(e.target.value)} /> <span>No</span></label>
          </div>
        </div>

        <div className="mb-4">
          <label className="font-semibold text-sm">Current treatment (choose any)</label>
          <div className="mt-2 flex gap-4">
            <label className="inline-flex items-center gap-2"><input type="checkbox" onChange={() => toggleTreatment("Medication")} /> <span>Medication</span></label>
            <label className="inline-flex items-center gap-2"><input type="checkbox" onChange={() => toggleTreatment("Therapy")} /> <span>Therapy</span></label>
            <label className="inline-flex items-center gap-2"><input type="checkbox" onChange={() => toggleTreatment("None")} /> <span>None</span></label>
          </div>
        </div>

        <div className="mb-4">
          <label className="font-semibold">9 quick statements (Agree / Disagree)</label>
          <p className="text-xs text-gray-600">Select Agree or Disagree for each statement. Agree = 1, Disagree = 0.</p>
          <div className="mt-3 space-y-3">
            {QUESTIONS.map((q, i) => (
              <div key={i} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                <div className="w-3/4 text-sm text-gray-700">{i + 1}. {q}</div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => setAgree(i, 1)} className={`px-3 py-1 rounded ${agreeAnswers[i]===1 ? 'bg-[#10B981] text-white' : 'bg-white border'}`}>Agree</button>
                  <button type="button" onClick={() => setAgree(i, 0)} className={`px-3 py-1 rounded ${agreeAnswers[i]===0 ? 'bg-red-100 text-red-700' : 'bg-white border'}`}>Disagree</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PHQ section removed as requested */}

        <div className="flex items-center gap-3">
          <button type="submit" disabled={isLoading} className={`px-4 py-2 rounded-lg font-medium ${isLoading ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-[#10B981] text-white hover:bg-[#059669]'}`}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>

        {error && (
          <div className="mt-4 p-3 border border-red-300 rounded bg-red-50">
            <p className="text-sm text-red-700"><strong>Error:</strong> {error}</p>
          </div>
        )}
        {stats && (
          <div className="mt-4 p-3 border rounded bg-gray-50">
            <h4 className="font-semibold">Stress calculation</h4>
            <p className="text-sm">Formula: agreePercent = (Sum of Agree answers / {QUESTIONS.length}) × 100</p>
            <p className="text-sm">Then stress level = Low if &lt;40%, Moderate if 40–69%, High if ≥70%.</p>
            <div className="mt-2 text-sm">
              <div>Sum of Agree answers: <strong>{stats.agreeSum}</strong></div>
              <div>Agree percent: <strong>{stats.agreePercent}%</strong></div>
              <div>Mean: <strong>{typeof stats.mean === 'number' ? stats.mean.toFixed(2) : '—'}</strong></div>
              <div>Std dev: <strong>{typeof stats.std === 'number' ? stats.std.toFixed(2) : '—'}</strong></div>
              <div className="mt-1">Inferred stress level: <strong>{stats.stressLevel}</strong></div>
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
