import React from 'react';
import styles from './videoComponent.module.css';

const VideoComponent = () => {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted>
        <source src="/videos/home/secondSection/mockup.mp4" type="video/mp4" />
        Your browser doesn't support HTML5 video.
      </video>
    </div>
  );
};

export default VideoComponent;
