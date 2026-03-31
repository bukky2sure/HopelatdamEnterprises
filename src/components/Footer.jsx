import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto py-6 text-center">
        <p>&copy; {new Date().getFullYear()} HOPELATDAM ENTERPRISES. All rights reserved.</p>
        <p>Email: info@hopelatdam.com | Phone: +234 800 123 4567</p>
      </div>
    </footer>
  );
}