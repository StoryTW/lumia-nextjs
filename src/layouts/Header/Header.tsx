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
          <Image src='/logo.svg' alt='logo' width={95} height={25} quality={100} priority />
        </Link>
        <nav className={styles.navbar}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href='#about' className={styles.link}>
                ABOUT
              </Link>
            </li>
            <li className={styles.item}>
              <Link href='#features' className={styles.link}>
                FEATURES
              </Link>
            </li>
            <li className={styles.item}>
              <Link href='#roadmap' className={styles.link}>
                ROADMAP
              </Link>
            </li>
            <li className={styles.item}>
              <Link href='#partners' className={styles.link}>
                PARTNERS
              </Link>
            </li>
            <li className={styles.item}>
              <Link href='#blog' className={styles.link}>
                BLOG
              </Link>
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
