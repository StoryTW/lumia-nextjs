'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import styles from './ParnersSection.module.scss';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { motion, useInView } from 'framer-motion';

const ARRAY_PARTNERS = [
  {
    link: '/partners/partner-1.svg',
  },
  {
    link: '/partners/partner-2.svg',
  },
  {
    link: '/partners/partner-3.svg',
  },
  {
    link: '/partners/partner-4.svg',
  },
  {
    link: '/partners/partner-5.svg',
  },
  {
    link: '/partners/partner-6.svg',
  },
  {
    link: '/partners/partner-7.svg',
  },
  {
    link: '/partners/partner-8.svg',
  },
  {
    link: '/partners/partner-9.svg',
  },
  {
    link: '/partners/partner-10.svg',
  },
  {
    link: '/partners/partner-11.svg',
  },
  {
    link: '/partners/partner-12.svg',
  },
  {
    link: '/partners/partner-13.svg',
  },
  {
    link: '/partners/partner-14.svg',
  },
  {
    link: '/partners/partner-15.svg',
  },
  {
    link: '/partners/partner-16.svg',
  },
  {
    link: '/partners/partner-17.svg',
  },
  {
    link: '/partners/partner-18.svg',
  },
  {
    link: '/partners/partner-19.svg',
  },
  {
    link: '/partners/partner-20.svg',
  },
];

export const ParnersSection = () => {

  const tabletSM = useMediaQuery('tabletSM');

  const refTitle = useRef(null);
  const refList = useRef(null);

  const inViewTitle = useInView(refTitle, {
    once: false,
  });

  const inViewList = useInView(refList, {
    once: false,
  });

  return (
    <section className={styles.partnersSection} id='partners'>
      <motion.h2
        ref={refTitle}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inViewTitle ? 1 : 0, scale: inViewTitle ? 1 : 0.8 }}
        transition={{ duration: 1.5 }}
        className={styles.title}
      >
        Partners
      </motion.h2>
      <motion.div
        ref={refTitle}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inViewTitle ? 1 : 0, scale: inViewTitle ? 1 : 0.8 }}
        transition={{ duration: 1.5 }}
        className={styles.description}
      >
        Our esteemed network of partners, each a testament to their trust in Lumia's vision for
        innovation and success in DeFi
      </motion.div>
      <div className={styles.list} ref={refList}>
        {ARRAY_PARTNERS.map((item, index) => {
          {
            return (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: inViewList ? 1 : 0, scale: inViewList ? 1 : 0.8 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  width={tabletSM ? 124 : 182}
                  height={tabletSM ? 42 : 56}
                  src={item.link}
                  alt={`logo_${item.link}`}
                />
              </motion.div>
            );
          }
        })}
      </div>
    </section>
  );
};
