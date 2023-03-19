import React from 'react';
import '../styles/Gallery.css';
import doctors from '../images/gallery/doctors.jfif';

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-heading">
        <h1 className="gallery-heading-1">
          People pay the doctor for his trouble;
        </h1>
        <h1 className="gallery-heading-2">
          for his kindness, they still remain in his debt
        </h1>
      </div>
      <div className="gallery-main-heading">
        <h1>Short Glimpses</h1>
      </div>

      <div className="gallery-container">
        <div className="gallery-content">
          <div className="gallery-content-image">
            <img src={doctors} alt="doctor" />
          </div>
          <div className="gallery-content-text">
            <div className="text-head">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </div>
            <div className="text-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              itaque delectus quam ad temporibus quae architecto! Expedita
              quidem vitae maiores iure necessitatibus reprehenderit sunt, a
              dolore quia, cumque, ab ducimus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Omnis asperiores quam quasi, optio
              culpa eveniet eligendi odio quos placeat totam?
            </div>
          </div>
        </div>
        <div className="gallery-content">
          <div className="gallery-content-text">
            <div className="text-head">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </div>
            <div className="text-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              itaque delectus quam ad temporibus quae architecto! Expedita
              quidem vitae maiores iure necessitatibus reprehenderit sunt, a
              dolore quia, cumque, ab ducimus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Omnis asperiores quam quasi, optio
              culpa eveniet eligendi odio quos placeat totam?
            </div>
          </div>
          <div className="gallery-content-image">
            <img src={doctors} alt="doctor" />
          </div>
        </div>
        <div className="gallery-content">
          <div className="gallery-content-image">
            <img src={doctors} alt="doctor" />
          </div>
          <div className="gallery-content-text">
            <div className="text-head">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </div>
            <div className="text-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              itaque delectus quam ad temporibus quae architecto! Expedita
              quidem vitae maiores iure necessitatibus reprehenderit sunt, a
              dolore quia, cumque, ab ducimus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Omnis asperiores quam quasi, optio
              culpa eveniet eligendi odio quos placeat totam?
            </div>
          </div>
        </div>
        <div className="gallery-content">
          <div className="gallery-content-text">
            <div className="text-head">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </div>
            <div className="text-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              itaque delectus quam ad temporibus quae architecto! Expedita
              quidem vitae maiores iure necessitatibus reprehenderit sunt, a
              dolore quia, cumque, ab ducimus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Omnis asperiores quam quasi, optio
              culpa eveniet eligendi odio quos placeat totam?
            </div>
          </div>
          <div className="gallery-content-image">
            <img src={doctors} alt="doctor" />
          </div>
        </div>
        <div className="gallery-content">
          <div className="gallery-content-image">
            <img src={doctors} alt="doctor" />
          </div>
          <div className="gallery-content-text">
            <div className="text-head">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </div>
            <div className="text-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              itaque delectus quam ad temporibus quae architecto! Expedita
              quidem vitae maiores iure necessitatibus reprehenderit sunt, a
              dolore quia, cumque, ab ducimus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Omnis asperiores quam quasi, optio
              culpa eveniet eligendi odio quos placeat totam?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
