// components/BrandSection/BrandSection.js
import React, { useState, useEffect, useRef } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./BrandSection.css";

const BrandSection = ({ brand, title, products, bgClass = "" }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`brand-section ${bgClass}`}
      ref={sectionRef}
      id="products"
    >
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          {title}
        </h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              brand={brand}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
