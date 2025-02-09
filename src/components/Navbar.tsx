import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div>
          <Link to="/" className="nav-link">Home</Link>
        </div>
        <div>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Products</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/users" className="nav-link">Users</Link>
          {/* <Link to="/register" className="nav-link">Register</Link> // we don't need this right now */}
          <Link to="/login" className="nav-link">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;