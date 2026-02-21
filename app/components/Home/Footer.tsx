"use client";

import { useTheme } from "../ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className={`py-8 px-8 mt-auto ${
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
              <li><a href="/contact" className={`hover:text-blue-400 transition ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>Contact</a></li>
              <li><a href="/privacy" className={`hover:text-blue-400 transition ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/student" className={`hover:text-blue-400 transition ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>Student Support</a></li>
              <li><a href="/children" className={`hover:text-blue-400 transition ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>Children Services</a></li>
              <li><a href="/professionals" className={`hover:text-blue-400 transition ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>Professional Help</a></li>
              <li><a href="/emergency" className={`hover:text-blue-400 transition ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>Emergency Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get Help</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>Helpline: 1-800-MENTAL</span>
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
          <p>&copy; 2024 Mental Healthcare Therapy. All rights reserved.</p>
          <p className="mt-2">
            If you're in crisis, please call emergency services immediately.
          </p>
        </div>
      </div>
    </footer>
  );
}
