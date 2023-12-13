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
  const [isListenerActive, setIsListenerActive] = useState(true);
  const { setScrolled } = useScrollStoreNav();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log('Scroll', scrollY);

      if (scrollY > 10 && isListenerActive) {
        setScrolled(true);
        setIsListenerActive(false);
      } else if (scrollY < 12 && !isListenerActive) {
        setScrolled(false);
        setIsListenerActive(true);
      }
    };

    if (isListenerActive) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (isListenerActive) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isListenerActive, setScrolled]);

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
