'use client';

import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import Header from '../components/header/header';
import './globals.css';

import { SvgBackground } from '@/components/home/svgBackground/svgBackground';
import { Splashscreen } from '@/components/general/splashscreen/splashscreen';
import CustomCursor from '@/components/general/cursor/cursor';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '/home';

  // Temporary flag to disable splash screen during development
  const enableSplashScreen = false;

  return (
    <html lang="en">
      <body className={inter.className}>
        {enableSplashScreen && isHome ? (
          <Splashscreen />
        ) : (
          <>
            <CustomCursor />
            <Header />
            <SvgBackground />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
