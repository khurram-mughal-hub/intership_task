import React, { useEffect, useState } from "react";
import { serviceAPI } from "../services/api";
import "../styles/Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const data = await serviceAPI.getAll();
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading services...</div>;

  return (
    <div className="services">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Comprehensive solutions tailored to your needs</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service._id} className="service-card">
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <p className="price">${service.price}</p>
            {service.features && (
              <ul className="features-list">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            )}
            <button className="service-btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
