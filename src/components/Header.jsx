// src/components/Header.jsx
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full shadow">
      {/* Top Contact Bar */}
      <div className="bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3">

          {/* FLEX CONTAINER */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">

            {/* LEFT - Email */}
            <div className="flex items-center space-x-2 text-center sm:text-left">
              <FaEnvelope className="text-yellow-400 text-lg sm:text-xl md:text-2xl" />
              <span className="text-base sm:text-sm md:text-base font-semibold break-all">
                hopelatdam@gmail.com
              </span>
            </div>

            {/* RIGHT - Phone */}
            <a
              href="tel:+2349028106224"
              className="flex items-center space-x-2 text-center sm:text-right"
            >
              <FaPhone className="text-yellow-400 text-lg sm:text-xl md:text-2xl" />
              <span className="text-base sm:text-sm md:text-base font-semibold">
                +234 08165637597, +234 08165636735
              </span>
            </a>

          </div>
        </div>
      </div>
    </header>
  );
}