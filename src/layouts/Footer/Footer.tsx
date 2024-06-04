import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logoBlock}>
          <Image src='/logo.svg' alt='logo' width={150} height={40} className={styles.img} />
          <div className={styles.copyright}>2024 Lumia, All Rights Reserved.</div>
        </div>
        <div className={styles.socialsBlock}>
          <ul className={styles.list}>
            <li className={styles.item}>Solutions</li>
            <li className={styles.item}>Lumia</li>
            <li className={styles.item}>Lumia Stream</li>
          </ul>

          <ul className={styles.list}>
            <li className={styles.item}>Developers</li>
            <li className={styles.item}>Docs</li>
            <li className={styles.item}>GitHub</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
