// components/Header.js
import React from "react";

const Header = ({ scrollPosition }) => {
  return (
    <header className={scrollPosition > 50 ? "scrolled" : ""}>
      <div className="container header-content">
        <a href="#" className="logo">
          Anike<span>+</span>
        </a>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">AnikeOnipata</a>
            </li>
            <li>
              <a href="#">AnikeOnigold</a>
            </li>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header-icons">
          <a href="#">
            <i className="fas fa-search"></i>
          </a>
          <a href="#">
            <i className="fas fa-shopping-bag"></i>
          </a>
          <a href="#">
            <i className="fas fa-user"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
