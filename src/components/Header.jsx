import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="header-nav">
      <ul className="nav-list">
        <li><NavLink to="/about" className="nav-link" activeClassName="active-link">Про мене</NavLink></li>
        <li><NavLink to="/my-city" className="nav-link" activeClassName="active-link">Моє місто</NavLink></li>
        <li><NavLink to="/my-future" className="nav-link" activeClassName="active-link">Мій розвиток</NavLink></li>
      </ul>
    </nav>
  );
};

export default Header;
