// components/Hero.js
import React from "react";

const Hero = () => {
  return (
    <section className="hero luxury-bg">
      <div className="container hero-content">
        <h1>
          Elegance Redefined<span>Dual Essence of Luxury</span>
        </h1>
        <p>
          Discover the perfect blend of intimate apparel and exquisite gold
          jewelry. Two distinct identities, one unparalleled experience.
        </p>
        <div>
          <a href="#" className="btn">
            Shop Now
          </a>
          <a href="#" className="btn btn-outline">
            Explore Collections
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
