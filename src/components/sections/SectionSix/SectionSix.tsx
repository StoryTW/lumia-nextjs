'use client';
import { Video } from '@/components/common/Video/Video';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionSix.module.scss';

export const SectionSix = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.sectionSix} id='six'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }}
        transition={{ duration: 1.5 }}
        className={styles.wrp}
      >
        <div className={styles.info}>
          <h2 className={styles.title}>Aggregated Native Yield Restaking</h2>
          <p className={styles.description}>
            Lumia introduces industry-first yield maximization via Delta Neutral Liquidity
            Provisioning (DNLP) infrastructure, combined with yields derived from various restaking,
            liquid staking, and yield farming markets, making it ideal for RWA users.
          </p>
        </div>
      </motion.div>

      <Video src='/6.mp4' />
    </section>
  );
};
