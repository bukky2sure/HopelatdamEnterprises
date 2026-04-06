// src/pages/Home.jsx
import React from "react";
import Layout from "../components/Layout";
import * as assets from "../assets"; // import all assets at once

export default function Home() {
  const galleryImages = [
    assets.items9, assets.items10, assets.items11, assets.items13,
    assets.items15, assets.items16, assets.items17, assets.items18,
    assets.items19, assets.items24, assets.items23, assets.items27,
    assets.items30, assets.items31, assets.items35, assets.mamagold,
    assets.honey, assets.food2, assets.items36, assets.items28,
    assets.items6, assets.items1, assets.items40, assets.items39
  ];

  return (
    <Layout>

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Welcome to <span className="text-yellow-400 block sm:inline">HOPELATDAM ENTERPRISES</span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl max-w-3xl mx-auto mb-4">
            We are your trusted wholesale supplier of high-quality foodstuffs and grocery products.
            Serving retailers, restaurants, and markets across Nigeria.
          </p>
          <p className="text-sm sm:text-base md:text-xl max-w-3xl mx-auto">
            Our products include <span className="font-semibold">Golden Penny, Mama Gold, Honeywell, Ayo Ola Foods, Dangote, and more.</span>
            Premium quality at wholesale prices.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-12 sm:py-16 md:py-20"
        style={{ backgroundImage: `url(${assets.food13})` }}
      >
        <div className="absolute inset-0 bg-green-900/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-5 md:p-6 bg-white/90 rounded-xl shadow text-green-800">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">High Quality</h3>
              <p className="text-sm sm:text-base">We source trusted brands to ensure the best products for your business.</p>
            </div>
            <div className="p-5 md:p-6 bg-yellow-100/90 rounded-xl shadow text-yellow-800">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Affordable Prices</h3>
              <p className="text-sm sm:text-base">Wholesale rates that help your business grow.</p>
            </div>
            <div className="p-5 md:p-6 bg-white/90 rounded-xl shadow text-green-800 sm:col-span-2 md:col-span-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm sm:text-base">Prompt delivery to your location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-green-50 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-green-700">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg shadow h-52 sm:h-60 md:h-64">
                <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 text-white py-12 sm:py-16 md:py-20 mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Order?</h2>
          <p className="mb-6 text-sm sm:text-base md:text-xl">Contact us today and secure the best wholesale deals.</p>
          <a href="/contact" className="inline-block bg-yellow-400 text-green-900 font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-yellow-300 transition">Contact Us</a>
        </div>
      </section>

    </Layout>
  );
}