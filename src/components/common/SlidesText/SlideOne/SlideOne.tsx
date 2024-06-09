import React from 'react';
import styles from './SlideOne.module.scss';
import clsx from 'clsx';
import { ButtonColor } from '@/components/ui/Buttons/ButtonColor/ButtonColor';
import { TxtRotate } from '../../TxtRotate/TxtRotate';
import { useVideoStore } from '@/store/useVideoStore';

export const SlideOne = () => {

  const timeCodesData = useVideoStore((state) => state.timeCodesData);
  const setTimeCode = useVideoStore((state) => state.setTimeCode);

  const handleNavigate = (index: number) => {
    setTimeCode(timeCodesData[index]);
    // setCurrentBlock(index);
  };

  return (
    <div className={styles.info}>
      <h1 className={styles.title}>Reinventing DeFI for RWAs</h1>
      <p className={styles.description}>
        The first ever <TxtRotate />
      </p>
      <p className={clsx(styles.description, styles.margin)}>restake roll up L2 for RWAs</p>
      <ButtonColor onClick={() => handleNavigate(9)}>AIRDROP</ButtonColor>
    </div>
  );
};
