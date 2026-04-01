// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 flex justify-between items-center px-4 md:px-12 text-white shadow-md sticky top-0 z-50 w-full">
      
      {/* Main Container */}
      <div className="flex justify-between items-center px-4 md:px-12">
        
        {/* LEFT: Logo */}
        <Link
          to="/"
          className="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap"
        >
          HOPELATDAM ENTERPRISES
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
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400 pb-1"
                : "hover:text-yellow-300 transition"
            }
          >
            Contact
          </NavLink>
        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-green-800 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex text-4xl items-center space-x-8">
          
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
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-300"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}