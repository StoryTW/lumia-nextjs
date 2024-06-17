'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionBlock.module.scss';

const ARRAY_INFO = [
  {
    title: 'EigenDA',
    left: true,
  },
  {
    title: 'AI/zkML Tech',
    left: false,
  },
  {
    title: 'RaaS Infrastructure',
    left: true,
  },
  {
    title: 'Biconomy Account Abstraction',
    left: false,
  },
  {
    title: 'Polygon CDK and AggLayer',
    left: true,
  },
  {
    title: 'Lumia Stream liquidity at its core',
    left: false,
  },
];

export const SectionBlock = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  const refList = useRef(null);

  const inViewList = useInView(refList, {
    once: false,
  });

  return (
    <section className={styles.sectionBlock} id='block'>
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -150 }}
        transition={{ duration: 1.5 }}
        className={styles.title}
      >
        Lumia is the next-gen modular L2 leveraging
      </motion.h2>
      <div className={styles.wrp} ref={refList}>
        {ARRAY_INFO.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: item.left ? -150 : 150 }}
              animate={{ opacity: inViewList ? 1 : 0, x: inViewList ? 0 : item.left ? -150 : 150 }}
              transition={{ duration: 1.5 }}
            >
              <div className={styles.box}>{item.title}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
