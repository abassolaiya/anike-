// components/ProductCard/ProductCard.js
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, brand, isVisible, delay }) => {
  const { name, description, price, image } = product;

  return (
    <div
      className={`product-card ${brand} ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
      data-aos="fade-up"
    >
      <div className="product-image">
        <img src={image} alt={name} />
        <div className="product-overlay">
          <button className="btn-quickview">Quick View</button>
        </div>
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="product-footer">
          <div className="price">{price}</div>
          <button className="btn-add-to-cart">
            <i className="fas fa-shopping-bag"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
