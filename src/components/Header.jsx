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
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-2">
          
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row md:space-x-6 items-center">
            
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-400 text-lg drop-shadow-[0_0_6px_rgba(255,255,0,0.8)]" />
              <span>info@hopelatdam.com</span>
            </div>

            <a
              href="tel:+2349028106224"
              className="flex items-center space-x-2 mt-1 md:mt-0"
            >
              <FaPhone className="text-yellow-400 text-lg drop-shadow-[0_0_6px_rgba(255,255,0,0.8)]" />
              <span>+234-(0)902-810-6224</span>
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-2 md:mt-0 text-lg">
            
            <a href="#" className="hover:text-yellow-400 transition duration-300">
              <FaLinkedin />
            </a>

            <a href="#" className="hover:text-yellow-400 transition duration-300">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-yellow-400 transition duration-300">
              <FaFacebook />
            </a>

            <a
              href="https://api.whatsapp.com/send?text=Hello%20Hopelatdam&phone=+2349028106224"
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

      {/* Main Navbar (Optional - you can expand later)
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-6 flex justify-between items-center">

        </div>
      </div> */}

    </header>
  );
}