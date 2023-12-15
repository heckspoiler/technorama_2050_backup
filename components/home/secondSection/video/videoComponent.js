import React, { useEffect, useRef } from 'react';
import styles from './videoComponent.module.css';

const VideoComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      if (video) {
        const viewportHeight = window.innerHeight;

        const adjustedScrollY = window.scrollY - viewportHeight;

        if (adjustedScrollY > 0) {
          const scrollFraction =
            adjustedScrollY / (document.body.scrollHeight - 2 * viewportHeight);
          const videoTime = (scrollFraction * video.duration) / 100;
          video.currentTime = Math.min(videoTime, video.duration);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.videoContainer}>
      <video ref={videoRef} loop muted>
        <source src="/videos/home/secondSection/mockup.mp4" type="video/mp4" />
        Your browser doesn't support HTML5 video.
      </video>
    </div>
  );
};

export default VideoComponent;
