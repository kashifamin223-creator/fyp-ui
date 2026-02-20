"use client";

export default function GraduateSummary({ data }: { data: any }) {
  const { age, gender, employmentStatus, diagnosed, treatment, agreeAnswers, agreeSum, agreePercent, mean, std, outlook } = data;

  return (
    <section className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold text-[#064E3B]">Graduate Summary</h3>
      <p className="text-sm text-gray-600 mt-1">Here's a quick summary of your recent check-in.</p>

      <div className="mt-4 space-y-3">
        <div>
          <strong>Age:</strong> {age || '—'} • <strong>Gender:</strong> {gender || '—'} • <strong>Employment status:</strong> {employmentStatus || '—'}
        </div>

        <div>
          <strong>Diagnosed before:</strong> {diagnosed || '—'} • <strong>Support:</strong> {treatment?.length ? treatment.join(', ') : '—'}
        </div>

        <div>
          <strong>Agree answers:</strong>
          <div className="mt-2">
            <p className="text-sm">Sum: <strong>{agreeSum ?? '—'}</strong> • Percent: <strong>{agreePercent ?? '—'}%</strong> • Outlook: <strong>{outlook ?? '—'}</strong></p>
            <p className="text-xs text-gray-600">Mean: {typeof mean === 'number' ? mean.toFixed(2) : '—'} • SD: {typeof std === 'number' ? std.toFixed(2) : '—'}</p>
            <ol className="list-decimal list-inside text-sm mt-2 space-y-1">
              {agreeAnswers?.map((a: number, i: number) => (
                <li key={i}>Q{i+1}: {a === 1 ? 'Agree (1)' : a === 0 ? 'Disagree (0)' : 'Unanswered'}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
