import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Optional: If you want to add specific CSS styling for the Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/add" className="navbar-link">
            Add Wine Pairing
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/history" className="navbar-link">
            Wine History
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
