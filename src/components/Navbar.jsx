import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add Wine Pairing</Link>
        </li>
        <li>
          <Link to="/about">About</Link> {/* Link to the About page */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
