'use client';
import React, { useRef } from 'react';
import styles from './PngSection.module.scss';
import { FirstBlock } from './FirstBlock/FirstBlock';
import { ThirdBlock } from './ThirdBlock/ThirdBlock';
import { SecondBlock } from './SecondBlock/SecondBlock';
import { motion, useInView } from 'framer-motion';

export const PngSection = () => {
  const ref = useRef(null);
  const refTitle = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  const inViewTitle = useInView(refTitle, {
    once: false,
  });

  return (
    <section className={styles.pngSection}>
      <motion.h2 
        className={styles.title}
        ref={refTitle}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inViewTitle ? 1 : 0, scale: inViewTitle ? 1 : 0.8 }}
        transition={{ duration: 1.3 }}
      >
        Tech Engineered for the Anticipated $10 Trillion RWA Industry
      </motion.h2>
      <motion.div
        className={styles.wrapper}
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
        transition={{ duration: 1.5 }}
      >
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
      </motion.div>
    </section>
  );
};
