'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './navbar.module.css';
import { navigations } from './navigations';
import { useScrollStoreNav } from '@/stores/navScrollStore';
import { motion as m } from 'framer-motion';

export const Navbar = () => {
  const { isScrolled } = useScrollStoreNav();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const router = useRouter();

  const navbarScrolledAnimation = {
    transform: 'translateY(0vh) translateZ(0)',
    gap: '6vw',
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  };

  const navbarDefaultAnimation = {
    transform: 'translateY(85vh) translateZ(0)',
    gap: '15vw',
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  };
  return (
    <m.nav
      className={styles.navbar}
      animate={isScrolled ? navbarScrolledAnimation : navbarDefaultAnimation}
    >
      {Object.values(navigations).map((navigation, index) => (
        <Link
          className={`${styles.navigationLink} ${
            hoveredIndex === index || activeIndex === index
              ? styles.linkHovered
              : styles.linkNotHovered
          }`}
          href={navigation.ref}
          key={navigation.ref + index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => setActiveIndex(index)}
        >
          <span
            className={styles.navigationLinkText}
            data-anchor="anchor"
            style={{
              color:
                hoveredIndex === index || activeIndex === index
                  ? 'white'
                  : 'initial',
            }}
          >
            {navigation.title}
          </span>
          <svg
            width="8"
            height="8"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              isScrolled === false &&
              (hoveredIndex === index || activeIndex === index)
                ? styles.hoveredNoScroll
                : isScrolled && activeIndex === index
                ? styles.hovered
                : ''
            }`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 2.67033C0 1.19555 1.19555 0 2.67033 0H15.4286C15.4286 8.53959e-05 15.4286 0.000170791 15.4286 0.000256186L15.4286 0.000253329C17.5104 2.08969 17.5043 5.4712 15.4149 7.55307L13.6592 9.30239L18.989 13.6484V19.2857H13.6484V9.3132L5.69144 17.2413C4.64672 18.2822 2.95597 18.2792 1.91503 17.2344C0.874097 16.1897 0.877164 14.499 1.92188 13.458L10.0688 5.34066H2.67033C1.19555 5.34066 0 4.14511 0 2.67033Z"
              fill={
                hoveredIndex === index || activeIndex === index
                  ? 'white'
                  : '#3A3A39'
              }
            />
          </svg>
        </Link>
      ))}
    </m.nav>
  );
};