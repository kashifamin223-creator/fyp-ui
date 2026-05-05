"use client";

import { useState } from "react";
import { apiService, handleApiResponse, UserSession } from "../../services/api";

export default function UnemployeeForm({ onSubmit }: { onSubmit?: (data: any) => void }) {
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("");
	const [employmentStatus, setEmploymentStatus] = useState("");
	const [diagnosed, setDiagnosed] = useState("");
	const [treatment, setTreatment] = useState<string[]>([]);

	const phqItems = [
		"1.Little interest or pleasure in doing things",
		"2.Feeling down, depressed, or hopeless",
		"3.Trouble falling or staying asleep, or sleeping too much",
		"4.Feeling tired or having little energy",
		"5.Poor appetite or overeating",
		"6.Feeling bad about yourself — or that you are a failure",
		"7.Trouble concentrating on things",
		"8.Moving or speaking so slowly that other people could have noticed",
		"9.Thoughts that you would be better off dead or of hurting yourself",
	];

	const scenarios = [
		
	];

	const [phqAnswers, setPhqAnswers] = useState<number[]>(Array(phqItems.length).fill(0));
	const [scenarioAnswers, setScenarioAnswers] = useState<number[]>(Array(scenarios.length).fill(0));
	const [notes, setNotes] = useState("");
	const [result, setResult] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState<string>('');

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

	const submitForm = async () => {
		setIsSubmitting(true);
		setSubmitError('');
		
		try {
			// Get current user ID from session
			const user = UserSession.getUser();
			const userId = user?.id || 0;
			
			const formData = {
				id: 0,
				userid: userId,
				age: parseInt(age) || 0,
				gender: gender || "string",
				employment: employmentStatus || "string",
				diagnosed: diagnosed === "yes",
				support: treatment.join(", ") || "string",
				q1: phqAnswers[0] || 0,
				q2: phqAnswers[1] || 0,
				q3: phqAnswers[2] || 0,
				q4: phqAnswers[3] || 0,
				q5: phqAnswers[4] || 0,
				q6: phqAnswers[5] || 0,
				q7: phqAnswers[6] || 0,
				q8: phqAnswers[7] || 0,
				q9: phqAnswers[8] || 0,
			};

			const success = handleApiResponse(
				await apiService.submitUnemployedForm(formData),
				(data) => {
					console.log("Unemployed form submitted successfully:", data);
				},
				(error) => {
					console.error("Unemployed form submission failed:", error);
					setSubmitError(error || 'Failed to submit form');
				}
			);
		} finally {
			setIsSubmitting(false);
		}
	};

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

		// Submit form to API
		submitForm();
	}

	return (
		<section className="w-full bg-white p-8 rounded-xl shadow-lg min-h-[520px]">
			<div className="mb-4">
				<h2 className="text-2xl font-extrabold text-[#064E3B]">Unemployed Dashboard</h2>
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
					{result && <div className="text-sm text-[#065F46]">{result}</div>}
				</div>
				{submitError && (
					<div className="text-red-600 bg-red-50 p-3 rounded-lg text-sm">
						Error: {submitError}
					</div>
				)}

				<div className="mt-4 text-xs text-red-600">
			If you indicated any thoughts of self-harm, please seek immediate help from local emergency services or your nearest crisis hotline.
				</div>
			</form>
		</section>
	);
}
