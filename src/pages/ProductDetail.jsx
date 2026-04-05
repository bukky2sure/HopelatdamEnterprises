// src/pages/ProductDetail.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  // Handle initial image safely
  const initialImage =
    product?.images && product.images.length > 0
      ? product.images[0]
      : product?.image;

  const [mainImage, setMainImage] = useState(initialImage);

  if (!product) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh] text-red-500 text-lg">
          Product not found
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left: Image Section */}
          <div>
            <div className="w-full h-64 sm:h-80 md:h-[450px] lg:h-[500px] overflow-hidden rounded-lg shadow-md">
              <img
                src={mainImage}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {product.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${product.title}-${idx}`}
                    className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md cursor-pointer border flex-shrink-0 ${
                      mainImage === img
                        ? "border-green-600"
                        : "border-gray-300"
                    }`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col justify-center">
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              {product.title}
            </h1>

            <p className="text-green-700 text-lg sm:text-xl font-semibold mb-3">
              ₦{product.price}
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
              {product.description ||
                "This is a high-quality product sourced from trusted suppliers. Perfect for both personal use and business needs."}
            </p>

            <button className="w-full sm:w-fit bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300">
              Add to Cart
            </button>

          </div>

        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;