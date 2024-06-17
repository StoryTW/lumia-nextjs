'use client';
import { Video } from '@/components/common/Video/Video';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionNine.module.scss';

export const SectionNine = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.sectionNine} id='nine'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }}
        transition={{ duration: 1.5 }}
        className={styles.wrp}
      >
        <div className={styles.info}>
          <h2 className={styles.title}>AI Yield Management via zkML</h2>
          <p className={styles.description}>
            Utilizing zkSNARKs, Lumia ensures that trading decisions made by AI bots align with
            neural network model predictions without revealing the model's details, providing
            transparency and trust in RWA yield management.
          </p>
        </div>
      </motion.div>

      <Video src='/9.mp4' />
    </section>
  );
};
