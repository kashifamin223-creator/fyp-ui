"use client";

import { useState } from "react";
import Navbar from "../components/Home/Nevbar";
import { useTheme } from "../components/ThemeContext";
import Link from "next/link";

interface PatientRegistration {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  emergencyContact: string;
  emergencyPhone: string;
  insuranceProvider: string;
  policyNumber: string;
  primaryConcern: string;
  therapyType: string;
  preferredTime: string;
  preferredLanguage: string;
  agreeToTerms: boolean;
  consentToTreatment: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  dateOfBirth?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  emergencyContact?: string;
  emergencyPhone?: string;
  insuranceProvider?: string;
  policyNumber?: string;
  primaryConcern?: string;
  therapyType?: string;
  preferredTime?: string;
  preferredLanguage?: string;
  agreeToTerms?: string;
  consentToTreatment?: string;
}

export default function RegisterPage() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<PatientRegistration>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    emergencyContact: "",
    emergencyPhone: "",
    insuranceProvider: "",
    policyNumber: "",
    primaryConcern: "",
    therapyType: "",
    preferredTime: "",
    preferredLanguage: "",
    agreeToTerms: false,
    consentToTreatment: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<PatientRegistration> = {};

    // Required fields validation
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.primaryConcern) newErrors.primaryConcern = "Please select a primary concern";
    if (!formData.therapyType) newErrors.therapyType = "Please select therapy type";
   

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/[^0-9]/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof PatientRegistration, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof PatientRegistration]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Registration Data:", formData);
      alert("Registration successful! We will contact you within 24 hours.");
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        emergencyContact: "",
        emergencyPhone: "",
        insuranceProvider: "",
        policyNumber: "",
        primaryConcern: "",
        therapyType: "",
        preferredTime: "",
        preferredLanguage: "",
        agreeToTerms: false,
        consentToTreatment: false,
      });
      setErrors({});
      
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again or contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <Navbar />
      
      <main className="flex-grow py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`rounded-2xl shadow-xl p-8 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className={`text-3xl font-bold mb-2 ${
                theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
              }`}>
                Patient Registration
              </h1>
              <p className={`text-lg ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Join our mental health therapy program
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <h2 className={`text-xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  Personal Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                        theme === 'dark' 
                          ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                          : 'border-gray-300 focus:ring-blue-400'
                      }`}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className={`block font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                        theme === 'dark' 
                          ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                          : 'border-gray-300 focus:ring-blue-400'
                      }`}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                        theme === 'dark' 
                          ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                          : 'border-gray-300 focus:ring-blue-400'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className={`block font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                        theme === 'dark' 
                          ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                          : 'border-gray-300 focus:ring-blue-400'
                      }`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className={`block font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                      theme === 'dark' 
                        ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                        : 'border-gray-300 focus:ring-blue-400'
                      }`}
                  />
                  {errors.dateOfBirth && (
                    <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>
                  )}
                </div>
              </div>

              {/* Address Information */}
              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <h2 className={`text-xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  Address Information
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className={`block font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      Street Address
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                        theme === 'dark' 
                          ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                          : 'border-gray-300 focus:ring-blue-400'
                      }`}
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className={`block font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        City
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                          theme === 'dark' 
                            ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                            : 'border-gray-300 focus:ring-blue-400'
                        }`}
                        placeholder="New York"
                      />
                    </div>

                    <div>
                      <label className={`block font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        State
                      </label>
                      <input
                        type="text"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                          theme === 'dark' 
                            ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                            : 'border-gray-300 focus:ring-blue-400'
                        }`}
                        placeholder="NY"
                      />
                    </div>

                    <div>
                      <label className={`block font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                          theme === 'dark' 
                            ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                            : 'border-gray-300 focus:ring-blue-400'
                        }`}
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <h2 className={`text-xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  Emergency Contact
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      Emergency Contact Name
                    </label>
                    <input
                      type="text"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                      className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                        theme === 'dark' 
                          ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                          : 'border-gray-300 focus:ring-blue-400'
                      }`}
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label className={`block font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      Emergency Contact Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                      className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                        theme === 'dark' 
                          ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                          : 'border-gray-300 focus:ring-blue-400'
                      }`}
                      placeholder="(555) 987-6543"
                    />
                  </div>
                </div>
              </div>

              {/* Insurance Information */}
              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <h2 className={`text-xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  Insurance Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      Insurance Provider
                    </label>
                    <input
                      type="text"
                      value={formData.insuranceProvider}
                      onChange={(e) => handleInputChange('insuranceProvider', e.target.value)}
                      className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                        theme === 'dark' 
                          ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                          : 'border-gray-300 focus:ring-blue-400'
                      }`}
                      placeholder="Blue Cross Blue Shield"
                    />
                  </div>

                  <div>
                    <label className={`block font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      Policy Number
                    </label>
                    <input
                      type="text"
                      value={formData.policyNumber}
                      onChange={(e) => handleInputChange('policyNumber', e.target.value)}
                      className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                        theme === 'dark' 
                          ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                          : 'border-gray-300 focus:ring-blue-400'
                      }`}
                      placeholder="ABC123456"
                    />
                  </div>
                </div>
              </div>

              {/* Therapy Preferences */}
              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <h2 className={`text-xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  Therapy Preferences
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className={`block font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      Primary Concern *
                    </label>
                    <select
                      required
                      value={formData.primaryConcern}
                      onChange={(e) => handleInputChange('primaryConcern', e.target.value)}
                      className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                        theme === 'dark' 
                          ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                          : 'border-gray-300 focus:ring-blue-400'
                      }`}
                    >
                      <option value="">Select your primary concern</option>
                      <option value="anxiety">Anxiety</option>
                      <option value="depression">Depression</option>
                      <option value="trauma">Trauma/PTSD</option>
                      <option value="stress">Stress Management</option>
                      <option value="relationship">Relationship Issues</option>
                      <option value="self-esteem">Self-Esteem</option>
                      <option value="grief">Grief/Loss</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.primaryConcern && (
                      <p className="text-red-500 text-sm mt-1">{errors.primaryConcern}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        Therapy Type *
                      </label>
                      <select
                        required
                        value={formData.therapyType}
                        onChange={(e) => handleInputChange('therapyType', e.target.value)}
                        className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                          theme === 'dark' 
                            ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                            : 'border-gray-300 focus:ring-blue-400'
                        }`}
                      >
                        <option value="">Select therapy type</option>
                        <option value="individual">Individual Therapy</option>
                        <option value="group">Group Therapy</option>
                        <option value="family">Family Therapy</option>
                        <option value="couples">Couples Therapy</option>
                        <option value="online">Online Therapy</option>
                        <option value="in-person">In-Person Therapy</option>
                      </select>
                      {errors.therapyType && (
                        <p className="text-red-500 text-sm mt-1">{errors.therapyType}</p>
                      )}
                    </div>

                    <div>
                      <label className={`block font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        Preferred Time
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                        className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                          theme === 'dark' 
                            ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                            : 'border-gray-300 focus:ring-blue-400'
                        }`}
                      >
                        <option value="">Select preferred time</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 5PM)</option>
                        <option value="evening">Evening (5PM - 8PM)</option>
                        <option value="weekend">Weekend</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={`block font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      Preferred Language
                    </label>
                    <select
                      value={formData.preferredLanguage}
                      onChange={(e) => handleInputChange('preferredLanguage', e.target.value)}
                      className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                        theme === 'dark' 
                          ? 'bg-gray-600 border-gray-500 text-gray-100 focus:ring-blue-500' 
                          : 'border-gray-300 focus:ring-blue-400'
                        }`}
                    >
                      <option value="">Select preferred language</option>
                      <option value="english">English</option>
                      <option value="spanish">Spanish</option>
                      <option value="french">French</option>
                      <option value="mandarin">Mandarin</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Terms and Consent */}
              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <h2 className={`text-xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  Terms & Consent
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      checked={formData.agreeToTerms}
                      onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="terms" className={`text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {"I agree to the "}
                      <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>
                      {" and "}
                      <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                      {" *"}
                    </label>
                  </div>
                  {errors.agreeToTerms && (
                    <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>
                  )}

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={formData.consentToTreatment}
                      onChange={(e) => handleInputChange('consentToTreatment', e.target.checked)}
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="consent" className={`text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      I consent to receive mental health treatment and understand that I can withdraw consent at any time *
                    </label>
                  </div>
                  {errors.consentToTreatment && (
                    <p className="text-red-500 text-sm mt-1">{errors.consentToTreatment}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-lg font-semibold transition ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : theme === 'dark' 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Complete Registration'}
                </button>
              </div>
            </form>

            {/* Login Link */}
            <div className={`text-center mt-6 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:underline font-medium">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
