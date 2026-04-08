// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logofood from "../assets/logofood.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 font-bold border-b-2 border-yellow-400 pb-1"
      : "hover:text-yellow-300 transition font-semibold";

  return (
    <nav className="bg-green-700 text-white shadow-md sticky top-0 z-50 w-full">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-10 py-4">

        {/* Logo + Name (STACKED) */}
        <Link to="/" className="flex flex-col items-center text-center">
          <img
            className="w-20 h-20 object-contain"
            src={logofood}
            alt="Hopelatdam Logo"
          />
          <span className="text-sm sm:text-base md:text-lg font-semibold leading-tight mt-1">
            HOPELATDAM ENTERPRISES
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10 text-lg font-semibold">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl font-bold focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-green-800 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 text-xl font-bold">

          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-300"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-300"
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-300"
            }
          >
            Contact Us
          </NavLink>

        </div>
      </div>

    </nav>
  );
}