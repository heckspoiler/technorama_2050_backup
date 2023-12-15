'use client';

import React, { useEffect, useRef } from 'react';
import styles from './cursor.module.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  const moveCursor = (e) => {
    const { clientX, clientY } = e;
    if (cursorRef.current) {
      cursorRef.current.style.top = `${clientY}px`;
      cursorRef.current.style.left = `${clientX}px`;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.addEventListener('mousemove', moveCursor);
      const onMouseEnter = () => {
        if (cursorRef.current) {
          cursorRef.current.style.mixBlendMode = 'normal';
        }
      };

      return () => {
        document.removeEventListener('mousemove', moveCursor);
      };
    }
  }, []);

  return <div className={styles.cursor} ref={cursorRef}></div>;
}
