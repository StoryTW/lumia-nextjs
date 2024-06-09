import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logoBlock}>
          <Image
            src='/logo.svg'
            alt='logo'
            width={150}
            height={40}
            className={styles.img}
            quality={100}
            priority
          />
          <div className={styles.copyright}>2024 Lumia, All Rights Reserved.</div>
        </div>
        <div className={styles.socialsBlock}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href={'#'}>Solutions</Link>
            </li>
            <li className={styles.item}>
              <Link href={'#'}>Lumia</Link>
            </li>
            <li className={styles.item}>
              <Link href={'#'}>Lumia Stream</Link>
            </li>
          </ul>

          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href={'#'}>Developers</Link>
            </li>
            <li className={styles.item}>
              <Link href={'#'}>Docs</Link>
            </li>
            <li className={styles.item}>
              <Link href={'#'}>GitHub</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
