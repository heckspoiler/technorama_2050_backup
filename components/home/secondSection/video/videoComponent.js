'use client';

import React, { useEffect, useRef } from 'react';
import styles from './videoComponent.module.css';

const VideoComponent = () => {
  const videoRef = useRef(null);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const video = videoRef.current;
  //       if (video) {
  //         // The height of the viewport
  //         const viewportHeight = window.innerHeight;

  //         // Adjusted scroll position
  //         const adjustedScrollY = window.scrollY - viewportHeight;
  //         console.log('adscroll', adjustedScrollY);

  //         // Check if the adjusted scroll position is positive
  //         if (adjustedScrollY > 0) {
  //           // Calculate the fraction of scroll relative to the adjusted position
  //           const scrollFraction =
  //             adjustedScrollY / (document.body.scrollHeight - 2 * viewportHeight);
  //           const videoTime = scrollFraction * video.duration;
  //           video.currentTime = Math.min(videoTime, video.duration);
  //         }
  //       }
  //     };

  //     window.addEventListener('scroll', handleScroll);

  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  //   }, []);

  return (
    <div className={styles.videoContainer}>
      <video ref={videoRef} autoPlay loop muted>
        <source src="/videos/home/secondSection/mockup.mp4" type="video/mp4" />
        Your browser doesn't support HTML5 video.
      </video>
    </div>
  );
};

export default VideoComponent;
