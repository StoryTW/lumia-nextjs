'use client'
import { Video } from '@/components/common/Video/Video';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionThree.module.scss';

export const SectionThree = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.sectionThree} id='three'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }}
        transition={{ duration: 1.5 }}
        className={styles.wrp}
      >
        <div className={styles.info}>
          <h2 className={styles.title}>Account Abstraction and Intents</h2>
          <p className={styles.description}>
            Integrated EIP-4337 and intents technology simplify blockchain interactions, making them
            more intuitive for incoming
          </p>
        </div>
      </motion.div>

      <Video src='/3.mp4' />
    </section>
  );
};