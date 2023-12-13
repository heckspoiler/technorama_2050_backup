import React from 'react';
import Link from 'next/link';
import { DonateButton } from './donateButton/donateButton';
import Logo from './logo/logo';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/">
          <Logo />
        </Link>

        <div className={styles.stroke}></div>
        <DonateButton />
      </div>
    </header>
  );
};

export default Header;
