'use client'
import Image from 'next/image';
import React from 'react';
import styles from './ParnersSection.module.scss';
import { Footer } from '@/layouts/Footer/Footer';

export const ParnersSection = () => {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.imgWrapper}>
        <Image src={'/partners.png'} width={1920} height={1080} alt='parners_img' className={styles.img} />
      </div>
      <Footer />
    </section>
  );
};
