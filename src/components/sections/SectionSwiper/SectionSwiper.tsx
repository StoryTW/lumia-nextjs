'use client';
import React, { useRef } from 'react';
import styles from './SectionSwiper.module.scss';
import { SwiperBlock } from './SwiperBlock/SwiperBlock';
import { motion, useInView } from 'framer-motion';

export const SectionSwiper = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.sectionAbout}>
      <motion.h2
        ref={ref}
        className={styles.title}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
        transition={{ duration: 1.3 }}
      >
        What People Are Saying About Lumia
      </motion.h2>
      <SwiperBlock />
    </section>
  );
};
