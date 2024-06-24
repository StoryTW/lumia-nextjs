'use client';
import { Video } from '@/components/common/Video/Video';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionSeven.module.scss';
import { Features } from '@/components/common/Features/Features';
import { Divider } from '@/components/common/Divider/Divider';

export const SectionSeven = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.sectionSeven} id='seven'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }}
        transition={{ duration: 1.5 }}
        className={styles.wrp}
      >
        <div className={styles.info}>
          <Features queueNum='5'/>
          <h2 className={styles.title}>
          Institutional-Ready <br/>Built-in KYC and Privacy
          </h2>
          <p className={styles.description}>
          Employing PolygonID for secure and decentralized identity verification, Lumia ensures user privacy and data security. Lumia offers optional full-scale KYC per wallet, enabling regulated institutions to participate in the RWA ecosystem confidently.
          </p>
        </div>
      </motion.div>

      <Divider />

      <Video src='/8.mp4' />
    </section>
  );
};
