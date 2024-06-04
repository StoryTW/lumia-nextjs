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
            <li className={styles.item}>ABOUT</li>
            <li className={styles.item}>FEATURES</li>
            <li className={styles.item}>AIRDROP</li>
            <li className={styles.item}>ROADMAP</li>
            <li className={styles.item}>PARTNERS</li>
            <li className={styles.item}>BLOG</li>
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
