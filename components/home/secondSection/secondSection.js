import React, { useState, useEffect } from 'react';
import styles from './secondSection.module.css';
import VideoComponent from './video/videoComponent';

export const SecondSection = () => {
  const [isSticky, setSticky] = useState(false);

  const checkSticky = () => {
    const headerHeight = 6 * 16; // 6rem in pixels
    const secondSection = document.querySelector(`.${styles.secondContainer}`);

    if (secondSection) {
      const rect = secondSection.getBoundingClientRect();
      setSticky(rect.top <= headerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkSticky);

    return () => {
      window.removeEventListener('scroll', checkSticky);
    };
  }, []);

  return (
    <div
      className={`${styles.secondContainer} ${isSticky ? styles.sticky : ''}`}
    >
      <VideoComponent />
      <h1>Technorama 2050</h1>
    </div>
  );
};
