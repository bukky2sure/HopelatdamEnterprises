// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded p-2 shadow-md hover:shadow-lg transition duration-300">
      <Link to={`/product/${product.id}`} state={{ product }}>
        <img
          src={product.image}
          alt={product.title ? product.title : "Product Image"}
          className="w-full h-48 object-cover rounded mb-2"
        />
        <h2 className="font-bold text-lg text-center">
          {product.title ? product.title : "Product Name"}
        </h2>
        <p className="text-green-600 font-semibold text-center">
          ₦{product.price ? product.price.toLocaleString() : "0"}
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;