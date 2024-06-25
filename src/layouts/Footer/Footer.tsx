import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

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

        <div className={styles.column}>
          <ul className={styles.list}>
            <li className={clsx(styles.item, styles.head)}>Product</li>
            <li className={styles.item}>
              <Link href='https://lumia.org/' target='_blank'>
                Product
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <ul className={styles.list}>
            <li className={clsx(styles.item, styles.head)}>Developers</li>
            <li className={styles.item}>
              <Link href='https://docs.lumia.org/' target='_blank'>
                Docs
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <ul className={styles.list}>
            <li className={clsx(styles.item, styles.head)}>Company</li>
            <li className={styles.item}>
              <Link href='https://lumia.org/' target='_blank'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <ul className={styles.list}>
            <li className={clsx(styles.item, styles.head)}>Social media</li>
            <li className={styles.socialWrp}>
              <Link href='https://x.com/BuildOnLumia' target='_blank'>
                <Image
                  src='/twitter.svg'
                  alt='twitter'
                  height={24}
                  width={24}
                  priority
                  quality={100}
                />
              </Link>
              <Link href='https://t.me/lumia_community' target='_blank'>
                <Image
                  src='/telegram.svg'
                  alt='social'
                  height={24}
                  width={24}
                  priority
                  quality={100}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
