import React from 'react';
import styles from './PngSection.module.scss';
import { FirstBlock } from './FirstBlock/FirstBlock';
import { ThirdBlock } from './ThirdBlock/ThirdBlock';
import { SecondBlock } from './SecondBlock/SecondBlock';

export const PngSection = () => {
  return (
    <section className={styles.pngSection}>
      <h2 className={styles.title}>
        Tech Engineered for the Anticipated $10 Trillion RWA Industry
      </h2>
      <div className={styles.wrapper}>
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
      </div>
    </section>
  );
};
