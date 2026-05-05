// API Service for Mental Health Therapy Platform

const API_BASE_URL = '/api/proxy'; // Use Next.js proxy route

// API Interfaces
export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  email: string;
  password: string;
}

export interface QuestionnaireRequest {
  userid: number;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  q5: number;
  q6: number;
  q7: number;
  q8: number;
  q9: number;
}

export interface ParentsFormRequest {
  id: number;
  userid: number;
  age: number;
  gender: string;
  parenting: string;
  number: number;
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

export interface UnemployedFormRequest {
  id: number;
  userid: number;
  age: number;
  gender: string;
  employment: string;
  diagnosed: boolean;
  support: string;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  q5: number;
  q6: number;
  q7: number;
  q8: number;
  q9: number;
}

export interface EmployedFormRequest {
  id: number;
  userid: number;
  age: number;
  gender: string;
  employment: string;
  years: string;
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

export interface OldFormRequest {
  id: number;
  userid: number;
  age: number;
  gender: string;
  living: string;
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

export interface GraduateFormRequest {
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

export interface InternFormRequest {
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

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// API Functions
class ApiService {
  private async request<T>(endpoint: string, options: RequestInit): Promise<ApiResponse<T>> {
    try {
      // Only log in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`Making API call to: ${API_BASE_URL}?endpoint=${endpoint}`);
        console.log('Request options:', options);
      }

      const response = await fetch(`${API_BASE_URL}?endpoint=${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          'accept': '*/*',
          ...options.headers,
        },
        method: options.method || 'POST',
        body: options.body,
      });

      if (process.env.NODE_ENV === 'development') {
        console.log('Response status:', response.status);
      }

      // Handle different response types
      let data;
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        if (process.env.NODE_ENV === 'development') {
          console.log('Response text:', text);
        }
        // Try to parse as JSON, fallback to text
        try {
          data = JSON.parse(text);
        } catch {
          data = { message: text };
        }
      }

      if (!response.ok) {
        if (process.env.NODE_ENV === 'development') {
          console.error('API Error Response:', data);
        }
        return {
          success: false,
          error: data.message || data.error || `HTTP error! status: ${response.status}`,
        };
      }

      if (process.env.NODE_ENV === 'development') {
        console.log('API Success Response:', data);
      }
      return {
        success: true,
        data,
      };
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('API Request Failed:', error);
      }
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error occurred',
      };
    }
  }

  // Authentication APIs
  async login(credentials: LoginRequest): Promise<ApiResponse<any>> {
    return this.request('/LoginForm', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async signup(credentials: SignupRequest): Promise<ApiResponse<any>> {
    return this.request('/SignupForm', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  // Questionnaire APIs
  async submitChildForm(data: QuestionnaireRequest): Promise<ApiResponse<any>> {
    return this.request('/ChildForm', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async submitHarassmentForm(data: QuestionnaireRequest): Promise<ApiResponse<any>> {
    return this.request('/HarassmentForm', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async submitTraumaForm(data: QuestionnaireRequest): Promise<ApiResponse<any>> {
    return this.request('/TraumaForm', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Parent Form API
  async submitParentsForm(data: ParentsFormRequest): Promise<ApiResponse<any>> {
    return this.request('/ParentsForm', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Employment Forms APIs
  async submitUnemployedForm(data: UnemployedFormRequest): Promise<ApiResponse<any>> {
    return this.request('/UnemployedForm', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async submitEmployedForm(data: EmployedFormRequest): Promise<ApiResponse<any>> {
    return this.request('/EmployedForm', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Age-specific Forms APIs
  async submitOldForm(data: OldFormRequest): Promise<ApiResponse<any>> {
    return this.request('/OldForm', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async submitGraduateForm(data: GraduateFormRequest): Promise<ApiResponse<any>> {
    return this.request('/SaveGraduate', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async submitInternForm(data: InternFormRequest): Promise<ApiResponse<any>> {
    return this.request('/InternForm', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const apiService = new ApiService();

// Utility function to handle API responses
export function handleApiResponse<T>(
  response: ApiResponse<T>,
  onSuccess?: (data: T) => void,
  onError?: (error: string) => void
) {
  if (response.success && response.data) {
    onSuccess?.(response.data);
    return true;
  } else {
    onError?.(response.error || 'An error occurred');
    return false;
  }
}

// User session management
export class UserSession {
  private static readonly USER_KEY = 'user_session';
  private static readonly TOKEN_KEY = 'auth_token';

  static setUser(userData: any): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.USER_KEY, JSON.stringify(userData));
    }
  }

  static getUser(): any | null {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem(this.USER_KEY);
      return userData ? JSON.parse(userData) : null;
    }
    return null;
  }

  static setToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.TOKEN_KEY, token);
    }
  }

  static getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.TOKEN_KEY);
    }
    return null;
  }

  static clearSession(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.USER_KEY);
      localStorage.removeItem(this.TOKEN_KEY);
    }
  }

  static isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
