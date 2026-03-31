import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.brand}</p>
      <p className="text-green-700 font-bold">₦{product.price.toLocaleString()}</p>
    </div>
  );
}