import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import style from '../styles/header.module.css';

const Header = () => (
  <header className={style.header}>
    <span className="me-2">
      <FaFileAlt />
    </span>
    <h1>CV Builder</h1>
  </header>
);

export default Header;
