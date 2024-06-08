import React from 'react';
import styles from './SlideOne.module.scss';
import { ShakeText } from '../../ShakeText/ShakeText';
import clsx from 'clsx';
import { ButtonColor } from '@/components/ui/Buttons/ButtonColor/ButtonColor';

export const SlideOne = () => {
  return (
    <div className={styles.info}>
      <h1 className={styles.title}>Reinventing DeFI for RWAs</h1>
      <p className={styles.description}>
        The first ever <ShakeText />
      </p>
      <p className={clsx(styles.description, styles.margin)}>restake roll up L2 for RWAs</p>
      <ButtonColor href={'#airdrop'}>
        AIRDROP
      </ButtonColor>
    </div>
  );
};