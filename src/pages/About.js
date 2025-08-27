// pages/About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Story</h1>
          <p>The journey of Anike+ and our vision for luxury</p>
        </div>
      </div>

      <section className="founder-section">
        <div className="container">
          <div className="founder-content">
            <div className="founder-image" data-aos="fade-right">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                alt="Ayotomiwa Meroyi - Founder of Anike+"
              />
              <div className="founder-name">
                <h3>Ayotomiwa Meroyi</h3>
                <p>Founder & Creative Director</p>
              </div>
            </div>
            <div className="founder-story" data-aos="fade-left">
              <h2>The Vision Behind Anike+</h2>
              <p>
                Anike+ was born from a simple yet powerful vision: to create a
                brand that celebrates both intimate elegance and timeless
                luxury. Founded by Ayotomiwa Meroyi in 2018, our journey began
                with a passion for craftsmanship and an eye for detail.
              </p>
              <p>
                Ayotomiwa's background in fashion design and her love for fine
                jewelry inspired her to create a unique brand that offers both
                intimate apparel and exquisite gold pieces. She believed that
                luxury should be accessible yet exceptional, intimate yet bold.
              </p>
              <blockquote>
                "I wanted to create a brand that celebrates the duality of
                modern elegance - the intimate confidence of AnikeOnipata and
                the timeless beauty of Anike Gold Emporium."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-story-section luxury-bg">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Dual Identity</h2>
            <p>Two brands, one vision of excellence</p>
          </div>
          <div className="brand-cards">
            <div className="brand-card" data-aos="fade-up" data-aos-delay="200">
              <div className="brand-icon">
                <i className="fas fa-vest"></i>
              </div>
              <h3>AnikeOnipata</h3>
              <p>
                Our intimate apparel collection represents confidence, comfort,
                and elegance. Each piece is crafted with premium materials and
                attention to detail, designed to make you feel beautiful from
                within.
              </p>
              <ul>
                <li>Luxury lingerie and underwear</li>
                <li>Premium quality fabrics</li>
                <li>Elegant and comfortable designs</li>
                <li>Ethically produced</li>
              </ul>
            </div>
            <div className="brand-card" data-aos="fade-up" data-aos-delay="400">
              <div className="brand-icon">
                <i className="fas fa-gem"></i>
              </div>
              <h3>Anike Gold Emporium</h3>
              <p>
                Our gold collection embodies timeless beauty and sophistication.
                Each piece is meticulously crafted by skilled artisans, using
                only the finest materials to create jewelry that lasts
                generations.
              </p>
              <ul>
                <li>24K gold jewelry</li>
                <li>Handcrafted precision</li>
                <li>Timeless designs</li>
                <li>Heirloom quality pieces</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-item" data-aos="fade-up" data-aos-delay="200">
              <div className="value-icon">
                <i className="fas fa-asterisk"></i>
              </div>
              <h3>Quality Craftsmanship</h3>
              <p>
                Every piece is created with meticulous attention to detail and
                the finest materials.
              </p>
            </div>
            <div className="value-item" data-aos="fade-up" data-aos-delay="300">
              <div className="value-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Sustainability</h3>
              <p>
                We're committed to ethical production and sustainable practices
                across our supply chain.
              </p>
            </div>
            <div className="value-item" data-aos="fade-up" data-aos-delay="400">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Customer Love</h3>
              <p>
                Our customers are at the heart of everything we do, and their
                satisfaction is our priority.
              </p>
            </div>
            <div className="value-item" data-aos="fade-up" data-aos-delay="500">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>
                We continuously evolve our designs while staying true to our
                classic aesthetic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="journey-section luxury-bg">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Journey</h2>
            <p>Milestones in the Anike+ story</p>
          </div>
          <div className="timeline">
            <div
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h3>The Beginning</h3>
                <p>
                  Anike+ was founded by Ayotomiwa Meroyi with a small collection
                  of intimate apparel.
                </p>
              </div>
            </div>
            <div
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="timeline-year">2019</div>
              <div className="timeline-content">
                <h3>First Retail Space</h3>
                <p>
                  Opened our first boutique in Lagos, Nigeria, introducing the
                  brand to a wider audience.
                </p>
              </div>
            </div>
            <div
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>AnikeOnigold Launch</h3>
                <p>
                  Expanded our offerings with the introduction of our gold
                  jewelry collection.
                </p>
              </div>
            </div>
            <div
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>International Recognition</h3>
                <p>
                  Featured in Vogue and other international fashion
                  publications.
                </p>
              </div>
            </div>
            <div
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h3>E-commerce Expansion</h3>
                <p>
                  Launched our online store, making Anike+ accessible worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Team</h2>
            <p>The talented people behind Anike+</p>
          </div>
          <div className="team-grid">
            <div
              className="team-member"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Design Director"
              />
              <h3>Adunola Johnson</h3>
              <p>Design Director</p>
            </div>
            <div
              className="team-member"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Head Goldsmith"
              />
              <h3>Chinedu Okoro</h3>
              <p>Head Goldsmith</p>
            </div>
            <div
              className="team-member"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
                alt="Marketing Director"
              />
              <h3>Zainab Ahmed</h3>
              <p>Marketing Director</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
