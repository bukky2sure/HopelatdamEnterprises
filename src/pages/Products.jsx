// src/pages/Products.jsx
import React from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";

// Correctly import images (match exact file names)
import honey from "../assets/honey.jpg";
import items9 from "../assets/items9.jpg";
import items10 from "../assets/items10.jpg";
import items11 from "../assets/items11.jpg";
import items12 from "../assets/items12.jpg";
import items13 from "../assets/items13.jpg";
import items15 from "../assets/items15.jpg";
import items16 from "../assets/items16.jpg";
import items17 from "../assets/items17.jpg";
import items18 from "../assets/items18.jpg";
import items19 from "../assets/items19.jpg";
import items21 from "../assets/items21.jpg";
import items22 from "../assets/items22.jpg";
import items23 from "../assets/items23.jpg";
import items24 from "../assets/items24.jpg";
import items29 from "../assets/items29.jpg";
import items30 from "../assets/items30.png";
import items31 from "../assets/items31.jpg";
import items35 from "../assets/items35.jpg";
import items39 from "../assets/items39.webp";
import items40 from "../assets/items40.webp";
import yams from "../assets/yams.jpg";
import beans from "../assets/beans.jpg"; // Make sure the file is lowercase
import ijebu from "../assets/ijebu.jpg";

const productsData = [
  { id: 1, title: "Honeywell Whole Wheat Meal 2kg", image: honey, price: 1300 },
  { id: 2, title: "Golden Penny Semovita 1kg", image: items9, price: 1950 },
  { id: 3, title: "Golden Penny Pasta", image: items10, price: 1000 },
  { id: 4, title: "Indomie Instant Noodles Chicken Flavour", image: items11, price: 8000 },
  { id: 5, title: "Gino Tin Tomato", image: items12, price: 1200 },
  { id: 6, title: "Mama Gold Rice 50kg", image: items15, price: 82500 },
  { id: 7, title: "Ayoola Poundo Yam Flour 0.9kg", image: items16, price: 4200 },
  { id: 8, title: "Knorr Chicken Seasoning Cube", image: items17, price: 2435 },
  { id: 9, title: "Maggi Seasoning Cube", image: items18, price: 2500 },
  { id: 10, title: "Dangote Sugar", image: items19, price: 780 },
  { id: 11, title: "King's Vegetable Oil 1liter", image: items21, price: 3500 },
  { id: 12, title: "King's Vegetable Oil 5litres", image: items22, price: 16000 },
  { id: 13, title: "King's Vegetable Oil 25litres", image: items23, price: 55000 },
  { id: 14, title: "Crate of Eggs", image: items24, price: 6000 },
  { id: 15, title: "Bag of rice", image: items13, price: 60000 },
  { id: 16, title: "Dangote Flour 50kg", image: items35, price: 75000 },
  { id: 17, title: "Mama Gold White Semolina", image: items31, price: 2980 },
  { id: 18, title: "Golden Penny Foods Flour 50kg", image: items30, price: 83500 },
  { id: 19, title: "Dangote Pasta", image: items29, price: 420 },
  { id: 20, title: "Ayoola Plantain Flour", image: items40, price: 2000 },
  { id: 21, title: "Ayoola Brown Beans 1.8kg", image: items39, price: 2045 },
  { id: 22, title: "Yams", image: yams, price: 5000 },
  { id: 23, title: "Beans", image: beans, price: 4000 },
  { id: 24, title: "Ijebu Garri", image: ijebu, price: 2500 },
];

export default function Products() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-green-700 text-center">
          All Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
}