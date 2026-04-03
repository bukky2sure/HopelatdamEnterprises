// src/pages/Home.jsx
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Layout from "../components/Layout";
import food13 from "../assets/food13.jpg";
import items9 from "../assets/items9.jpg";
import items10 from "../assets/items10.jpg";
import items11 from "../assets/items11.jpg";
import items13 from "../assets/items13.jpg";
import items15 from "../assets/items15.jpg";
import items16 from "../assets/items16.jpg";
import items19 from "../assets/items19.jpg";
import items24 from "../assets/items24.jpg";
import items23 from "../assets/items23.jpg";
import items27 from "../assets/items27.jpg";
import items36 from "../assets/items36.webp";
import items17 from "../assets/items17.jpg";
import items18 from "../assets/items18.jpg";
import items28 from "../assets/items28.jpg";
import items30 from "../assets/items30.png";
import items31 from "../assets/items31.jpg";
import items35 from "../assets/items35.jpg";
import mamagold from "../assets/mamagold.jpg";
import honey1 from "../assets/honey1.jpg";
import food2 from "../assets/food2.jpg";
import items6 from "../assets/items6.jpg";

export default function Home() {
  const { products } = useContext(AppContext);

  const galleryImages = [
    items9, items10, items11, items13, items15, items16,
    items17, items18, items19, items24, items23, items27,
    items30, items31, items35, mamagold, honey1, food2,
    items36, items28, items6,
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Welcome to <span className="text-yellow-400">HOPELATDAM ENTERPRISES</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
            We are your trusted wholesale supplier of high-quality foodstuffs and grocery products.
            Serving retailers, restaurants, and markets across Nigeria.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Our products include <span className="font-semibold">Golden Penny, Mama Gold, Honeywell, Ayo Ola Foods, Dangote, and more.</span>
            Premium quality at wholesale prices.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20"
        style={{ backgroundImage: `url(${food13})` }}
      >
        <div className="absolute inset-0 bg-green-900 bg-opacity-60"></div>

        <div className="container mx-auto px-6 relative text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white bg-opacity-80 rounded-lg shadow text-green-800">
              <h3 className="text-3xl font-semibold mb-2">High Quality</h3>
              <p className="text-2xl">
                We source trusted brands to ensure the best products for your business.
              </p>
            </div>

            <div className="p-6 bg-yellow-100 bg-opacity-90 rounded-lg shadow text-yellow-800">
              <h3 className="text-3xl font-semibold mb-2">Affordable Prices</h3>
              <p className="text-2xl">
                Wholesale rates that help your business grow.
              </p>
            </div>

            <div className="p-6 bg-white bg-opacity-80 rounded-lg shadow text-green-800">
              <h3 className="text-3xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-2xl">
                Prompt delivery to your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-green-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-700">
            Our Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg shadow h-64"
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white py-20 mb-8">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="mb-6 text-lg md:text-xl">
            Contact us today and secure the best wholesale deals.
          </p>

          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-green-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </Layout>
  );
}