import React, { useState } from "react";
import { inquiryAPI } from "../services/api";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await inquiryAPI.create(formData);
      if (response.message) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
    }
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you. Send us a message!</p>
      </div>

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && <div className="success-message">Your inquiry has been sent successfully!</div>}
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a Service</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile App">Mobile App</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-btn">Send Inquiry</button>
        </form>

        <div className="contact-info">
          <div className="info-item">
            <h3>📧 Email</h3>
            <p>info@devhub.com</p>
          </div>
          <div className="info-item">
            <h3>📞 Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="info-item">
            <h3>📍 Address</h3>
            <p>123 Developer Street, Tech City, TC 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
