import React from 'react';
import styles from './ThirdBlock.module.scss';
import Image from 'next/image';

export const ThirdBlock = () => {
  return (
    <div className={styles.thirdBlock}>
      <div className={styles.header}>
        <Image src={'/eigen.svg'} alt='logo' height={32} width={81} priority quality={100} />
        <div className={styles.textHeader}>AVS</div>
      </div>
      <div className={styles.content}>
        <div className={styles.block}>
          <div className={styles.text}>zkML Recepit Prove</div>
        </div>
        <div className={styles.block}>
          <div className={styles.text}>Credit Scoring AVS</div>
        </div>
      </div>
    </div>
  );
};
