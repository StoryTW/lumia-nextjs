import { ShakeText } from '@/components/common/ShakeText/ShakeText';
import React from 'react';
import styles from './MainSection.module.scss';
import { Video } from '@/components/common/Video/Video';
import { Pagination } from '@/components/common/Pagination/Pagination';

export const MainSection = () => {
  return (
    <section id='#main' className={styles.mainSection}>
      <Video />
      <div className={styles.info}>
        <h1>Reinventing DeFI for RWAs</h1>
        <p>
          The first ever <ShakeText />
        </p>
        <p>restake roll up L2 for RWAs</p>
      </div>

      <Pagination />
    </section>
  );
};
