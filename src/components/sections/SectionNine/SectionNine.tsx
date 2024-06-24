'use client';
import { Video } from '@/components/common/Video/Video';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionNine.module.scss';
import { Features } from '@/components/common/Features/Features';
import { Divider } from '@/components/common/Divider/Divider';

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
          
        <Features queueNum="7"/>
          <h2 className={styles.title}>Industry-First Intelligent AI Yield Management via zkML and zkSNARKs</h2>
          <p className={styles.description}>
          Lumia ensures that trading decisions made by AI align with neural network model predictions without revealing the model's details, providing transparency and trust in yield management for the next generation of Web3 users.
          </p>
        </div>
      </motion.div>
      
      <Divider />

      <Video  src='/9.mp4' />
    </section>
  );
};
