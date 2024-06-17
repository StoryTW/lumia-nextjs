'use client';
import React, { FC, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonColor } from '@/components/ui/Buttons/ButtonColor/ButtonColor';
import { Burger } from '@/components/ui/Burger/Burger';
import { MobileBurger } from '@/components/common/MobileBurger/MobileBurger';

interface IHeader {}

export const Header: FC<IHeader> = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleOpenMenu = () => setOpenMenu((prevState) => !prevState);

  useEffect(() => {
    const handleAnchorClick = (event: any) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick));

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener('click', handleAnchorClick));
    };
  }, []);

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
              <ButtonColor href='#nine'>AIRDROP</ButtonColor>
            </li>
          </ul>
        </nav>
      </div>
      <MobileBurger
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        handleNavigate={() => console.log('click')}
      />
    </header>
  );
};
