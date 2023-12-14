import React, { useRef } from 'react';
import HoverImage from './image/hoverImage';
import Image from 'next/image';
import styles from './firstSection.module.css';
import SplitType from 'split-type';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const FirstSection = () => {
  const containerOne = useRef();

  useGSAP(
    () => {
      console.log('containerOne', containerOne);
      gsap.to('.teste', {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.5,
      });
    },
    { scope: containerOne.current }
  );

  return (
    <div className={styles.firstContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.twentyfifty} ref={containerOne}>
          <h1 className={styles.twenty}>
            <span className={`${styles.test} teste`}>2</span>
            <span className={`${styles.test} teste`}>0</span>
          </h1>
          <h1 className={styles.fifty}>
            <span className={`${styles.test} teste`}>5</span>
            <span className={`${styles.test} teste`}>0</span>
          </h1>
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
