import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 relative overflow-hidden">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0">
        <div
          className="absolute w-full h-full bg-gradient-to-br from-teal-500 via-blue-600 to-purple-700 opacity-20 animate-gradient-move"
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm text-gray-300 leading-6">
              We create visually stunning and professional portfolio websites to help HR professionals and organizations stand out in today's competitive landscape.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:underline">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 hover:bg-teal-600 transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500 hover:bg-gray-600 transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
