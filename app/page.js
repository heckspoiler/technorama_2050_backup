'use client';

import Home from './home/page';
import { SvgBackground } from '@/components/home/svgBackground/svgBackground';
import { useScrollStoreNav } from '@/stores/navScrollStore';
import loadingStore from '@/stores/initialLoading';
import { useEffect } from 'react';

export default function App({ posts }) {
  const loadMainContent = loadingStore((state) => state.loadMainContent);
  const { setScrolled } = useScrollStoreNav();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
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
          <Home />
        </>
      )}
    </>
  );
}
