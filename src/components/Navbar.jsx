import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'brown', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyleType: 'none', color: 'white' }}>
        <li style={{ margin: '0 15px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link to="/add" style={{ color: 'white', textDecoration: 'none' }}>
            Add Wine Pairing
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
