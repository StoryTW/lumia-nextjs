'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import styles from './ParnersSection.module.scss';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export const ParnersSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const tabletSM = useMediaQuery('tabletSM');
  const mobileL = useMediaQuery('mobileL');

  return (
    <section className={styles.partnersSection}>
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
          <source
            src={mobileL ? '/partners-video-mobile.mp4' : '/partners-video.mp4'}
            type='video/mp4'
          />
        </video>
      </div>
      <Image
        src={tabletSM ? '/partners-image-mobile.png' : '/partners-image.png'}
        fill
        alt='parners_img'
        className={styles.img}
      />
    </section>
  );
};
