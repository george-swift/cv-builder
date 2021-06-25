import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt } from 'react-icons/fa';

const Header = () => (
  <header className="header sticky-top">
    <nav className="navbar">
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand logo text-white"
        >
          <FaFileAlt />
          <span className="ms-2">CV Builder</span>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
