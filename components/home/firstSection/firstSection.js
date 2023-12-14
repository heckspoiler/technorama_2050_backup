import React, { useEffect } from 'react';
import HoverImage from './image/hoverImage';
import Image from 'next/image';
import styles from './firstSection.module.css';
import SplitType from 'split-type';
import { gsap } from 'gsap';

export const FirstSection = () => {
  useEffect(() => {
    const split = new SplitType('.twentyfifty, .fifty');

    gsap.to('.twentyfifty', {
      duration: 1,
      opacity: 1,
      ease: 'power4.out',
    });
  }, []);

  return (
    <div className={styles.firstContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.twentyfifty}>
          <h1 className={styles.twenty}>20</h1>
          <h1 className={styles.fifty}>50</h1>
        </div>
        <div>
          <HoverImage />
          {/* <Image
            src="/images/home/hero_sketch.png"
            width={1405 / 1.8}
            height={556 / 1.8}
            alt="Technorama 2050 Hero Sketch"
          /> */}
        </div>
      </div>
    </div>
  );
};
