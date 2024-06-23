'use client';
import { Video } from '@/components/common/Video/Video';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionDePin.module.scss';
import { Features } from '@/components/common/Features/Features';

export const SectionDePin= () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.sectionNine} id='nine'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }}
        transition={{ duration: 1.5 }}
        className={styles.wrp}
      >
        <div className={styles.info}>
          <div className={styles.maybeImg}>

          </div>
          <h2 className={styles.title}>DePin — Be Part of the Liquidity Revolution <br/> with HyperNodes</h2>
          <p className={styles.description}>
          With just one license, you can access multiple reward pools and multiple yields. Join the revolution and unlock the <br/> full potential of Lumia with Lumia’s industry-first decentralized physical infrastructure nodes. Get a HyperNode.
          </p>
        </div>
      </motion.div>
    </section>
  );
};