// pages/Contact.js
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    alert("Thank you for your message. We will get back to you soon!");
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>
            We'd love to hear from you. Reach out to us with any questions or
            inquiries.
          </p>
        </div>
      </div>

      <section className="contact-main">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info" data-aos="fade-right">
              <h2>Contact Information</h2>
              <p>
                Feel free to reach out to us through any of the following
                channels:
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Visit Us</h3>
                    <p>
                      123 Luxury Avenue
                      <br />
                      Victoria Island, Lagos
                      <br />
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Call Us</h3>
                    <p>
                      +234 (0) 123 456 7890
                      <br />
                      +234 (0) 987 654 3210
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Email Us</h3>
                    <p>
                      info@anike.com
                      <br />
                      support@anike.com
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Business Hours</h3>
                    <p>
                      Monday - Friday: 9AM - 6PM
                      <br />
                      Saturday: 10AM - 4PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" aria-label="Pinterest">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-container" data-aos="fade-left">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section luxury-bg">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Visit Our Store</h2>
            <p>
              Come experience our collections in person at our flagship store
            </p>
          </div>

          <div
            className="map-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="map-placeholder">
              <i className="fas fa-map-marked-alt"></i>
              <p>Interactive map would be displayed here</p>
              <div className="map-overlay">
                <h4>Anike+ Flagship Store</h4>
                <p>123 Luxury Avenue, Victoria Island, Lagos</p>
                <a href="#" className="btn btn-outline">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common inquiries</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
              <h3>What are your shipping options?</h3>
              <p>
                We offer standard shipping (3-5 business days) and express
                shipping (1-2 business days) within Nigeria. International
                shipping is also available with varying delivery times.
              </p>
            </div>

            <div className="faq-item" data-aos="fade-up" data-aos-delay="300">
              <h3>Can I return or exchange items?</h3>
              <p>
                Yes, we offer a 14-day return policy for unused items with
                original tags attached. Exchanges are subject to availability.
              </p>
            </div>

            <div className="faq-item" data-aos="fade-up" data-aos-delay="400">
              <h3>Do you offer custom jewelry designs?</h3>
              <p>
                Absolutely! Our AnikeOnigold collection includes bespoke
                services. Contact us to discuss your custom design ideas.
              </p>
            </div>

            <div className="faq-item" data-aos="fade-up" data-aos-delay="500">
              <h3>How do I care for my gold jewelry?</h3>
              <p>
                We recommend storing gold jewelry in a soft pouch, avoiding
                contact with chemicals, and cleaning with a soft cloth. Detailed
                care instructions are provided with each purchase.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
