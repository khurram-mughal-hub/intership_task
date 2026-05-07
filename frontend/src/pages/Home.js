import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to DevelopersHub</h1>
          <p>Your trusted partner for innovative digital solutions</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Expert Team</h3>
              <p>Experienced developers ready to bring your ideas to life</p>
            </div>
            <div className="feature-card">
              <h3>Quality Assurance</h3>
              <p>Rigorous testing to ensure your project exceeds expectations</p>
            </div>
            <div className="feature-card">
              <h3>24/7 Support</h3>
              <p>Always here to help with your questions and concerns</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
