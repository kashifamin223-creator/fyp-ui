"use client";

import Navbar from "../components/Home/Nevbar";

export default function VRARPage() {
  return (
    <div className="min-h-screen bg-[#E6F7F1] font-sans">
      <Navbar />

      <main className="mx-auto p-6 md:px-19 md:py-6 space-y-6">
        <section className="max-w-6xl rounded-3xl border border-[#10B981] bg-white/90 p-8 shadow-lg">
          <h1 className="text-6xl font-bold text-[#065F46]">VR / AR Therapy Video Guide</h1>
          <p className="mt-6 text-base text-[#134E4A] leading-7">
            This page shows where virtual reality and augmented reality videos can be added to support mental health therapy.
            Use immersive experiences to enhance therapy for anxiety, trauma, stress, and social support.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#D1FAE5] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#065F46]">Recommended VR/AR Video Areas</h2>
            <ul className="mt-4 space-y-3 text-[#134E4A] list-disc list-inside">
              <li>Exposure therapy for anxiety and specific phobias.</li>
              <li>Guided relaxation and mindfulness in immersive environments.</li>
              <li>Trauma recovery sessions with safe virtual scenarios.</li>
              <li>Social skills and confidence-building exercises.</li>
              <li>Stress reduction with calming AR or nature simulations.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#D1FAE5] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#065F46]">Target Audiences</h2>
            <ul className="mt-4 space-y-3 text-[#134E4A] list-disc list-inside">
              <li>Student wellness modules for immersive study-break sessions.</li>
              <li>Children and trauma support paths for safe VR healing stories.</li>
              <li>Professional care sections for burnout, stress, and workplace anxiety.</li>
              <li>Parent support videos for guided coping and family wellbeing.</li>
              <li>Special AR-assisted breathing and grounding routines.</li>
            </ul>
          </div>
        </section>

        <section className="max-w-4xl rounded-3xl border border-[#10B981] bg-white/90 p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-[#065F46] mb-6">VR / AR Therapy Videos</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { file: 'student1.mp4', title: 'Student 1' },
              { file: 'student2.mp4', title: 'Student 2' },
              { file: 'children1.mp4', title: 'Children 1' },
              { file: 'children2.mp4', title: 'Children 2' },
              { file: 'professionals.mp4', title: 'Professionals' },
            ].map((video, index) => (
              <div key={index} className="rounded-2xl border border-[#D1FAE5] bg-white p-4 shadow-sm">
                <h3 className="text-xl font-semibold text-[#065F46] mb-4">{video.title}</h3>
                <video width="100%" controls className="rounded-lg">
                  <source src={`/${video.file}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
