"use client";

import { useTheme } from "../ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className={`py-4 px-4 mt-auto ${
      theme === 'dark' 
        ? 'bg-gray-900 text-gray-300' 
        : 'bg-[#E6F7F1] text-[#065F46]'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}>
              Mental Healthcare Therapy
            </h3>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Providing comprehensive mental health support for all age groups.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className={`hover:text-blue-400 transition ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>About Us</a></li>
              <li><a href="/references" className={`hover:text-blue-400 transition ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>References</a></li>
              
              <li><a href="/home" className={`hover:text-blue-400 transition ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/student/intern" className={`hover:text-blue-400 transition ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>Student Support</a></li>
              <li><a href="/trauma" className={`hover:text-blue-400 transition ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>Children Services</a></li>
              <li><a href="/professionals/employed" className={`hover:text-blue-400 transition ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>Professional Help</a></li>
              
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>Helpline: +92311-7786264 / 0800-69457 / For Child Abuse 1121</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>support@mentalhealth.com</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                <span>24/7 Online Support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`border-t mt-8 pt-6 text-center text-sm ${
          theme === 'dark' 
            ? 'border-gray-700 text-gray-400' 
            : 'border-[#D1FAE5] text-gray-600'
        }`}>
          <p>&copy; 2026 Mental Healthcare Therapy. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}
