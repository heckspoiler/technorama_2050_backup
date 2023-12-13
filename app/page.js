'use client';

import { SvgBackground } from '@/components/home/svgBackground/svgBackground';
import { useScrollStoreNav } from '@/stores/navScrollStore';
import loadingStore from '@/stores/initialLoading';
import { useEffect, useState } from 'react';
import { FirstSection } from '@/components/home/firstSection/firstSection';
import { SecondSection } from '@/components/home/secondSection/secondSection';
import { ThirdSection } from '@/components/home/thirdSection/thirdSection';

export default function App({ posts }) {
  const loadMainContent = loadingStore((state) => state.loadMainContent);
  const { setScrolled } = useScrollStoreNav();

  useEffect(() => {
    let testnumber = 0;

    const handleScroll = () => {
      console.log('Scroll', window.scrollY);
      const isScrolled = window.scrollY > 10;

      if (isScrolled && testnumber === 0) {
        testnumber = 1;
        setScrolled(true);
        window.removeEventListener('scroll', handleScroll);
      } else if (!isScrolled && testnumber === 1) {
        testnumber = 0;
        setScrolled(false);
        window.addEventListener('scroll', handleScroll);
      }
    };

    if (window.scrollY <= 10) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScrolled]);

  return (
    <>
      {loadMainContent && (
        <>
          <SvgBackground />
          <FirstSection />
          <SecondSection />
          <ThirdSection />
        </>
      )}
    </>
  );
}
