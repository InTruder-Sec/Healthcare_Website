import React from 'react';
import img_1 from '../images/img_1.png';

const Home = () => {
  return (
    <div className="home">
      <div className="home-text">
        <div className="home-text-heading">
          <h1 className="home-text-1">Healing Yourself</h1>
          <h1 className="home-text-2">is Connected with</h1>
          <h1 className="home-text-3">
            <span>healing</span> others.
          </h1>
        </div>
        <div className="home-text-sub-text">
          The nature healing force within each of us is the greatest force in
          getting well
        </div>

        <div className="home-text-btns">
          <button className="btn">Get Appointment</button>
          <a href="#">Why Hella? </a>
        </div>
      </div>

      <div className="home-img">
        <img src={img_1} alt="Home" />
      </div>
    </div>
  );
};

export default Home;
