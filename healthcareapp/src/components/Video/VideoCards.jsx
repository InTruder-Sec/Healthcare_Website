import React from "react";
import "./VideoCards.css";

// Left floated VideoLI)
function VideoCardLI() {
  return (
    <div className="video--cards--li">
      <div className="video--card--container">
        <iframe
          src="https://www.youtube.com/embed/8Fw-Up81SvU?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="video--card--details">
        <div className="video--card--details--head">
          Lorem ipsum dolor, sit amet consectetur
        </div>
        <div className="video--card--details--body">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          aliquam molestias provident? Beatae iusto molestias consequatur hic
          tempora vel at fuga, fugit provident illo. Iusto, earum? Laudantium
          cum eum fuga corporis doloribus saepe aperiam qui consequatur,
          molestias esse reprehenderit pariatur, harum modi dicta, corrupti
          omnis atque. Quas soluta quod quis.
        </div>
      </div>
    </div>
  );
}

function VideoCardRI() {
  return (
    <div className="video--cards--li">
      <div className="video--card--container--ri">
        <iframe
          src="https://www.youtube.com/embed/8Fw-Up81SvU?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="video--card--details--ri">
        <div className="video--card--details--head">
          Lorem ipsum dolor, sit amet consectetur
        </div>
        <div className="video--card--details--body">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          aliquam molestias provident? Beatae iusto molestias consequatur hic
          tempora vel at fuga, fugit provident illo. Iusto, earum? Laudantium
          cum eum fuga corporis doloribus saepe aperiam qui consequatur,
          molestias esse reprehenderit pariatur, harum modi dicta, corrupti
          omnis atque. Quas soluta quod quis.
        </div>
      </div>
    </div>
  );
}

export default VideoCardLI;
export { VideoCardRI };
