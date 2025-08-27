// components/Features/Features.js
import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: "fa-truck",
      title: "Free Shipping",
      description: "Free worldwide shipping on all orders over $100",
    },
    {
      icon: "fa-check-circle",
      title: "Quality Assurance",
      description: "Every product is carefully crafted and quality checked",
    },
    {
      icon: "fa-lock",
      title: "Secure Payment",
      description: "All transactions are secure and encrypted",
    },
    {
      icon: "fa-headset",
      title: "24/7 Support",
      description: "Our customer service team is always here to help",
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Why Choose Anike
        </h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="feature-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
