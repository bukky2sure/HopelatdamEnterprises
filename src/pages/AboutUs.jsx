// src/pages/About.jsx
import React from "react";
import Layout from "../components/Layout";
import items27 from "../assets/items27.jpg";

export default function About() {
  return (
    <Layout>
      <div
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${items27})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative container mx-auto p-6 space-y-6 text-white ">
          <h1 className="text-4xl font-bold mb-4 text-center">
            ABOUT <span className="text-yellow-500">HOPELATDAM ENTERPRISES</span>
          </h1>

          <p className="leading-relaxed text-2xl">
            HOPELATDAM ENTERPRISES is a trusted wholesale distributor of top-quality food brands 
            including <strong>Golden Penny, Honeywell, Mama Gold, Ayo Ola Foods, and Dangote</strong>. 
            We specialize in supplying high-quality food products to retailers, restaurants, 
            and businesses across Nigeria.
          </p>

          <p className="leading-relaxed text-2xl">
            Founded with the vision of making premium food products accessible at 
            affordable prices, we are committed to excellence in service, product quality, 
            and customer satisfaction.
          </p>

          <h2 className="text-3xl font-semibold text-yellow-500 mt-6">Our Mission</h2>
          <p className="leading-relaxed text-2xl">
            Our mission is to consistently deliver the best food products to our customers, 
            ensuring quality, reliability, and competitive pricing. We aim to support retailers 
            and businesses in growing their ventures by providing dependable wholesale solutions.
          </p>

          <h2 className="text-3xl font-semibold text-yellow-500 mt-6">Our Vision</h2>
          <p className="leading-relaxed text-2xl">
            To be Nigeria's most trusted and preferred wholesale food distributor, known 
            for excellence, integrity, and innovation in the food distribution sector.
          </p>

          <h2 className="text-3xl font-semibold text-yellow-500 mt-6">Our Values</h2>
          <ul className="list-disc list-inside leading-relaxed space-y-1 text-2xl">
            <li><strong>Integrity:</strong> We do business transparently and honestly.</li>
            <li><strong>Quality:</strong> We ensure the highest standards in every product we distribute.</li>
            <li><strong>Customer Focus:</strong> Our customers’ satisfaction is our priority.</li>
            <li><strong>Reliability:</strong> Consistent supply and timely delivery are guaranteed.</li>
            <li><strong>Innovation:</strong> We continually improve to meet market demands.</li>
          </ul>

          <p className="leading-relaxed text-2xl">
            At HOPELATDAM ENTERPRISES, we believe that our success is driven by our relationships 
            with our customers, partners, and employees. We invite you to partner with us 
            for your wholesale food needs and experience excellence firsthand.
          </p>
        </div>
      </div>
    </Layout>
  );
}