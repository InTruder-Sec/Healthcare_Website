import React from 'react';
import '../styles/Services.css';
import doctor from '../images/Services/doctor.jpeg';

const Services = () => {
  return (
    <div className="services">
      <div className="services-heading">
        <h1 className="service-heading-1">
          One of the deep secrets of life is that all that is really
        </h1>
        <h1 className="service-heading-2">
          worth doing is what we do for others.
        </h1>
      </div>

      <div className="services-main-heading">
        <h1>Our Services</h1>
      </div>

      <div className="services-content">
        <div className="services-left">
          <div className="service-1">
            <div className="services-content-heading">Lorem ipsum</div>
            <div className="services-content-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="service-1">
            <div className="services-content-heading">Lorem ipsum</div>
            <div className="services-content-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="service-1">
            <div className="services-content-heading">Lorem ipsum</div>
            <div className="services-content-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>

        <div className="services-mid">
          <img src={doctor} alt="" />
        </div>
        <div className="services-right">
          <div className="service-1">
            <div className="services-content-heading">Lorem ipsum</div>
            <div className="services-content-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="service-1">
            <div className="services-content-heading">Lorem ipsum</div>
            <div className="services-content-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="service-1">
            <div className="services-content-heading">Lorem ipsum</div>
            <div className="services-content-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
