// components/Newsletter.js
import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <h2>Subscribe to Our Newsletter</h2>
        <p>
          Be the first to know about new collections, exclusive offers, and
          special events.
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your Email Address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
