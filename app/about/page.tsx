"use client";

import Navbar from "../components/Home/Nevbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto p-6">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#064E3B] mb-6">
              About Mental Healthcare Therapy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Providing comprehensive mental health support for children, students, and professionals 
              through accessible, compassionate, and evidence-based therapeutic resources.
            </p>
          </header>

          {/* Mission Section */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#064E3B] mb-6 text-center">Our Mission</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-3">Accessible Care</h3>
                  <p className="text-gray-600">
                    Making mental health support available to everyone who needs it, 
                    regardless of age, background, or circumstance.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💙</div>
                  <h3 className="text-xl font-semibold mb-3">Compassionate Support</h3>
                  <p className="text-gray-600">
                    Providing empathetic, judgment-free care that honors each individual's 
                    unique journey and experiences.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔬</div>
                  <h3 className="text-xl font-semibold mb-3">Evidence-Based</h3>
                  <p className="text-gray-600">
                    Using proven therapeutic approaches and continuously updating our 
                    methods based on research and best practices.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#064E3B] mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl mb-3 text-center">👶</div>
                <h3 className="text-lg font-semibold mb-3 text-center">Children Support</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Trauma recovery programs</li>
                  <li>• Harassment intervention</li>
                  <li>• Child abuse support</li>
                  <li>• Age-appropriate therapy</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl mb-3 text-center">🎓</div>
                <h3 className="text-lg font-semibold mb-3 text-center">Student Services</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Intern mental health</li>
                  <li>• Graduate support</li>
                  <li>• Unemployment stress</li>
                  <li>• Academic pressure</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl mb-3 text-center">💼</div>
                <h3 className="text-lg font-semibold mb-3 text-center">Professional Help</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Workplace stress</li>
                  <li>• Career transitions</li>
                  <li>• Parenting support</li>
                  <li>• Elder care</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl mb-3 text-center">🚨</div>
                <h3 className="text-lg font-semibold mb-3 text-center">Emergency Support</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 24/7 crisis helpline</li>
                  <li>• Immediate intervention</li>
                  <li>• Emergency resources</li>
                  <li>• Safety planning</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Approach Section */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#064E3B] mb-6 text-center">Our Approach</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#10B981]">Holistic Care</h3>
                  <p className="text-gray-600 mb-4">
                    We believe in treating the whole person - mind, body, and spirit. 
                    Our integrated approach addresses mental, emotional, and physical 
                    wellbeing to promote lasting healing and growth.
                  </p>
                  <h3 className="text-2xl font-semibold mb-4 text-[#10B981]">Personalized Treatment</h3>
                  <p className="text-gray-600 mb-4">
                    Every individual's journey is unique. We tailor our therapeutic 
                    approaches to meet specific needs, cultural backgrounds, and 
                    personal preferences for optimal outcomes.
                  </p>
                  <h3 className="text-2xl font-semibold mb-4 text-[#10B981]">Continuous Support</h3>
                  <p className="text-gray-600">
                    Healing is a journey, not a destination. We provide ongoing support, 
                    resources, and follow-up care to ensure sustained progress and 
                    wellbeing.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌱</div>
                    <h4 className="text-xl font-semibold mb-4">Growth & Healing</h4>
                    <p className="text-gray-700">
                      "Every step forward, no matter how small, is progress. 
                      We're here to support you through every stage of your journey."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#064E3B] mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">👩‍⚕️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dr. Sarah Johnson</h3>
                <p className="text-gray-600 mb-2">Clinical Director</p>
                <p className="text-sm text-gray-500">
                  15+ years experience in child psychology and trauma recovery
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">👨‍⚕️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dr. Michael Chen</h3>
                <p className="text-gray-600 mb-2">Lead Therapist</p>
                <p className="text-sm text-gray-500">
                  Specialist in adolescent mental health and family therapy
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-24 h-24 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">👩‍⚕️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dr. Emily Rodriguez</h3>
                <p className="text-gray-600 mb-2">Crisis Intervention Specialist</p>
                <p className="text-sm text-gray-500">
                  Expert in emergency mental health and trauma-informed care
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">10,000+</div>
                  <p className="text-blue-100">Lives Impacted</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <p className="text-blue-100">Success Rate</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <p className="text-blue-100">Support Available</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <p className="text-blue-100">Expert Professionals</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#064E3B] mb-6 text-center">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl mb-3">📞</div>
                  <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
                  <p className="text-gray-600">Main: 1-800-MENTAL</p>
                  <p className="text-gray-600">Emergency: 911</p>
                  <p className="text-gray-600">Child Abuse: 1-800-4-A-CHILD</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">✉️</div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">support@mentalhealth.com</p>
                  <p className="text-gray-600">info@mentalhealth.com</p>
                  <p className="text-gray-600">emergency@mentalhealth.com</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">📍</div>
                  <h3 className="text-lg font-semibold mb-2">Locations</h3>
                  <p className="text-gray-600">Main Office</p>
                  <p className="text-gray-600">123 Wellness Street</p>
                  <p className="text-gray-600">Online Support Available</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-[#064E3B] rounded-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-xl mb-6">
                Take the first step towards better mental health today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-[#064E3B] rounded-lg font-semibold hover:bg-gray-100 transition">
                  Get Started
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#064E3B] transition">
                  Learn More
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
