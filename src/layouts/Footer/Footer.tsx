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
              Solutions
            </li>
            <li className={styles.item}>
              <Link href=' https://lumia.org/' target='_blank'>
                Lumia
              </Link>
            </li>
            <li className={styles.item}>
              <Link href='https://lumia.stream/' target='_blank'>
                Lumia Stream
              </Link>
            </li>
          </ul>

          <ul className={styles.list}>
            <li className={styles.item}>
              Developers
            </li>
            <li className={styles.item}>
              <Link href='https://docs.lumia.org/' target='_blank'>
                Docs
              </Link>
            </li>
            <li className={styles.item}>
              <Link href='https://github.com/orionprotocol' target='_blank'>GitHub</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
