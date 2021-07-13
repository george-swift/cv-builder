import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt, FaGithub, FaLinkedinIn } from 'react-icons/fa';

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
        <div className="ms-auto me-3">
          <a
            className="icon text-white me-3"
            href="https://github.com/george-swift"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="icon text-white"
            href="https://www.linkedin.com/in/ubong-itok"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
