// src/pages/Home.jsx
import React from "react";
import Layout from "../components/Layout";
import * as assets from "../assets";
import { Link } from "react-router-dom";

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

      {/* HERO SECTION */}
      <section className="bg-green-700 text-white py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Welcome to <span className="text-yellow-400 block sm:inline">
              HOPELATDAM ENTERPRISES
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-4 font-medium">
            We are your trusted wholesale supplier of high-quality foodstuffs and grocery products.
            Serving retailers, restaurants, and markets across Nigeria.
          </p>

          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-medium">
            Our products include <span className="font-bold">
              Golden Penny, Mama Gold, Honeywell, Ayo Ola Foods, Dangote, and more.
            </span>
            Premium quality at wholesale prices.
          </p>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-20 md:py-24"
        style={{ backgroundImage: `url(${assets.food13})` }}
      >
        <div className="absolute inset-0 bg-green-900/80"></div>

        <div className="max-w-7xl mx-auto px-4 relative text-center text-white">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            <div className="p-6 bg-white/95 rounded-xl shadow text-green-800">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                High Quality
              </h3>
              <p className="text-base sm:text-lg font-medium">
                We source trusted brands to ensure the best products for your business.
              </p>
            </div>

            <div className="p-6 bg-yellow-100/95 rounded-xl shadow text-yellow-800">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                Affordable Prices
              </h3>
              <p className="text-base sm:text-lg font-medium">
                Wholesale rates that help your business grow.
              </p>
            </div>

            <div className="p-6 bg-white/95 rounded-xl shadow text-green-800">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                Fast Delivery
              </h3>
              <p className="text-base sm:text-lg font-medium">
                Prompt delivery to your location.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-green-50 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-green-700">
            Our Products
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg shadow h-56 sm:h-64 md:h-72">
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white py-16 sm:py-20 md:py-24 mb-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Ready to Order?
          </h2>

          <p className="mb-6 text-base sm:text-lg md:text-xl font-medium">
            Contact us today and secure the best wholesale deals.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-yellow-400 text-green-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition"
          >
            Contact Us
          </Link>

        </div>
      </section>

    </Layout>
  );
}