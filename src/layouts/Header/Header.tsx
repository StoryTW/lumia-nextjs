'use client';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonColor } from '@/components/ui/Buttons/ButtonColor/ButtonColor';
import { useVideoStore } from '@/store/useVideoStore';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Burger } from '@/components/ui/Burger/Burger';
import { MobileBurger } from '@/components/common/MobileBurger/MobileBurger';

interface IHeader {
  setCurrentBlock: Dispatch<SetStateAction<number>>;
}

export const Header: FC<IHeader> = ({ setCurrentBlock }) => {
  const timeCodesData = useVideoStore((state) => state.timeCodesData);
  const setTimeCode = useVideoStore((state) => state.setTimeCode);

  const tabletL = useMediaQuery('tabletL');

  const [openMenu, setOpenMenu] = useState(false);

  const handleNavigate = (index: number) => {
    setTimeCode(timeCodesData[index]);
    setCurrentBlock(index);
  };

  const toggleOpenMenu = () => setOpenMenu((prevState) => !prevState);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} href='/'>
          <Image src='/logo.svg' alt='logo' width={95} height={25} quality={100} priority />
        </Link>
        {!tabletL ? (
          <nav className={styles.navbar}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <button className={styles.link} onClick={() => handleNavigate(1)}>
                  ABOUT
                </button>
              </li>
              <li className={styles.item}>
                <button className={styles.link} onClick={() => handleNavigate(2)}>
                  FEATURES
                </button>
              </li>
              <li className={styles.item}>
                <button className={styles.link} onClick={() => handleNavigate(9)}>
                  ROADMAP
                </button>
              </li>
              <li className={styles.item}>
                <Link href='#partners' className={styles.link}>
                  PARTNERS
                </Link>
              </li>
              <li className={styles.item}>
                <ButtonColor onClick={() => handleNavigate(9)}>AIRDROP</ButtonColor>
              </li>
            </ul>
          </nav>
        ) : (
          <Burger openMenu={openMenu} toggleOpenMenu={toggleOpenMenu} />
        )}
      </div>
      <MobileBurger openMenu={openMenu} setOpenMenu={setOpenMenu} handleNavigate={handleNavigate} />
    </header>
  );
};
