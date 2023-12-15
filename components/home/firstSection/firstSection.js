import React from 'react';
import HoverImage from './image/hoverImage';
import Image from 'next/image';
import styles from './firstSection.module.css';
import { motion as m } from 'framer-motion';

export const FirstSection = () => {
  return (
    <div className={styles.firstContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.twentyfifty}>
          <h1>
            <span className={styles.twenty}>2</span>
            <span className={styles.twenty}>0</span>
          </h1>
          <h1 className={styles.fifty}>
            <span>5</span>
            <span>0</span>
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
