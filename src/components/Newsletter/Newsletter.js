// components/Newsletter/Newsletter.js
import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <section className="newsletter">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Stay Updated
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Be the first to know about new collections, exclusive offers, and
          special events.
        </p>
        <form
          className="newsletter-form"
          onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
