"use client";

import Navbar from "../components/Home/Nevbar";
import Link from "next/link";
import { useTheme } from "../components/ThemeContext";

export default function HomePage() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Navbar />
      
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
  className="relative py-20 px-6"
  style={{
    backgroundImage: "url('/mental.png')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto text-center">
    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
      Mental Healthcare Therapy
    </h1>

    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
      Providing comprehensive mental health support for children, students, and professionals 
              through accessible, compassionate, and evidence-based therapeutic resources.
    </p>
  </div>
</section>

        {/* Services Overview */}
        <section className={`py-16 px-6 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
              theme === 'dark' ? 'text-gray-100' : 'text-[#064E3B]'
            }`}>
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`p-6 rounded-xl shadow-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-white'
              }`}>
                <div className="text-4xl mb-4 text-center">👶</div>
                <h3 className={`text-xl font-semibold mb-4 text-center ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  Children Support
                </h3>
                <p className={`text-center mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Specialized mental health services for children dealing with trauma, harassment, and abuse.
                </p>
                <div className="text-center">
                  <Link 
                    href="/trauma-children" 
                    className={`inline-block px-4 py-2 rounded-lg transition ${
                      theme === 'dark' 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              <div className={`p-6 rounded-xl shadow-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-white'
              }`}>
                <div className="text-4xl mb-4 text-center">🎓</div>
                <h3 className={`text-xl font-semibold mb-4 text-center ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  Student Services
                </h3>
                <p className={`text-center mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Mental health support for students dealing with academic pressure, career stress, and life transitions.
                </p>
                <div className="text-center">
                  <Link 
                    href="/student/intern" 
                    className={`inline-block px-4 py-2 rounded-lg transition ${
                      theme === 'dark' 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-green-100 text-green-700 hover:bg-green-200'
                    }`}
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              <div className={`p-6 rounded-xl shadow-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-white'
              }`}>
                <div className="text-4xl mb-4 text-center">💼</div>
                <h3 className={`text-xl font-semibold mb-4 text-center ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  Professional Help
                </h3>
                <p className={`text-center mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Support for professionals dealing with workplace stress, career transitions, and work-life balance.
                </p>
                <div className="text-center">
                  <Link 
                    href="/professionals/old-age" 
                    className={`inline-block px-4 py-2 rounded-lg transition ${
                      theme === 'dark' 
                        ? 'bg-purple-600 text-white hover:bg-purple-700' 
                        : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                    }`}
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={`py-16 px-6 ${
          theme === 'dark' 
            ? 'bg-gray-900' 
            : 'bg-gradient-to-br from-green-50 to-blue-50'
        }`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
              theme === 'dark' ? 'text-gray-100' : 'text-[#064E3B]'
            }`}>
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  Personalized Care
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Tailored treatment plans for individual needs
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  Evidence-Based
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Proven therapeutic approaches and methods
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💙</div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  Compassionate
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Empathetic, judgment-free support
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  Accessible
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Available to everyone who needs help
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Section */}
        <section className={`py-16 px-6 ${
          theme === 'dark' ? 'bg-red-900' : 'bg-red-50'
        }`}>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
              theme === 'dark' ? 'text-red-100' : 'text-red-800'
            }`}>
              Need Immediate Help?
            </h2>
            <p className={`text-lg mb-8 max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-red-200' : 'text-red-700'
            }`}>
              If you're in crisis or need immediate support, we're here to help 24/7.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-red-800' : 'bg-white'
              }`}>
                <div className="text-3xl mb-3">📞</div>
                <h3 className={`font-semibold mb-2 ${
                  theme === 'dark' ? 'text-red-100' : 'text-red-800'
                }`}>
                  Crisis Hotline
                </h3>
                <p className={`font-bold text-lg ${
                  theme === 'dark' ? 'text-red-100' : 'text-red-600'
                }`}>
                  UMANG PAKISTAN
                </p>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-red-200' : 'text-red-700'
                }`}>
                  +92311-7786264
                </p>
              </div>
              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-red-800' : 'bg-white'
              }`}>
                <div className="text-3xl mb-3">📱</div>
                <h3 className={`font-semibold mb-2 ${
                  theme === 'dark' ? 'text-red-100' : 'text-red-800'
                }`}>
                  Counseling Hotline
                </h3>
                <p className={`font-bold text-lg ${
                  theme === 'dark' ? 'text-red-100' : 'text-red-600'
                }`}>
                  National Youth Helpline
                </p>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-red-200' : 'text-red-700'
                }`}>
                  0800-69457
                </p>
              </div>
              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-red-800' : 'bg-white'
              }`}>
                <div className="text-3xl mb-3">👶</div>
                <h3 className={`font-semibold mb-2 ${
                  theme === 'dark' ? 'text-red-100' : 'text-red-800'
                }`}>
                  Child Abuse
                </h3>
                <p className={`font-bold text-lg ${
                  theme === 'dark' ? 'text-red-100' : 'text-red-600'
                }`}>
                  Child Protection & Welfare Bureau
                </p>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-red-200' : 'text-red-700'
                }`}>
                  1121
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={`py-16 px-6 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="max-w-7xl mx-auto">
            <div className={`rounded-xl p-8 ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-800 to-green-800' 
                : 'bg-gradient-to-r from-blue-600 to-green-600'
            }`}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">10,000+</div>
                  <p className="text-blue-100">Lives Impacted</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">95%</div>
                  <p className="text-blue-100">Success Rate</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <p className="text-blue-100">Support Available</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <p className="text-blue-100">Expert Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={`py-16 px-6 ${
          theme === 'dark' 
            ? 'bg-gray-900' 
            : 'bg-gradient-to-br from-purple-50 to-pink-50'
        }`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
              theme === 'dark' ? 'text-gray-100' : 'text-[#064E3B]'
            }`}>
              What People Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-200 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                    }`}>
                      Aitzaz Hussain.
                    </h4>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Student
                    </p>
                  </div>
                </div>
                <p className={`italic ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  "The support I received helped me through a difficult time. The therapists are understanding and truly care."
                </p>
              </div>

              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-200 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                    }`}>
                      Kashif Amin.
                    </h4>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Parent
                    </p>
                  </div>
                </div>
                <p className={`italic ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  "My child received excellent care. The resources and support made a huge difference in our family's life."
                </p>
              </div>

              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-200 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                    }`}>
                      Dr.Nabeel Ibad (Neuro psychologist)
                    </h4>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Professional
                    </p>
                  </div>
                </div>
                <p className={`italic ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  "The professional support helped me manage work stress and find better work-life balance. Highly recommended."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      </div>

        
  );
}
