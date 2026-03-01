import React, { useState } from "react";
import { products } from "../data/product"
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import "./Product.css";

const Product = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
  <div className="product-container">
    <Navbar
    title="Explore Our Products"
    search={search}
    setSearch={setSearch}
    category={category}
     setCategory={setCategory}
        />

    <ProductList products={filteredProducts} />
  </div>
);
};

export default Product;