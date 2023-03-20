import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";
import Hamburger from "./Hamburger";

const NavBar = () => {
  return (
    <div className="navBar">
      <a
        className="left"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        href="/"
      >
        <img src={logo} alt="Logo" />
      </a>
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
      <Hamburger />
    </div>
  );
};

export default NavBar;
