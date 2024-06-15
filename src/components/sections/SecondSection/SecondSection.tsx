'use client';
import React, { useRef } from 'react';
import styles from './SecondSection.module.scss';
import { motion, useInView } from 'framer-motion';
import { Video } from '@/components/common/Video/Video';

export const SecondSection = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.secondSection} id='second'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -200, scale: 0 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200, scale: inView ? 1 : 0 }}
        transition={{ duration: 0.7 }}
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

      <Video src='/3.mp4' />
    </section>
  );
};
