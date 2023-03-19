import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-socials">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-regular fa-envelope"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
        <div className="footer-main-content">
          <div className="footer-content">
            <div className="footer-content-heading">Who We're For</div>
            <ul className="content-list">
              <li className="list-items">Service Tour</li>
              <li className="list-items">Service Timing</li>
              <li className="list-items">Experience</li>
              <li className="list-items">Payments</li>
              <li className="list-items">Expert Doctors</li>
              <li className="list-items">PHD Doctors</li>
            </ul>
          </div>
          <div className="footer-content">
            <div className="footer-content-heading">Services</div>
            <ul className="content-list">
              <li className="list-items">Service Tour</li>
              <li className="list-items">Service Growth</li>
              <li className="list-items">Services Experience</li>
              <li className="list-items">Payments</li>
              <li className="list-items">Billings</li>
              <li className="list-items">Insights</li>
            </ul>
          </div>
          <div className="footer-content">
            <div className="footer-content-heading">Contact</div>
            <ul className="content-list">
              <li className="list-items">Newsroom</li>
              <li className="list-items">Leaders</li>
              <li className="list-items">Case Studies</li>
              <li className="list-items">Help Center</li>
              <li className="list-items">Blog </li>
            </ul>
          </div>
          <div className="footer-content">
            <div className="footer-content-heading">About</div>
            <ul className="content-list">
              <li className="list-items">Website Property</li>
              <li className="list-items">Doctors</li>
              <li className="list-items">Payment Company</li>
              <li className="list-items">Partners</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <span>&copy;</span> 2022 Rights Reserved, HealthCare Website
        </div>
        <div className="footer-bottom-right">
          Privacy | Terms and Conditions | Privacy by Design | Secure by Design
        </div>
      </div>
    </div>
  );
};

export default Footer;
