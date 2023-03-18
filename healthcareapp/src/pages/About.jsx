import React from 'react';
import Card from '../components/About/Card/Card';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-heading">
        <h1 className="heading-1">Medicines cure diseases but only</h1>
        <h1 className="heading-2">
          <span>Doctors</span> can cure patients
        </h1>
      </div>
      <div className="about-main-heading">
        <h1>Our Doctors</h1>
      </div>
      <div className="about-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default About;
