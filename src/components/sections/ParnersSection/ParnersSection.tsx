'use client'
import Image from 'next/image';
import React from 'react';
import styles from './ParnersSection.module.scss';

export const ParnersSection = () => {
  return (
    <section className={styles.partnersSection}>
      <Image src={'/partners.png'} fill alt='parners_img' className={styles.img} />
    </section>
  );
};
