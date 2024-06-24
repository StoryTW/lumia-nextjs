import React from 'react';
import styles from './SecondBlock.module.scss';
import Image from 'next/image';

export const SecondBlock = () => {
  return (
    <div className={styles.secondBlock}>
      <div className={styles.block}>
        <div className={styles.text}>decentralised sequencer network</div>
        <Image
          src={'/qub.svg'}
          width={36}
          height={36}
          priority
          alt='qub'
          quality={100}
          className={styles.qub1}
        />
        <Image
          src={'/qub.svg'}
          width={36}
          height={36}
          priority
          alt='qub'
          quality={100}
          className={styles.qub2}
        />
        <Image
          src={'/qub.svg'}
          width={36}
          height={36}
          priority
          alt='qub'
          quality={100}
          className={styles.qub3}
        />
        <Image
          src={'/qub.svg'}
          width={36}
          height={36}
          priority
          alt='qub'
          quality={100}
          className={styles.qub4}
        />
        <Image
          src={'/qub.svg'}
          width={36}
          height={36}
          priority
          alt='qub'
          quality={100}
          className={styles.qub5}
        />
        <Image
          src={'/qub.svg'}
          width={36}
          height={36}
          priority
          alt='qub'
          quality={100}
          className={styles.qub6}
        />
        <Image
          src={'/qub.svg'}
          width={36}
          height={36}
          priority
          alt='qub'
          quality={100}
          className={styles.qub7}
        />
        <Image
          src={'/qub.svg'}
          width={36}
          height={36}
          priority
          alt='qub'
          quality={100}
          className={styles.qub8}
        />
      </div>

      <Image
        src={'/arrows.svg'}
        alt='arrows'
        height={22}
        width={120}
        priority
        quality={100}
        className={styles.arrows}
      />
    </div>
  );
};
