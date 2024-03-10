import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/">
          <h1 className="logo">RU Netters</h1>
        </Link>

        {/* Navigation links */}
        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/dashboard" className="nav-link">
            Players
          </Link>
          <Link to="/login" className="nav-link">
            Log in
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
