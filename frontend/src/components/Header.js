import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Header.css";

const Header = () => {
  const { token, logout } = useAuth();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          🚀 DevelopersHub
        </Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          {token ? (
            <>
              <Link to="/admin/dashboard">Admin</Link>
              <button onClick={logout} className="logout-link">
                Logout
              </button>
            </>
          ) : (
            <Link to="/admin/login" className="admin-link">
              Admin
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
