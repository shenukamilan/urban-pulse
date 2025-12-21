import React from "react";
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">UrbanPulse</h1>
        <p className="header-subtitle">
          Where modern living meets seamless search. Find your dream home.
        </p>
      </div>
    </header>
  );
};

export default Header;
