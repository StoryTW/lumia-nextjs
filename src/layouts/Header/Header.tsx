'use client';
import React, { FC, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonColor } from '@/components/ui/Buttons/ButtonColor/ButtonColor';
import { Burger } from '@/components/ui/Burger/Burger';
import { MobileBurger } from '@/components/common/MobileBurger/MobileBurger';

export const Header: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleOpenMenu = () => setOpenMenu((prevState) => !prevState);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} href='/'>
          <Image src='/logo.svg' alt='logo' width={150} height={40} quality={100} priority />
        </Link>
        <Burger openMenu={openMenu} toggleOpenMenu={toggleOpenMenu} />
        <nav className={styles.navbar}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link} href='#two'>
                ABOUT
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href='#three'>
                FEATURES
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href='#eleven'>
                ROADMAP
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href='#partners'>
                PARTNERS
              </a>
            </li>
            <li className={styles.item}>
              <ButtonColor href='#ten'>AIRDROP</ButtonColor>
            </li>
          </ul>
        </nav>
      </div>
      <MobileBurger openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
};
