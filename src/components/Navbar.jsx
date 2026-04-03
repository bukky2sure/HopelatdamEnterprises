// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logofood from "../assets/logofood.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-md sticky top-0 z-50 w-full">
      {/* Main Container */}
      <div className="container mx-auto flex justify-between items-center px-4 md:px-12 py-3">
        
        {/* LEFT: Logo */}
        <Link to="/" className="flex items-center">
          <img
            className="w-20 h-20 md:w-24 md:h-24 object-contain mr-4"
            src={logofood}
            alt="Hopelatdam Logo"
          />
          <span className="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap">
            HOPELATDAM ENTERPRISES
          </span>
        </Link>

        {/* RIGHT: Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400 pb-1"
                : "hover:text-yellow-300 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400 pb-1"
                : "hover:text-yellow-300 transition"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400 pb-1"
                : "hover:text-yellow-300 transition"
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400 pb-1"
                : "hover:text-yellow-300 transition"
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className="md:hidden focus:outline-none text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-green-800 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 text-lg">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-300"
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-300"
          >
            Products
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-300"
          >
            AboutUs
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-300"
          >
            ContactUs
          </NavLink>
        </div>
      </div>
    </nav>
  );
}