import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const addToCart = () => {
    alert("Added to cart");
  };

  return (
    <div className="card">
      <div className="image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="card-content">
        <h3 className="product-title">{product.name}</h3>
        <p className="category">{product.category}</p>

        <div className="price">
          <span className="product-price">₹{product.price}</span>
          <button className="btn" onClick={addToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;