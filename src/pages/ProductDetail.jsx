// src/pages/ProductDetail.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  // State to track which image is currently displayed
  const [mainImage, setMainImage] = useState(
    product?.images && product.images.length > 0 ? product.images[0] : product?.image
  );

  if (!product) {
    return (
      <Layout>
        <div className="text-center p-10 text-red-500">Product not found</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Image Gallery */}
          <div>
            <img
              src={mainImage}
              alt={product.title}
              className="w-full h-[500px] object-cover rounded-lg shadow-md mb-4"
            />
            {product.images && product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${product.title}-${idx}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                      mainImage === img ? "border-green-600" : "border-gray-300"
                    }`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-600 mb-2">Price: ₦{product.price}</p>
            <p className="text-gray-700 mb-6">
              {product.description ||
                "This is a high-quality product. You can add description here."}
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;