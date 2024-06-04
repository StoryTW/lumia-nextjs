import { ShakeText } from '@/components/common/ShakeText/ShakeText';
import React from 'react';
import styles from './MainSection.module.scss'

export const MainSection = () => {
  return (
    <section id='#main' className={styles.mainSection}>
      <p>
        The first ever <ShakeText />
      </p>
      <p>
        restake roll up L2 for RWAs
      </p>
    </section>
  );
};
