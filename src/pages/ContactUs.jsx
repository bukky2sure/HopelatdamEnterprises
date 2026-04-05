// src/pages/Contact.jsx
import React from "react";
import Layout from "../components/Layout";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-yellow-50 min-h-screen py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-10 md:space-y-12">
          
          {/* Hero Section */}
          <div className="text-center px-2">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-700 leading-tight">
              CONTACT{" "}
              <span className="text-yellow-500 block sm:inline">
                HOPELATDAM ENTERPRISES
              </span>
            </h1>
            <p className="mt-3 text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Have questions or need assistance? We’re here to help! Reach out to us
              via email, phone, or by filling out the form below.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
            
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300">
              <FaEnvelope className="text-green-700 w-7 h-7 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <p className="text-gray-700 break-all">
                Hopelatdam@gmail.com
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300">
              <FaPhone className="text-green-700 w-7 h-7 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-1">Phone</h3>
              <p className="text-gray-700">
                +234 8165637597 <br /> +234 8165636735
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300 sm:col-span-2 md:col-span-1">
              <FaMapMarkerAlt className="text-green-700 w-7 h-7 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-1">Address</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Head Office: Km 857, Abeokuta Express Way, Kollington Bus Stop,
                Lagos. <br />
                Branch Office: 55, Old Ota Road, Irepodun Junction.
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-green-700 text-center md:text-left">
              Send Us a Message
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-md p-3 w-full md:col-span-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="border border-gray-300 rounded-md p-3 w-full md:col-span-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>

              <button
                type="submit"
                className="bg-green-700 text-white font-semibold py-3 px-6 rounded-md hover:bg-yellow-500 hover:text-green-700 transition duration-300 md:col-span-2"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Map Section */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-green-700 text-center md:text-left">
              Our Location
            </h2>

            <div className="w-full h-56 sm:h-64 md:h-80 bg-gray-200 rounded-md flex items-center justify-center">
              <p className="text-gray-500 text-sm md:text-base">
                Google Map Placeholder
              </p>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}