// src/components/Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Us Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <p className="pr-8 text-sm md:text-base">
              HOPELATDAM ENTERPRISES is a trusted wholesale distributor of top food brands 
              including Golden Penny, Honeywell, Mama Gold, Ayo Ola Foods, and Dangote. 
              Our mission is to provide high-quality food products at affordable prices 
              to retailers and businesses across Nigeria.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <NavLink to="/" className="hover:underline">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:underline">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:underline">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="hover:underline">
                  Products
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p className="text-sm md:text-base">Email: info@hopelatdam.com</p>
            <p className="text-sm md:text-base">Phone: +234 803 689 3138</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a
                href="https://facebook.com/hopelatdam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                <FaFacebook className="w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6" />
              </a>
              <a
                href="https://instagram.com/hopelatdam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors duration-200"
              >
                <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6" />
              </a>
              <a
                href="https://twitter.com/hopelatdam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                <FaTwitter className="w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6" />
              </a>
              <a
                href="https://wa.me/2348036893138"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors duration-200"
              >
                <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center">
          <p className="text-sm md:text-base">
            &copy; 2026 HOPELATDAM ENTERPRISES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;