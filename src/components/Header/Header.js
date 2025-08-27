// components/Header/Header.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            Anike<span>+</span>
          </Link>

          <nav className={`nav ${mobileMenuOpen ? "nav-open" : ""}`}>
            <ul>
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={location.pathname === "/products" ? "active" : ""}
                >
                  Collections
                </Link>
              </li>
              <li className="dropdown">
                <span>Brands</span>
                <div className="dropdown-menu">
                  <Link to="/products#onipata">AnikeOnipata</Link>
                  <Link to="/products#onigold">AnikeOnigold</Link>
                </div>
              </li>
              <li>
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "active" : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="icon-btn">
              <i className="fas fa-search"></i>
            </button>
            <button className="icon-btn">
              <i className="fas fa-shopping-bag"></i>
              <span className="cart-count">3</span>
            </button>
            <button className="icon-btn">
              <i className="fas fa-user"></i>
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
