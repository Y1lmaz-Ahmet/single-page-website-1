import React from "react";
import "./NavigationStyles.css";

const Navigation = () => {
  return (
    <nav className='navigation-container'>
      <img src='/ahmet.svg' alt='mijn logo' id='website-logo' />
      <h1>Ahmet's company page</h1>
      <ul className='navigation-wrapper'>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>WHAT WE DO</li>
        <li>SERVICES</li>
        <li>REFERENCES</li>
      </ul>
    </nav>
  );
};

export default Navigation;
