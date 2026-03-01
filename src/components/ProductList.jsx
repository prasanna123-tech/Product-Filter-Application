import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <h2 className="no-products">No products found</h2>;
  }

  return (
    <div className="product"> 
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;