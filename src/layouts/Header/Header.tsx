'use client';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonColor } from '@/components/ui/Buttons/ButtonColor/ButtonColor';
// import { useVideoStore } from '@/store/useVideoStore';
import { Burger } from '@/components/ui/Burger/Burger';
import { MobileBurger } from '@/components/common/MobileBurger/MobileBurger';

interface IHeader {
  // setCurrentBlock: Dispatch<SetStateAction<number>>;
}

export const Header: FC<IHeader> = () => {
  // const setStartPlay = useVideoStore((state) => state.setStartPlay);

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
              <button className={styles.link}>
                ABOUT
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.link}>
                FEATURES
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.link}>
                ROADMAP
              </button>
            </li>
            <li className={styles.item}>
              <Link href='#partners' className={styles.link}>
                PARTNERS
              </Link>
            </li>
            <li className={styles.item}>
              <ButtonColor onClick={() => console.log('click')}>AIRDROP</ButtonColor>
            </li>
          </ul>
        </nav>
      </div>
      <MobileBurger openMenu={openMenu} setOpenMenu={setOpenMenu} handleNavigate={() => console.log('click')} />
    </header>
  );
};
