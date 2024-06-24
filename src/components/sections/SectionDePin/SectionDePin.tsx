'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionDePin.module.scss';

export const SectionDePin = () => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.sectionNine} id='nine'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
        transition={{ duration: 1.5 }}
        className={styles.wrp}
      >
        <div className={styles.info}>
          <div className={styles.maybeImg}>
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
              <source src={'/depin.mp4'} type='video/mp4' />
            </video>
          </div>
          <h2 className={styles.title}>
            DePin — Be Part of the Liquidity Revolution <br /> with HyperNodes
          </h2>
          <p className={styles.description}>
            With just one license, you can access multiple reward pools and multiple yields. Join
            the revolution and unlock the <br /> full potential of Lumia with Lumia’s industry-first
            decentralized physical infrastructure nodes. Get a HyperNode.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
