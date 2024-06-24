'use client';
import { Video } from '@/components/common/Video/Video';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionEight.module.scss';
import { Features } from '@/components/common/Features/Features';
import { Divider } from '@/components/common/Divider/Divider';

export const SectionEight = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.sectionEight} id='eight'>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }}
        transition={{ duration: 1.5 }}
        className={styles.wrp}
      >
        <div className={styles.info}>
          <Features queueNum='6'/>
          <h2 className={styles.title}>Maximum Yields Exclusive to Lumia Using Aggregated Native Yield Restaking</h2>
          <p className={styles.description}>
          Lumia introduces industry-first yield maximization via Delta Neutral Liquidity Provisioning (DNLP) infrastructure stacked with yields derived from various restaking, liquid-staking, and yield farming markets - maximizing capital for financial institutions and retail investors alike.
          </p>
        </div>
      </motion.div>

      <Divider />
      
      <Video src='/9.mp4' />
    </section>
  );
};
