"use client";

import React, { useState } from "react";

const QUESTIONS: string[] = [
  "I feel confident in my job-search skills (CV/interview).",
  "I understand the career paths available to my qualification.",
  "I have a clear plan for the next 6–12 months.",
  "Financial concerns are affecting my wellbeing.",
  "I feel able to network and approach potential employers.",
  "I can balance job search / applications with self-care.",
  "My skills match the roles I am applying for.",
  "I get constructive feedback on applications and interviews.",
  "Overall, I feel hopeful about my employment prospects.",
];

type Props = {
  onSubmit?: (data: any) => void;
  onRecommend?: (videoId: string | null) => void;
};

export default function GraduateQuestionnaire({ onSubmit, onRecommend }: Props) {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [diagnosed, setDiagnosed] = useState("");
  const [treatment, setTreatment] = useState<string[]>([]);

  const [agreeAnswers, setAgreeAnswers] = useState<number[]>(Array(QUESTIONS.length).fill(-1));
  const [submitted, setSubmitted] = useState(false);
  const [stats, setStats] = useState<any | null>(null);

  function toggleTreatment(value: string) {
    setTreatment((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  }

  function setAgree(index: number, value: number) {
    const copy = [...agreeAnswers];
    copy[index] = value;
    setAgreeAnswers(copy);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Build an array of 0/1 for only the answered items to compute unbiased stats
    const allValues = agreeAnswers.map((v) => (v === 1 ? 1 : 0));
    const answeredValues = allValues.filter((_, i) => agreeAnswers[i] !== -1);
    const answeredCount = answeredValues.length;
    const useValues = answeredCount > 0 ? answeredValues : allValues; // fallback when nothing answered
    const denom = useValues.length;
const agreeSum = useValues.reduce<number>((a, b) => a + b, 0);
    const agreePercent = Math.round((agreeSum / denom) * 100);
    const mean = agreeSum / denom;

const variance =
  useValues.reduce<number>((acc, val) => acc + Math.pow(val - mean, 2), 0) / denom;
      const std = Math.sqrt(variance);
    // For graduates, interpret agree% as better wellbeing / outlook.
    let outlook = "Positive";
    let stressLevel = "Low"; // Low stress when many positive responses
    if (agreePercent >= 70) {
      outlook = "Positive";
      stressLevel = "Low";
    } else if (agreePercent >= 40) {
      outlook = "Mixed";
      stressLevel = "Moderate";
    } else {
      outlook = "Challenged";
      stressLevel = "High";
    }

    const payload = { age, gender, employmentStatus, diagnosed, treatment, agreeAnswers, answeredCount, agreeSum, agreePercent, mean, std, outlook, stressLevel };
    setStats({ agreeSum, agreePercent, mean, std, outlook, stressLevel, answeredCount });
    onSubmit?.(payload);

    // Recommend videos based on stress level and education/career focus
    let recommendedId: string | null = null;
    if (stressLevel === "High") {
      // calming / grounding videos
      recommendedId = "XxVg_s8xAms"; // short breathing/relaxation sample (replaceable)
    } else if (stressLevel === "Moderate") {
      // balance + career mindset
      recommendedId = "3Z3-0pZV1Ww"; // example guided session
    } else {
      // positive / motivational video: user-provided Peter Dinklage short
      recommendedId = "_-2OL-UhjU4";
    }
    onRecommend?.(recommendedId);
  }

  return (
    <section className="w-full bg-white p-8 rounded-xl shadow-lg">
      <div className="mb-4">
        <h2 className="text-2xl font-extrabold text-[#064E3B]">Graduate Wellbeing & Career Check</h2>
        <p className="text-sm text-gray-600 mt-1">A short confidential screen focused on postgraduate/job-seeking wellbeing.</p>
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
          <select value={employmentStatus} onChange={(e) => setEmploymentStatus(e.target.value)} className="p-3 border border-gray-200 rounded-lg bg-gray-50">
            <option value="">Education level</option>
            <option>Bachelor's</option>
            <option>Graduate</option>
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
          <label className="font-semibold text-sm">Current support (choose any)</label>
          <div className="mt-2 flex gap-4">
            <label className="inline-flex items-center gap-2"><input type="checkbox" onChange={() => toggleTreatment("Career coaching")} /> <span>Career coaching</span></label>
            <label className="inline-flex items-center gap-2"><input type="checkbox" onChange={() => toggleTreatment("Therapy")} /> <span>Therapy</span></label>
            <label className="inline-flex items-center gap-2"><input type="checkbox" onChange={() => toggleTreatment("None")} /> <span>None</span></label>
          </div>
        </div>

        <div className="mb-4">
          <label className="font-semibold">9 quick statements (Agree / Disagree)</label>
          <p className="text-xs text-gray-600">Select Agree or Disagree for each statement.</p>
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

        <div className="flex items-center gap-3">
          <button type="submit" className="px-4 py-2 bg-[#10B981] text-white rounded-lg font-medium">Submit</button>
        </div>
        {stats && (
          <div className="mt-4 p-3 border rounded bg-gray-50">
            <h4 className="font-semibold">Quick analysis</h4>
            <p className="text-sm">Agree percent = (Sum of Agree answers / {QUESTIONS.length}) × 100</p>
            <div className="mt-2 text-sm">
              <div>Sum of Agree answers: <strong>{stats.agreeSum}</strong></div>
              <div>Agree percent: <strong>{stats.agreePercent}%</strong></div>
              <div>Mean: <strong>{typeof stats.mean === 'number' ? stats.mean.toFixed(2) : '—'}</strong></div>
              <div>Std dev: <strong>{typeof stats.std === 'number' ? stats.std.toFixed(2) : '—'}</strong></div>
              <div className="mt-1">Employment outlook: <strong>{stats.outlook}</strong></div>
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
