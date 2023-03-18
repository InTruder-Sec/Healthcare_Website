import React from 'react';
import './Card.css';
import img_1 from '../../../images/Testimonial Images/img_1.jpg';
import inverted from '../../../images/Testimonial Images/inverted.svg';

const Card = () => {
  return (
    <div className="card">
      <div className="svg">
        <img src={inverted} width="50px" height="50px" alt="inverted" />
      </div>
      <div className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora
        quam perspiciatis consequuntur accusantium rerum nam inventore sequi et
        laborum!
      </div>
      <div className="hr"></div>
      <div className="card-img">
        <img src={img_1} alt="logo" width="90px" height="90px" />
      </div>
    </div>
  );
};

export default Card;
