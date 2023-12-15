'use client';

import { useScrollStoreNav } from '@/stores/navScrollStore';
import loadingStore from '@/stores/initialLoading';
import { useEffect, useState, useRef } from 'react';
import { FirstSection } from '@/components/home/firstSection/firstSection';
import { SecondSection } from '@/components/home/secondSection/secondSection';
import { ThirdSection } from '@/components/home/thirdSection/thirdSection';

export default function App({ posts }) {
  const { setScrolled } = useScrollStoreNav();
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const animationTriggered = useRef(false);

  const handleScroll = () => {
    const threshold = 10;
    const currentScroll = window.scrollY;

    if (currentScroll > threshold && !animationTriggered.current) {
      setTriggerAnimation(true);
      console.log('trigger');
      animationTriggered.current = true; // Mark as triggered
    } else if (currentScroll <= threshold && animationTriggered.current) {
      setTriggerAnimation(false); // Trigger the reverse animation
      console.log('reverse');
      animationTriggered.current = false; // Reset
    }
    const gradientAngle = (currentScroll / 10) % 360;
    document.body.style.background = `linear-gradient(${gradientAngle}deg, rgba(186,227,229,1) 0%, rgba(235,240,162,1) 30%, rgba(186,227,229,1) 100%)`;
  };

  useEffect(() => {
    setScrolled(triggerAnimation);

    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [triggerAnimation, setScrolled]);

  return (
    <>
      {/* {loadMainContent && (
        <>
  
          <FirstSection />
          <SecondSection />
          <ThirdSection />
        </>
      )} enable again as soon as animation is needed*/}

      <>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </>
    </>
  );
}
