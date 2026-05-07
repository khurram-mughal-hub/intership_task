import React, { useEffect, useState } from "react";
import { portfolioAPI } from "../services/api";
import "../styles/Portfolio.css";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const data = await portfolioAPI.getAll();
      setPortfolio(data);
    } catch (error) {
      console.error("Error fetching portfolio:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading portfolio...</div>;

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h1>Our Portfolio</h1>
        <p>Showcase of our latest projects and achievements</p>
      </div>

      <div className="portfolio-grid">
        {portfolio.map((item) => (
          <div key={item._id} className="portfolio-card">
            <img src={item.image} alt={item.title} className="portfolio-image" />
            <div className="portfolio-content">
              <h3>{item.title}</h3>
              <p className="category">{item.category}</p>
              <p>{item.description}</p>
              {item.technologies && (
                <div className="technologies">
                  {item.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              )}
              <a href={item.link} className="view-link">View Project →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
