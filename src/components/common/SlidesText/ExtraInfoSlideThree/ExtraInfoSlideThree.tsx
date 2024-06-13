import React from 'react';
import styles from './ExtraInfoSlideThree.module.scss';

const ARRAY_INFO = [
  'EigenDA',
  'AI/zkML Tech',
  'RaaS Infrastructure',
  'Biconomy Account Abstraction',
  'Polygon CDK and AggLayer',
  'Lumia Stream liquidity at its core',
];

export const ExtraInfoSlideThree = () => {
  return (
    <div className={styles.extraInfo}>
      <h2 className={styles.title}>Lumia is the next-gen modular L2 leveraging</h2>
      <div className={styles.wrapper}>
        {ARRAY_INFO.map((item) => {
          return <div className={styles.box}>{item}</div>;
        })}
      </div>
    </div>
  );
};
