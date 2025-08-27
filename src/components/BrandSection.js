// components/BrandSection.js
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

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
    <section className={`brand-section ${bgClass}`} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="products">
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
