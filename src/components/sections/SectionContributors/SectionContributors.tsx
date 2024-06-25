'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './SectionContributors.module.scss';
import { data } from './helpers';
import LikeDin from '@/assets/images/likedin.svg';

export const SectionContributors = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.sectionBlock} id='block'>
      <motion.div
        className={styles.grid}
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className={styles.text}>Core Contributors</h2>
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
                <a className={styles.likedin} href={item.href} target='_blank'>
                  <LikeDin />
                </a>
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
