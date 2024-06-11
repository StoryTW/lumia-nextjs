import React from 'react';
import styles from './RoadmapText.module.scss';

export const RoadmapText = () => {
  return (
    <>
      <h3 className={styles.title}>
        Roadmap
      </h3>
      <div className={styles.q1}>
        Q1 2025
        <br />
        Integrate With Polygon AggLayer, Passport, Miden
      </div>
      <div className={styles.q2_2025}>
        Q2 2025
        <br />
        AI Yield Management via zkML for optimized RWA opportunities
      </div>
      <div className={styles.q3}>
        Q3
        <br />
        Mainnet with EigenDA and Decentralized Verifier
      </div>
      <div className={styles.q4}>
        Q4
        <br />
        Aggregated native yield restaking for RWAs
      </div>
      <div className={styles.q2}>
        Q2
        <br />
        Incentivized Testnet
      </div>
    </>
  );
};
