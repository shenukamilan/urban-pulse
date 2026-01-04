import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to={'/'} className="header-title-link"><h1 className="header-title">UrbanPulse</h1></Link>
        <p className="header-subtitle">
          Where modern living meets seamless search. Find your dream home.
        </p>
      </div>
    </header>
  );
};

export default Header;
