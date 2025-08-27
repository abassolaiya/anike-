// components/Footer/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Anike+</h3>
            <p>
              Redefining elegance through intimate apparel and exquisite gold
              jewelry.
            </p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Shop</h3>
            <ul>
              <li>
                <Link to="/products#onipata">AnikeOnipata</Link>
              </li>
              <li>
                <Link to="/products#onigold">AnikeOnigold</Link>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Best Sellers</a>
              </li>
              <li>
                <a href="#">Sale</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Shipping & Returns</a>
              </li>
              <li>
                <a href="#">Size Guide</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li>
                <i className="fas fa-map-marker-alt"></i> 123 Luxury Avenue, NY
              </li>
              <li>
                <i className="fas fa-phone"></i> +1 (234) 567-8900
              </li>
              <li>
                <i className="fas fa-envelope"></i> info@anike.com
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Anike+. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
