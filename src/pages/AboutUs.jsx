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
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-10 flex justify-center">
          <div className="max-w-5xl text-white space-y-6">
            
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
              ABOUT{" "}
              <span className="text-yellow-500">
                HOPELATDAM ENTERPRISES
              </span>
            </h1>

            {/* Paragraphs */}
            <p className="leading-relaxed text-base md:text-lg lg:text-xl">
              HOPELATDAM ENTERPRISES is a trusted wholesale distributor of
              top-quality food brands including{" "}
              <strong>
                Golden Penny, Honeywell, Mama Gold, Ayo Ola Foods, and Dangote
              </strong>
              . We specialize in supplying high-quality food products to
              retailers, restaurants, and businesses across Nigeria.
            </p>

            <p className="leading-relaxed text-base md:text-lg lg:text-xl">
              Founded with the vision of making premium food products accessible
              at affordable prices, we are committed to excellence in service,
              product quality, and customer satisfaction.
            </p>

            {/* Mission */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-500">
              Our Mission
            </h2>
            <p className="leading-relaxed text-base md:text-lg lg:text-xl">
              Our mission is to consistently deliver the best food products to
              our customers, ensuring quality, reliability, and competitive
              pricing. We aim to support retailers and businesses in growing
              their ventures by providing dependable wholesale solutions.
            </p>

            {/* Vision */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-500">
              Our Vision
            </h2>
            <p className="leading-relaxed text-base md:text-lg lg:text-xl">
              To be Nigeria's most trusted and preferred wholesale food
              distributor, known for excellence, integrity, and innovation in
              the food distribution sector.
            </p>

            {/* Values */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-500">
              Our Values
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg lg:text-xl">
              <li>
                <strong>Integrity:</strong> We do business transparently and
                honestly.
              </li>
              <li>
                <strong>Quality:</strong> We ensure the highest standards in
                every product we distribute.
              </li>
              <li>
                <strong>Customer Focus:</strong> Our customers’ satisfaction is
                our priority.
              </li>
              <li>
                <strong>Reliability:</strong> Consistent supply and timely
                delivery are guaranteed.
              </li>
              <li>
                <strong>Innovation:</strong> We continually improve to meet
                market demands.
              </li>
            </ul>

            {/* Closing */}
            <p className="leading-relaxed text-base md:text-lg lg:text-xl">
              At HOPELATDAM ENTERPRISES, we believe that our success is driven
              by our relationships with our customers, partners, and employees.
              We invite you to partner with us for your wholesale food needs and
              experience excellence firsthand.
            </p>

          </div>
        </div>
      </div>
    </Layout>
  );
}