import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const { admin, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("services");

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <div className="admin-dashboard">
      <nav className="admin-nav">
        <h2>DevelopersHub Admin</h2>
        <div className="nav-items">
          <button
            className={activeTab === "services" ? "active" : ""}
            onClick={() => setActiveTab("services")}
          >
            Services
          </button>
          <button
            className={activeTab === "portfolio" ? "active" : ""}
            onClick={() => setActiveTab("portfolio")}
          >
            Portfolio
          </button>
          <button
            className={activeTab === "blogs" ? "active" : ""}
            onClick={() => setActiveTab("blogs")}
          >
            Blogs
          </button>
          <button
            className={activeTab === "inquiries" ? "active" : ""}
            onClick={() => setActiveTab("inquiries")}
          >
            Inquiries
          </button>
          <button
            className={activeTab === "appointments" ? "active" : ""}
            onClick={() => setActiveTab("appointments")}
          >
            Appointments
          </button>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <div className="admin-content">
        <header className="admin-header">
          <h1>Welcome, {admin?.name}!</h1>
          <p>Manage your agency content and client interactions</p>
        </header>

        <div className="tab-content">
          {activeTab === "services" && <ServicesManager />}
          {activeTab === "portfolio" && <PortfolioManager />}
          {activeTab === "blogs" && <BlogsManager />}
          {activeTab === "inquiries" && <InquiriesManager />}
          {activeTab === "appointments" && <AppointmentsManager />}
        </div>
      </div>
    </div>
  );
};

const ServicesManager = () => {
  return (
    <div className="manager-section">
      <h2>Manage Services</h2>
      <p>Add, edit, and delete services here.</p>
      <button className="add-btn">+ Add Service</button>
      <table className="manager-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Web Development</td>
            <td>$5000</td>
            <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const PortfolioManager = () => (
  <div className="manager-section">
    <h2>Manage Portfolio</h2>
    <button className="add-btn">+ Add Portfolio Item</button>
    <p>Portfolio management functionality here</p>
  </div>
);

const BlogsManager = () => (
  <div className="manager-section">
    <h2>Manage Blogs</h2>
    <button className="add-btn">+ Add Blog Post</button>
    <p>Blog management functionality here</p>
  </div>
);

const InquiriesManager = () => (
  <div className="manager-section">
    <h2>Client Inquiries</h2>
    <p>View and manage client inquiries here</p>
  </div>
);

const AppointmentsManager = () => (
  <div className="manager-section">
    <h2>Scheduled Appointments</h2>
    <p>View and manage appointments here</p>
  </div>
);

export default AdminDashboard;
