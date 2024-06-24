'use client';
import { Video } from '@/components/common/Video/Video';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionSix.module.scss';
import { Features } from '@/components/common/Features/Features';
import { Divider } from '@/components/common/Divider/Divider';

export const SectionSix = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.sectionSix} id='six'>

    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }}
      transition={{ duration: 1.5 }}
      className={styles.wrp}
    >
      <div className={styles.info}>
        <Features queueNum='4'/>
        <h2 className={styles.title}>Seamless Onboarding of<br />Web2 using Account<br/>Abstraction and Intents</h2>
        <p className={styles.description}>
        Integrated EIP-4337 and intents technology simplify blockchain interactions, making them more intuitive for mass adoption.
        </p>
      </div>
    </motion.div>

    <Divider/>

    <Video src='/7.mp4' />
    </section>
  );
};
