'use client';
import { Video } from '@/components/common/Video/Video';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionTen.module.scss';

export const SectionTen = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className={styles.sectionTen} id='ten'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
        transition={{ duration: 1.5 }}
        className={styles.wrp}
      >
        <div className={styles.info}>
          <h2 className={styles.title}>Airdrop</h2>
          <span className={styles.span}>Lumia Ecosystem Airdrop:</span>
          <p className={styles.description}>Season 1 - Drop #1 (Coming Soon)</p>
        </div>
      </motion.div>
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          className={styles.video}
          preload='metadata'
          width={'100%'}
          height={'100%'}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={'/10.mp4'} type='video/mp4' />
        </video>
      </div>
    </section>
  );
};
