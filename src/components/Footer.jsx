// src/components/Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">

          {/* About Us */}
          <div>
            <h2 className="text-xl sm:text-xl md:text-2xl font-extrabold mb-4">
              About Us
            </h2>
            <p className="text-base sm:text-sm md:text-base leading-relaxed font-medium">
              HOPELATDAM ENTERPRISES is a trusted wholesale distributor of top
              food brands including Golden Penny, Honeywell, Mama Gold, Ayo Ola
              Foods, and Dangote. Our mission is to provide high-quality food
              products at affordable prices to retailers and businesses across
              Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl sm:text-xl md:text-2xl font-extrabold mb-4">
              Quick Links
            </h2>
            <ul className="space-y-3 text-base sm:text-sm md:text-base font-semibold">
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

          {/* Contact */}
          <div>
            <h2 className="text-xl sm:text-xl md:text-2xl font-extrabold mb-4">
              Contact Us
            </h2>

            <div className="text-base sm:text-sm md:text-base space-y-3 font-medium">
              <p><strong>Email:</strong> hopelatdam@gmail.com</p>

              <p>
                <strong>Phone:</strong><br />
                +234 8165637597 <br />
                +234 8165636735
              </p>

              <p>
                <strong>Head Office:</strong><br />
                Km 857, Abeokuta Express Way, Kollington B/Stop, Lagos.
              </p>

              <p>
                <strong>Branch:</strong><br />
                55, Old Ota Road, Irepodun Junction.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-5 mt-6 text-2xl">
              
              <a
                href="https://facebook.com/hopelatdam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="https://instagram.com/hopelatdam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://twitter.com/hopelatdam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="https://wa.me/2348036893138"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition"
              >
                <FaWhatsapp />
              </a>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/30 mt-10 pt-5 text-center text-base sm:text-sm md:text-base font-medium">
          <p>&copy; 2026 HOPELATDAM ENTERPRISES. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;