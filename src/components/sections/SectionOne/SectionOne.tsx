'use client';
import React, { FC, useRef } from 'react';
import styles from './SectionOne.module.scss';
import { TxtRotate } from '@/components/common/TxtRotate/TxtRotate';
import clsx from 'clsx';
import { ButtonColor } from '@/components/ui/Buttons/ButtonColor/ButtonColor';
import { motion, useInView } from 'framer-motion';
import { Video } from '@/components/common/Video/Video';

export const SectionOne: FC = () => {
  const ref = useRef(null);

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
          <ButtonColor onClick={() => console.log('click')}>AIRDROP</ButtonColor>
        </div>
      </motion.div>

      <Video src='/1.mp4' />
    </section>
  );
};
