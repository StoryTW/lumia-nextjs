'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionContributors.module.scss';
// import { useMediaQuery } from '@/hooks/useMediaQuery';
import { data } from './helpers';

export const SectionContributors = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  // const tabletSM = useMediaQuery('tabletSM');

  return (
    <section className={styles.sectionBlock} id='block'>
      <motion.div
        className={styles.grid}
        ref={ref}
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -150 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h2 className={styles.text}>Core Contributors</motion.h2>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                gridArea: item.gridName,
              }}
            >
              <div className={styles.photo}>
                <img src={item.photo} alt='Photo' />
              </div>
              <div className={styles.name}>
                <p>{item.name}</p>
                <img src={item.in} alt='in' />
              </div>
              {item.hasSecondLogo && (
                <div className={styles.logos}>
                  <img src={item.logo} alt='Logo' />
                  <img src={item.logoTwo} />
                </div>
              )}
              {!item.hasSecondLogo && (
                <div className={styles.onlyOneLogo}>
                  <img src={item.logo} alt='Logo' />
                </div>
              )}
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};
