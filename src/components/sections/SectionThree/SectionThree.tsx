'use client';
import { Video } from '@/components/common/Video/Video';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionThree.module.scss';
import { Features } from '@/components/common/Features/Features';

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
          <Features />
          <h2 className={styles.title}>Focused on RWAs</h2>
          <p className={styles.description}>
            Lumia specializes in the seamless integration and liquidity management of real-world
            assets (RWAs), enabling businesses to efficiently bring their tokenized assets – real
            estate, commodities, and financial instruments – onto DeFi.
          </p>
        </div>
      </motion.div>

      <Video src='/3.mp4' />
    </section>
  );
};
