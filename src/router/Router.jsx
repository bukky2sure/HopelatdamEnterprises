import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import ProductDetail from "../pages/ProductDetail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}