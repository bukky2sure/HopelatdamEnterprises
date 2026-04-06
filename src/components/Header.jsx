// src/components/Header.jsx
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full shadow">
      
      {/* Top Contact Bar */}
      <div className="bg-green-700 text-white text-sm">
        <div className="container mx-auto px-4 py-2">
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-center sm:text-left">
              
              {/* Email */}
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <FaEnvelope className="text-yellow-400 text-base sm:text-lg" />
                <span className="break-all">hopelatdam@gmail.com</span>
              </div>

              {/* Phone */}
              <a
                href="tel:+2349028106224"
                className="flex items-center justify-center sm:justify-start space-x-2 mt-1 sm:mt-0"
              >
                <FaPhone className="text-yellow-400 text-base sm:text-lg" />
                <span>+234 (0)08165637597, +234 (0)08165636735 </span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-end items-center space-x-4 text-lg">
              
              <a
                href="#"
                className="hover:text-yellow-400 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="hover:text-yellow-400 transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="hover:text-yellow-400 transition duration-300"
              >
                <FaFacebook />
              </a>

              <a
                href="https://api.whatsapp.com/send?text=Hello%20Hopelatdam&phone=2349028106224"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition duration-300"
              >
                <FaWhatsapp />
              </a>

              <a
                href="tel:+2349028106224"
                className="hover:text-yellow-400 transition duration-300"
              >
                <FaPhone />
              </a>
            </div>

          </div>
        </div>
      </div>

    </header>
  );
}