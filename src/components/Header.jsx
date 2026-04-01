// src/components/Header.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
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
    <header className="w-full shadow flex">
      
      {/* Top Contact Bar */}
      <div className="bg-green-700 space-6 text-white text-sm  ">
        <div className="container flex md:flex-row justify-between items-center px-6 py-2">
          
          {/* Contact Info */}
          <div className="flex  md:flex-row md:space-x-6 items-center">
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>info@hopelatdam.com</span>
            </div>

            <a href="tel:+2349028106224" className="flex items-center space-x-2">
              <FaPhone />
              <span>+234-(0)902-810-6224</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-2 md:mt-0 text-lg">
            <a href="#" className="hover:text-yellow-400">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaFacebook />
            </a>
            <a
              href="https://api.whatsapp.com/send?text=Hello%20Hopelatdam&phone=+2349028106224"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaWhatsapp />
            </a>
            <a href="tel:+2349028106224" className="hover:text-yellow-400">
              <FaPhone />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
   
    </header>
  );
}