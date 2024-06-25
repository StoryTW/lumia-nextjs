'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionBlock.module.scss';

export const SectionBlock = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className={styles.sectionBlock} id='block'>
      <div className={styles.centerText}>
        <h2 className={styles.text}>Lumia’s Core Strengths</h2>
      </div>
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
          <source src={'/3.mp4'} type='video/mp4' />
        </video>
      </div>
    </section>
  );
};
