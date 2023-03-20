import React from "react";
import "./Hamburger.css";

let toggle = false;

function Hamburger() {
  return (
    <div className="hamburger" onClick={ToggleNav}>
      <div className="hamburger--div hamburger--1"></div>
      <div className="hamburger--div hamburger--2"></div>
      <div className="hamburger--div hamburger--3"></div>
    </div>
  );
}

function HamburgerOpen() {
  return (
    <div className="hamburger--open" id="hamburger--open">
      <center>
        <div className="title">
          <a href="/about">About Us</a>
        </div>
        <div className="title">
          <a href="/gallery">Gallery</a>
        </div>
        <div className="title">
          <a href="/blog">Blog</a>
        </div>
        <div className="title">
          <a href="/testimonials">Testimonials</a>
        </div>
        <div className="title">
          <a href="/videos">Videos</a>
        </div>
        <div className="title">
          <a href="/services">Services</a>
        </div>
      </center>
    </div>
  );
}

function ToggleNav() {
  if (toggle) {
    document.getElementById("hamburger--open").style.height = "0px";
    toggle = false;
  } else {
    document.getElementById("hamburger--open").style.height = "220px";
    toggle = true;
  }
}

export default Hamburger;
export { HamburgerOpen };
