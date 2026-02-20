"use client";

import { useState } from "react";

export default function UnemployeeForm({ onSubmit }: { onSubmit?: (data: any) => void }) {
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("");
	const [employmentStatus, setEmploymentStatus] = useState("");
	const [diagnosed, setDiagnosed] = useState("");
	const [treatment, setTreatment] = useState<string[]>([]);

	const phqItems = [
		"Little interest or pleasure in doing things",
		"Feeling down, depressed, or hopeless",
		"Trouble falling or staying asleep, or sleeping too much",
		"Feeling tired or having little energy",
		"Poor appetite or overeating",
		"Feeling bad about yourself — or that you are a failure",
		"Trouble concentrating on things",
		"Moving or speaking so slowly that other people could have noticed",
		"Thoughts that you would be better off dead or of hurting yourself",
	];

	const scenarios = [
		{
			id: "withdrawal",
			text: "You've stopped going out with friends and avoid calls because it's too much effort.",
		},
		{
			id: "performance",
			text: "At applications or interviews you find it hard to focus, lose track of what to say, or cancel because of anxiety.",
		},
		{
			id: "sleep",
			text: "You wake several times at night and feel exhausted all day, making tasks difficult.",
		},
	];

	const [phqAnswers, setPhqAnswers] = useState<number[]>(Array(phqItems.length).fill(0));
	const [scenarioAnswers, setScenarioAnswers] = useState<number[]>(Array(scenarios.length).fill(0));
	const [notes, setNotes] = useState("");
	const [result, setResult] = useState<string | null>(null);

	function setPhq(index: number, value: number) {
		const copy = [...phqAnswers];
		copy[index] = value;
		setPhqAnswers(copy);
	}

	function setScenario(index: number, value: number) {
		const copy = [...scenarioAnswers];
		copy[index] = value;
		setScenarioAnswers(copy);
	}

	function toggleTreatment(value: string) {
		setTreatment((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		const phqScore = phqAnswers.reduce((a, b) => a + b, 0);
		const suicidal = phqAnswers[8] > 0;
		let summary = `PHQ score: ${phqScore}.`;
		if (suicidal) summary += " Suicidal thoughts reported — immediate follow-up recommended.";

		console.log({ age, gender, employmentStatus, diagnosed, treatment, phqAnswers, scenarioAnswers, notes });
		setResult(summary);
		const payload = { age, gender, employmentStatus, diagnosed, treatment, phqAnswers, scenarioAnswers, notes, phqScore, suicidal };
		onSubmit?.(payload);
	}

	return (
		<section className="w-full bg-white p-8 rounded-xl shadow-lg min-h-[520px]">
			<div className="mb-4">
				<h2 className="text-2xl font-extrabold text-[#064E3B]">Wellbeing Check</h2>
				<p className="text-sm text-gray-600 mt-1">A short confidential screen to understand how you're feeling. Your responses are private.</p>
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
						<option value="">Employment status</option>
						<option>Employed full-time</option>
						<option>Employed part-time</option>
						<option>Unemployed</option>
						<option>Student</option>
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
					<label className="font-semibold">PHQ-like symptom screen (past 2 weeks)</label>
					<p className="text-xs text-gray-600">0=Not at all, 1=Several days, 2=More than half the days, 3=Nearly every day</p>
					<div className="mt-3 space-y-3">
						{phqItems.map((text, i) => (
							<div key={i} className="flex items-center justify-between bg-gray-50 p-3 rounded">
								<div className="w-3/4 text-sm text-gray-700">{text}</div>
								<select value={phqAnswers[i]} onChange={(e) => setPhq(i, Number(e.target.value))} className="p-2 border border-gray-200 rounded-lg bg-white">
									<option value={0}>0</option>
									<option value={1}>1</option>
									<option value={2}>2</option>
									<option value={3}>3</option>
								</select>
							</div>
						))}
					</div>
				</div>

				<div className="mb-4">
					<label className="font-semibold">How well do the scenarios match you?</label>
					<div className="mt-2 space-y-2">
						{scenarios.map((s, i) => (
							<div key={s.id} className="flex items-center justify-between bg-gray-50 p-3 rounded">
								<div className="w-3/4 text-sm text-gray-700">{s.text}</div>
								<select value={scenarioAnswers[i]} onChange={(e) => setScenario(i, Number(e.target.value))} className="p-2 border border-gray-200 rounded-lg bg-white">
									<option value={0}>Not like me</option>
									<option value={1}>A little like me</option>
									<option value={2}>A lot like me</option>
								</select>
							</div>
						))}
					</div>
				</div>

				<div className="mb-4">
					<label className="font-semibold">Anything you'd like to add (optional)</label>
					<textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full p-2 border rounded mt-2" rows={3} />
				</div>

				<div className="flex items-center gap-3">
					<button type="submit" className="px-4 py-2 bg-[#10B981] text-white rounded-lg font-medium">Submit</button>
					{result && <div className="text-sm text-[#065F46]">{result}</div>}
				</div>

				<div className="mt-4 text-xs text-red-600">
					If you indicated any thoughts of self-harm, please seek immediate help from local emergency services or your nearest crisis hotline.
				</div>
			</form>
		</section>
	);
}
