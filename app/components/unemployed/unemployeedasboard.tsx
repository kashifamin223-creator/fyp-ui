"use client";

import Link from "next/link";

export default function UnemployedDasbard({ stats }: { stats?: any }) {
  // If stats provided, show a simple summary / stats view
  if (stats) {
    const severity = stats.phqScore >= 20 ? "Severe" : stats.phqScore >= 15 ? "Moderately severe" : stats.phqScore >= 10 ? "Moderate" : stats.phqScore >= 5 ? "Mild" : "Minimal";
    return (
      <section className="w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-[#064E3B] mb-3">Your Wellbeing Summary</h2>
        <div className="grid grid-cols-1 gap-3">
          <div className="p-4 bg-gray-50 rounded">
            <div className="text-sm text-gray-600">PHQ Score</div>
            <div className="text-3xl font-extrabold text-[#065F46]">{stats.phqScore}</div>
            <div className="text-sm text-gray-500">Severity: {severity}</div>
          </div>

          <div className="p-4 bg-gray-50 rounded">
            <div className="text-sm text-gray-600">Suicidal Ideation</div>
            <div className={`text-lg font-semibold ${stats.suicidal ? 'text-red-600' : 'text-[#065F46]'}`}>{stats.suicidal ? 'Reported — seek immediate help' : 'Not reported'}</div>
          </div>

          <div className="p-4 bg-gray-50 rounded">
            <div className="text-sm text-gray-600">Details</div>
            <div className="text-sm text-gray-700">Age: {stats.age || '—'} · Gender: {stats.gender || '—'} · Employment: {stats.employmentStatus || '—'}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white p-8 rounded-xl shadow-lg min-h-[520px]">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-[#064E3B] leading-tight">Support for Unemployed Students</h1>
        <p className="text-[#065F46] mt-2">Resources to help you find work, build skills, and access support services.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Job Listings" href="/student/unemployeed/jobs">Browse curated job openings suitable for graduates and entry-level applicants.</Card>
          <Card title="Skills Training" href="/student/unemployeed/training">Enroll in short courses and workshops to strengthen your resume and skills.</Card>
          <Card title="Resume & Interview" href="/student/unemployeed/resume">Templates, tips, and mock interviews to help you succeed.</Card>
          <Card title="Support Services" href="/student/unemployeed/support">Financial guidance, counseling, and community support while you transition.</Card>
        </div>
      </div>
    </section>
  );
}

function Card({ title, children, href }: { title: string; children: React.ReactNode; href: string }) {
  return (
    <div className="p-5 bg-gradient-to-br from-white to-green-50 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-[#065F46] mb-2">{title}</h3>
      <p className="text-sm text-[#065F46] mb-3">{children}</p>
      <Link href={href} className="inline-block px-3 py-2 bg-[#10B981] text-white rounded text-sm">Open</Link>
    </div>
  );
}
