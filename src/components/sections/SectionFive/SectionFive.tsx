'use client';
import { Video } from '@/components/common/Video/Video';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionFive.module.scss';
import { Features } from '@/components/common/Features/Features';

export const SectionFive = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.sectionFive} id='five'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }}
        transition={{ duration: 1.5 }}
        className={styles.wrp}
      >
        <div className={styles.info}>
          <Features />
          <h2 className={styles.title}>Account Abstraction and Intents</h2>
          <p className={styles.description}>
            Integrated EIP-4337 and intents technology simplify blockchain interactions, making them
            more intuitive for incoming
          </p>
        </div>
      </motion.div>

      <Video src='/5.mp4' />
    </section>
  );
};
