import React from "react";
import "./NavigationStyles.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className='navigation-container'>
      <img src='/ahmet.svg' alt='mijn logo' id='website-logo' />
      <h1>Nexa</h1>
      <ul className='navigation-wrapper'>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/about'>about</Link>
        </li>
        <li>
          <Link to='/producten'>what we do</Link>
        </li>
        <li>
          <Link to='#service'>service</Link>
        </li>
        <li>
          <Link to='#reference'>reference</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
