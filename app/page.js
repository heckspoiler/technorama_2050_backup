'use client';

import { SvgBackground } from '@/components/home/svgBackground/svgBackground';
import { useScrollStoreNav } from '@/stores/navScrollStore';
import loadingStore from '@/stores/initialLoading';
import { useEffect } from 'react';
import { FirstSection } from '@/components/home/firstSection/FirstSection';
import { SecondSection } from '@/components/home/secondSection/SecondSection';
import { ThirdSection } from '@/components/home/thirdSection/thirdSection';

export default function App({ posts }) {
  const loadMainContent = loadingStore((state) => state.loadMainContent);
  const { setScrolled } = useScrollStoreNav();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 1;
      console.log('isScrolled: ', isScrolled);
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScrolled]);

  return (
    <>
      {loadMainContent && (
        <>
          {console.log('Rendering Home and SvgBackground')}
          <SvgBackground />
          <FirstSection />
          <SecondSection />
          <ThirdSection />
        </>
      )}
    </>
  );
}
