'use client';
import { Video } from '@/components/common/Video/Video';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionFive.module.scss';

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
          <h2 className={styles.title}>
            Pioneering scalability, decentralization, and fast finality
          </h2>
          <p className={styles.description}>
            Through its innovative Data Availability Committee (DAC), Lumia harnesses the power of
            zkEVM technology to future-proof the network and capture economic value for LUMIA token
            holders and network participants, accelerating the transition from "stage 0" to "stage
            2" roll-up.
          </p>
        </div>
      </motion.div>

      <Video src='/5.mp4' />
    </section>
  );
};
