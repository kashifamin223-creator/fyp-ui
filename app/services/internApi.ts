export interface InternFormData {
  id: number;
  userid: number;
  age: number;
  gender: string;
  status: string;
  diagnosed: boolean;
  treatment: string;
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

export async function submitInternForm(data: InternFormData): Promise<any> {
  const response = await fetch('/api/internForm', {
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