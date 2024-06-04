import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

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
              <Link href='/'>ABOUT</Link>
            </li>
            <li className={styles.item}>
              <Link href='/'>FEATURES</Link>
            </li>
            <li className={styles.item}>
              <Link href='/'>AIRDROP</Link>
            </li>
            <li className={styles.item}>
              <Link href='/'>ROADMAP</Link>
            </li>
            <li className={styles.item}>
              <Link href='/'>PARTNERS</Link>
            </li>
            <li className={styles.item}>
              <Link href='/'>BLOG</Link>
            </li>
            <li className={styles.item}>
              <button
                style={{
                  color: '#fff',
                }}
              >
                AIRDROP
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
