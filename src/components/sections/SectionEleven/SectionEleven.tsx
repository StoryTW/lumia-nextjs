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
      <Video src='/11.mp4' left />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 200 }}
        transition={{ duration: 1.5 }}
        className={styles.wrp}
      >
        <div className={styles.info}>
          <h2 className={styles.title}>Roadmap</h2>
          <ul className={styles.description}>
            <li className={styles.item}>
              Q2 Incentivized Testnet
            </li>
            <li className={styles.item}>
              Q3 Mainnet with EigenDA and Decentralized Verifier
            </li>
            <li className={styles.item}>
              Q4 Aggregated native yield restaking for RWAs
            </li>
            <li className={styles.item}>
              Q1 2025 Integrate With Polygon AggLayer, Passport, Miden
            </li>
            <li className={styles.item}>
              Q2 2025 AI Yield Management via zkML for optimized RWA opportunities
            </li>
          </ul>
        </div>
      </motion.div>

    </section>
  );
};
