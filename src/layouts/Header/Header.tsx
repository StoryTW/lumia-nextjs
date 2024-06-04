import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonColor } from '@/components/ui/Buttons/ButtonColor/ButtonColor';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} href='/'>
          <Image src='/logo.svg' alt='logo' width={95} height={25} />
        </Link>
        <nav className={styles.navbar}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href='#about'>ABOUT</Link>
            </li>
            <li className={styles.item}>
              <Link href='#features'>FEATURES</Link>
            </li>
            <li className={styles.item}>
              <Link href='#roadmap'>ROADMAP</Link>
            </li>
            <li className={styles.item}>
              <Link href='#partners'>PARTNERS</Link>
            </li>
            <li className={styles.item}>
              <Link href='#blog'>BLOG</Link>
            </li>
            <li className={styles.item}>
              <ButtonColor href='#airdrop'>AIRDROP</ButtonColor>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
