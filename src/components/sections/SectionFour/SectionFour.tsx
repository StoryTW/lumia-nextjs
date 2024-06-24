'use client';
import { Video } from '@/components/common/Video/Video';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionFour.module.scss';
import { Features } from '@/components/common/Features/Features';
import { Divider } from '@/components/common/Divider/Divider';

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
          <Features queueNum='2' />
          <h2 className={styles.title}>
            A Revolution in Liquidity <br /> Provisioning with Lumia <br /> Stream
          </h2>
          <p className={styles.description}>
            Lumia Stream aggregates liquidity from the entire market (CEXs and DEXs) and the most
            popular chains to create a decentralized solution that makes liquidity available
            cross-chain via Atomic Swaps with Hashed Time Lock Contracts, ensuring seamless trading
            of assets.
          </p>
        </div>
      </motion.div>
      <Divider />
      <Video src='/4.mp4' />
    </section>
  );
};
