import React from 'react';
import HoverImage from './image/hoverImage';
import Image from 'next/image';
import styles from './firstSection.module.css';
import { motion as m } from 'framer-motion';

export const FirstSection = () => {
  const initial = { y: 200, opacity: 0 }; // Start from below and invisible
  const animate = { y: 0, opacity: 1 }; // Move to original position and fully visible
  const transition = {
    type: 'spring',
    stiffness: 100,
    duration: 0.5,
  };
  const delay = 0.5;
  return (
    <div className={styles.firstContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.twentyfifty}>
          <h1>
            <m.span
              className={styles.twenty}
              initial={initial}
              animate={animate}
              transition={transition}
            >
              2
            </m.span>
            <m.span
              className={styles.twenty}
              initial={initial}
              animate={animate}
              transition={transition}
            >
              0
            </m.span>
          </h1>
          <h1 className={styles.fifty}>
            <m.span
              initial={initial}
              animate={animate}
              transition={transition}
              delay={delay}
            >
              5
            </m.span>
            <m.span
              initial={initial}
              animate={animate}
              transition={transition}
              delay={delay}
            >
              0
            </m.span>
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
