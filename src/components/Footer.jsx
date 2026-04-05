// src/components/Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-white">
      <div className="container mx-auto px-4 py-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
          
          {/* About Us */}
          <div>
            <h2 className="text-lg font-bold mb-3">About Us</h2>
            <p className="text-sm leading-relaxed">
              HOPELATDAM ENTERPRISES is a trusted wholesale distributor of top
              food brands including Golden Penny, Honeywell, Mama Gold, Ayo Ola
              Foods, and Dangote. Our mission is to provide high-quality food
              products at affordable prices to retailers and businesses across
              Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm">
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
            <h2 className="text-lg font-bold mb-3">Contact Us</h2>
            <div className="text-sm space-y-2">
              <p>Email: hopelatdam@gmail.com</p>
              <p>
                Phone: +234 8165637597 <br />
                +234 8165636735
              </p>
              <p>
                Head Office: Km 857, Abeokuta Express Way, Kollington B/Stop,
                Lagos. <br />
                Branch: 55, Old Ota Road, Irepodun Junction.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start space-x-4 mt-4">
              <a
                href="https://facebook.com/hopelatdam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                <FaFacebook size={22} />
              </a>

              <a
                href="https://instagram.com/hopelatdam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="https://twitter.com/hopelatdam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaTwitter size={22} />
              </a>

              <a
                href="https://wa.me/2348036893138"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/30 mt-8 pt-4 text-center text-sm">
          <p>&copy; 2026 HOPELATDAM ENTERPRISES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;