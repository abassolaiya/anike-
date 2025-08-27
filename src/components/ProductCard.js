// components/ProductCard.js
import React from "react";

const ProductCard = ({ product, brand, isVisible, delay }) => {
  const { name, description, price, icon } = product;

  return (
    <div
      className={`product-card ${brand} ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="product-img">
        <i className={`fas ${icon}`}></i>
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="price">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
