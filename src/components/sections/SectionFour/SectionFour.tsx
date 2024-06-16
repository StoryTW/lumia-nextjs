'use client';
import { Video } from '@/components/common/Video/Video';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionFour.module.scss';

export const SectionFour = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.sectionFour} id='four'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }}
        transition={{ duration: 1.5 }}
        className={styles.wrp}
      >
        <div className={styles.info}>
          <h2 className={styles.title}>Built-In KYC and Privacy</h2>
          <p className={styles.description}>
            Employing PolygonID for secure and decentralized identity verification, Lumia ensures
            user privacy and data security. It offers optional full-scale KYC per wallet, enabling
            regulated institutions to participate in the RWA ecosystem confidently.
          </p>
        </div>
      </motion.div>

      <Video src='/4.mp4' />
    </section>
  );
};
