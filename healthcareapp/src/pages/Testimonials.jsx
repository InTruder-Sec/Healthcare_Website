import React from 'react';
import Card from '../components/Testimonials/Card/Card';
import '../styles/testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-heading">
        <h1 className="testimonial-heading-1">What our patient say about us</h1>
        <h1 className="testimonial-heading-2">matters the most</h1>
      </div>
      <div className="testimonials-main-heading">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonials-container">
        <Card />
        <Card />
        <Card />
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

export default Testimonials;
