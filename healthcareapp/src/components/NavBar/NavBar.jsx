import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../images/logo.png';

const NavBar = () => {
  return (
    <div>
      <img src={logo} alt="" />
    </div>
  );
};

export default NavBar;
