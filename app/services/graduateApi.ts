export interface GraduateFormData {
  userid: number;
  id: number;
  age: number;
  gender: string;
  education: string;
  diagnosed: boolean;
  support: string;
  q1: boolean;
  q2: boolean;
  q3: boolean;
  q4: boolean;
  q5: boolean;
  q6: boolean;
  q7: boolean;
  q8: boolean;
  q9: boolean;
}

export async function submitGraduateForm(data: GraduateFormData): Promise<any> {
  const response = await fetch('/api/graduate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API request failed: ${response.status} ${errorText}`);
  }

  return response.json();
}