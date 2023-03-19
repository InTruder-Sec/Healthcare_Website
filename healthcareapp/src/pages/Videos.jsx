import React from 'react';
import VideoCardLI from '../components/Video/VideoCards';
import { VideoCardRI } from '../components/Video/VideoCards';

const Videos = () => {
  const styles = {
    marginTop: '80px',
    marginBottom: '80px',
  };
  
  return (
    <div className="videos" style={styles}>
      <div className="blog-heading video--heading blog-heading--main">
        <h1>A good laugh and a long sleep are the</h1>
        <h1>best cures in the doctor's book.</h1>
      </div>
      <center>
        <div className="videos--rI--container">
          <VideoCardLI />
          <VideoCardRI />
          <VideoCardLI />
          <VideoCardRI />
        </div>
      </center>
    </div>
  );
};

export default Videos;
