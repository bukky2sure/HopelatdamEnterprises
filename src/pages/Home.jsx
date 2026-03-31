// import React, { useContext } from "react";
// import { AppContext } from "./context/AppContext";
// import ProductCard from "../components/ProductCard";

// export default function Home() {
//   const { products } = useContext(AppContext);
//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold mb-6">Welcome to HOPELATDAM ENTERPRISES</h1>
//       <p className="mb-6 text-lg">We deal in wholesale of foodstuffs and products like Golden Penny, Mama Gold, Honeywell, Ayo Ola Foods, and Dangote.</p>
//       <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {products.map((p) => (
//           <ProductCard key={p.id} product={p} />
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import Layout from "../components/Layout";

export default function Home() {
  const { products } = useContext(AppContext);

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">Welcome to HOPELATDAM ENTERPRISES</h1>
        <p className="mb-6 text-lg">
          We deal in wholesale of foodstuffs and products like Golden Penny, Mama Gold, Honeywell, Ayo Ola Foods, and Dangote.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </Layout>
  );
}