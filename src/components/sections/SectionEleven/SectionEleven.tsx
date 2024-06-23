'use client';
import { Video } from '@/components/common/Video/Video';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionEleven.module.scss';

export const SectionEleven = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.sectionEight} id='eleven'>
      <Video src='/11.mp4' />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }}
        transition={{ duration: 1.5 }}
        className={styles.wrp}
      >
        <div className={styles.info}>
          <h2 className={styles.title}>Roadmap</h2>
          <div className={styles.description}>
            Q2 Incentivized Testnet
            <br />
            <div className={styles.dash} />
            <br />
            Q3 Mainnet with EigenDA and Decentralized Verifier
            <br />
            <div className={styles.dash} />
            <br />
            Q4 Aggregated native yield restaking for RWAs
            <br />
            <div className={styles.dash} />
            <br />
            Q1 2025 Integrate With Polygon AggLayer, Passport, Miden
            <br />
            <div className={styles.dash} />
            <br />
            Q2 2025 AI Yield Management via zkML for optimized RWA opportunities
          </div>
        </div>
      </motion.div>
    </section>
  );
};
