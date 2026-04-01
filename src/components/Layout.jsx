// src/components/Layout.jsx
import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />

      <main className="flex-grow w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}