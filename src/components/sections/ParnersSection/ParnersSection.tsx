'use client';
import Image from 'next/image';
import React from 'react';
import styles from './ParnersSection.module.scss';
import { Footer } from '@/layouts/Footer/Footer';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export const ParnersSection = () => {
  const mobileL = useMediaQuery('mobileL');

  return (
    <section className={styles.partnersSection}>
      {mobileL ? (
        <Image src={'/partners-mobile.png'} fill alt='parners_img' className={styles.imgMob} />
      ) : (
        <>
          <div className={styles.imgWrapper}>
            <Image src={'/partners.png'} fill alt='parners_img' className={styles.img} />
          </div>
          <Footer />
        </>
      )}
    </section>
  );
};
