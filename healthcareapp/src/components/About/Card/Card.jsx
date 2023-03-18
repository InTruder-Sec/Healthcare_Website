import React from 'react';
import './Card.css';
import doctor from '../../../images/doctor.jpg';

const Card = () => {
  return (
    <div className="Card">
      <div className="Card-img">
        <img src={doctor} alt="Card" />
      </div>
      <div className="Card-name">
        <h4 className="doctor-name">Dr. William Thompson</h4>
      </div>
      <div className="Card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, quisquam.
      </div>
      <div className="Card-socials">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-regular fa-envelope"></i>
        <i class="fa-brands fa-linkedin-in"></i>
      </div>
    </div>
  );
};

export default Card;
