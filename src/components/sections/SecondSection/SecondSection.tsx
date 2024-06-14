'use client'
import React, { useRef } from 'react';
import styles from './SecondSection.module.scss';
import { motion, useInView } from 'framer-motion';

export const SecondSection = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.secondSection}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className={styles.wrp}
      >
        <div className={styles.info}>
          <h2 className={styles.title}>The new home of RWAs</h2>
          <p className={styles.description}>
            Lumia simplifies the building process and creates asymmetric advantages for projects
            thanks to boundless liquidity, unique cross-chain yield opportunities and unmatched
            interoperability.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
