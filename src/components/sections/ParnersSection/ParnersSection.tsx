'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import styles from './ParnersSection.module.scss';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { motion, useInView } from 'framer-motion';

const ARRAY_PARTNERS = [
  {
    link: '/partners/partner-1.png',
  },
  {
    link: '/partners/partner-2.png',
  },
  {
    link: '/partners/partner-3.png',
  },
  {
    link: '/partners/partner-4.png',
  },
  {
    link: '/partners/partner-5.png',
  },
  {
    link: '/partners/partner-6.png',
  },
  {
    link: '/partners/partner-7.png',
  },
  {
    link: '/partners/partner-8.png',
  },
  {
    link: '/partners/partner-9.png',
  },
  {
    link: '/partners/partner-10.png',
  },
  {
    link: '/partners/partner-11.png',
  },
  {
    link: '/partners/partner-12.png',
  },
  {
    link: '/partners/partner-13.png',
  },
  {
    link: '/partners/partner-14.png',
  },
  {
    link: '/partners/partner-15.png',
  },
  {
    link: '/partners/partner-16.png',
  },
];

export const ParnersSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const tabletSM = useMediaQuery('tabletSM');
  // const mobileL = useMediaQuery('mobileL');

  const refTitle = useRef(null);
  const refList = useRef(null);

  const inViewTitle = useInView(refTitle, {
    once: false,
  });

  const inViewList = useInView(refList, {
    once: false,
  });

  return (
    <section className={styles.partnersSection}>
      <motion.h2
        ref={refTitle}
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: inViewTitle ? 1 : 0, x: inViewTitle ? 0 : 200 }}
        transition={{ duration: 1.5 }}
        className={styles.title}
      >
        Partners
      </motion.h2>
      <motion.div
        ref={refTitle}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: inViewTitle ? 1 : 0, x: inViewTitle ? 0 : -200 }}
        transition={{ duration: 1.5 }}
        className={styles.description}
      >
        Our esteemed network of partners, each a testament to their trust in Lumia's vision for
        innovation and success in DeFi
      </motion.div>
      <div className={styles.list} ref={refList}>
        {ARRAY_PARTNERS.map((item, index) => {
          return (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: inViewList ? 1 : 0, scale: inViewList ? 1 : 0 }}
              transition={{ duration: 1.3 }}
            >
              <Image
                width={tabletSM ? 124 : 182}
                height={tabletSM ? 42 : 56}
                src={item.link}
                alt={`logo_${item.link}`}
              />
            </motion.div>
          );
        })}
      </div>
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
          <source src={'/partners.mp4'} type='video/mp4' />
        </video>
      </div>
    </section>
  );
};
