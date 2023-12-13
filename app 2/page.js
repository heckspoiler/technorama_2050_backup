'use client';

import Home from './home/page';
import { SvgBackground } from '@/components/home/svgBackground/svgBackground';

import loadingStore from '@/stores/initialLoading';

export default function App({ posts }) {
  const loadMainContent = loadingStore((state) => state.loadMainContent);
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
