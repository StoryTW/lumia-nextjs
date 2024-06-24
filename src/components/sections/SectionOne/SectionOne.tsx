'use client';
import React, { FC, useRef } from 'react';
import styles from './SectionOne.module.scss';
import { TxtRotate } from '@/components/common/TxtRotate/TxtRotate';
import clsx from 'clsx';
import { ButtonColor } from '@/components/ui/Buttons/ButtonColor/ButtonColor';
import { motion, useInView } from 'framer-motion';

export const SectionOne: FC = () => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.mainSection} id='one'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }}
        transition={{ duration: 1.5 }}
        className={styles.wrp}
      >
        <div className={styles.info}>
          <h1 className={styles.title}>Reinventing DeFI for RWAs</h1>
          <p className={styles.description}>
            The first ever <TxtRotate />
          </p>
          <p className={clsx(styles.description, styles.margin)}>restake roll up L2 for RWAs</p>
          <ButtonColor href='#nine' variant='sectionOne'>
            Node Sale
          </ButtonColor>
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
          <source src={'/main.mp4'} type='video/mp4' />
        </video>
      </div>
    </section>
  );
};
