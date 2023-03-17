import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../images/logo.png';

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="right">
        <nav>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/videos">Videos</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;