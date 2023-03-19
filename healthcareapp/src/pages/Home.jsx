import React from "react";
import img_1 from "../images/img_1.png";
import img_2 from "../images/img_2.png";
import img_3 from "../images/img_3.png";

const Home = () => {
  return (
    <div className="main-home">
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

      <div className="home-1">
        <div className="home-heading-1">
          <h1>Community health centers do a great</h1>
          <h1>deal with limited resources </h1>
        </div>
        <div className="home-content-1">
          <div className="home-1-img">
            <img src={img_2} alt="" />
          </div>
          <div className="home-1-text">
            <h1 className="home-1-text-1">The life so short, the</h1>
            <h1 className="home-1-text-2">so long to learn</h1>
            <div className="home-text-sub-text text-1">
              The nature healing force within each of us is the greatest force
              in getting well
            </div>
            <div className="home-text-btns">
              <button className="btn">Get Appointment</button>
            </div>
          </div>
        </div>

        <div className="home-content-1">
          <div className="home-1-text">
            <h1 className="home-1-text-1">Each patient carries his </h1>
            <h1 className="home-1-text-2">own doctor inside him</h1>
            <div className="home-text-sub-text text-1">
              The nature healing force within each of us is the greatest force
              in getting well
            </div>
            <div className="home-text-btns">
              <button className="btn">Get Appointment</button>
            </div>
          </div>
          <div className="home-1-img img-2">
            <img src={img_3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
