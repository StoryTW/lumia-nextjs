'use client';
import React, { useRef } from 'react';
import styles from './SectionTwo.module.scss';
import { motion, useInView } from 'framer-motion';
import { Video } from '@/components/common/Video/Video';

export const SectionTwo = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.secondSection} id='two'>
      <Video src='/1.mp4' className={styles.vid} left />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 200 }}
        transition={{ duration: 1.5 }}
        className={styles.wrp}
      >
        <div className={styles.info}>
          <h2 className={styles.title}>The New Home <br/>of RWA`s</h2>
          <p className={styles.description}>
          Lumia is the world’s first next gen modular L2 designed to provide deep  liquidity, unmatched capital efficiency, and essential infrastructure  for the future of DeFi and specifically Real-World Assets (RWAs) using Decentralized Physical Infrastructure Networks (DePIN). 
          <br/>
          <br/>
          Lumia bridges  the gap between physical assets and digital finance making tokenized  assets easily accessible on the blockchain - pioneering the next  evolution of finance.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
