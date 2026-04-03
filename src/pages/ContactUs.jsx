// src/pages/Contact.jsx
import React from "react";
import Layout from "../components/Layout";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-yellow-50 min-h-screen py-16">
        <div className="container mx-auto px-6 md:px-12 space-y-12">

          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700">
              CONTACT <span className="text-yellow-500">HOPELATDAM ENTERPRISES</span>
            </h1>
            <p className="mt-4 text-gray-700 text-lg md:text-xl">
              Have questions or need assistance? We’re here to help! Reach out to us via email, phone, or by filling out the form below.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <FaEnvelope className="text-green-700 w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <p className="text-gray-700">info@hopelatdam.com</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <FaPhone className="text-green-700 w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-1">Phone</h3>
              <p className="text-gray-700">+234 803 689 3138</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <FaMapMarkerAlt className="text-green-700 w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-1">Address</h3>
              <p className="text-gray-700">Lagos, Nigeria</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-green-700">Send Us a Message</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="bg-green-700 text-white font-semibold py-3 px-6 rounded-md hover:bg-yellow-500 hover:text-green-700 transition-colors duration-300 md:col-span-2"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Our Location</h2>
            <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center">
              <p className="text-gray-500">Google Map Placeholder</p>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}