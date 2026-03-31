import React, { useContext } from "react"; // <-- include useContext here
import { AppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import Layout from "../components/Layout";

export default function Products() {
  const { products } = useContext(AppContext);

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products && products.length > 0 ? (
            products.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <p>No products available at the moment.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}