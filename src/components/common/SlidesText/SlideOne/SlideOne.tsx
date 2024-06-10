import React, { Dispatch, FC, SetStateAction } from 'react';
import styles from './SlideOne.module.scss';
import clsx from 'clsx';
import { ButtonColor } from '@/components/ui/Buttons/ButtonColor/ButtonColor';
import { TxtRotate } from '../../TxtRotate/TxtRotate';
import { useVideoStore } from '@/store/useVideoStore';

interface ISlideOne {
  setCurrentBlock: Dispatch<SetStateAction<number>>;
}

export const SlideOne: FC<ISlideOne> = ({ setCurrentBlock }) => {
  const timeCodesData = useVideoStore((state) => state.timeCodesData);
  const setTimeCode = useVideoStore((state) => state.setTimeCode);

  const setStartPlay = useVideoStore((state) => state.setStartPlay);

  const handleNavigate = (index: number) => {
    setTimeCode(timeCodesData[index]);
    setCurrentBlock(index);
    setStartPlay(true);
  };

  return (
    <div className={styles.wrp}>
      <div className={styles.info}>
        <h1 className={styles.title}>Reinventing DeFI for RWAs</h1>
        <p className={styles.description}>
          The first ever <TxtRotate />
        </p>
        <p className={clsx(styles.description, styles.margin)}>restake roll up L2 for RWAs</p>
        <ButtonColor onClick={() => handleNavigate(9)}>AIRDROP</ButtonColor>
      </div>
    </div>
  );
};
