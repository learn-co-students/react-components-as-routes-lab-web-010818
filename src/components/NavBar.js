import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from './Home'

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/movies'>Movies</NavLink></li>
        <li><NavLink to='/directors'>Directors</NavLink></li>
        <li><NavLink to='/actors'>Actors</NavLink></li>
    </ul>
  </div>
  );
};

export default NavBar;
