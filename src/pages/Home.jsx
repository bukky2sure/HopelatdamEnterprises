// src/pages/Home.jsx
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import Layout from "../components/Layout";

export default function Home() {
  const { products } = useContext(AppContext);

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

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-700">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-green-100 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-green-800">High Quality</h3>
              <p>We source trusted brands to ensure the best products for your business.</p>
            </div>
            <div className="p-6 bg-yellow-100 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-yellow-800">Affordable Prices</h3>
              <p>Wholesale rates that help your business grow while keeping customers happy.</p>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-green-800">Fast Delivery</h3>
              <p>Prompt delivery to your location, ensuring you never run out of stock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-green-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-700 text-center">
            Our Products
          </h2>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <p className="text-center text-green-800 text-lg">No products available at the moment. Check back soon!</p>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="mb-6 text-lg md:text-xl">
            Contact us today and secure the best wholesale deals on top-quality products.
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