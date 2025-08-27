// components/Hero/Hero.js
import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      title: "Elegance Redefined",
      subtitle: "Dual Essence of Luxury",
      description:
        "Discover the perfect blend of intimate apparel and exquisite gold jewelry.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573581042946-359905ea3622?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVuZGVyd2FyZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "AnikeOnipata",
      subtitle: "Intimate Luxury",
      description:
        "Experience comfort and elegance with our premium intimate wear collection.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1721206625396-708fa98dff27?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhxdWlzaXRlJTIwZ29sZCUyMGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
      title: "Anike Gold Emporium",
      subtitle: "Timeless Beauty",
      description:
        "Adorn yourself with our exquisite gold jewelry and accessories.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
            <div className="container hero-content">
              <h1 data-aos="fade-up" data-aos-delay="200">
                {slide.title}
                <span>{slide.subtitle}</span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="400">
                {slide.description}
              </p>
              <div data-aos="fade-up" data-aos-delay="600">
                <a href="#products" className="btn btn-primary">
                  Shop Now
                </a>
                <a href="#products" className="btn btn-outline">
                  Explore Collections
                </a>
              </div>
            </div>
          </div>
        ))}

        <div className="hero-controls">
          {slides.map((_, index) => (
            <button
              key={index}
              className={index === currentSlide ? "active" : ""}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
