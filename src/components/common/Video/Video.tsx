'use client';
import React, { useRef, FC, useEffect } from 'react';
import styles from './Video.module.scss';
import { motion, useInView } from 'framer-motion';
// import { useMediaQuery } from '@/hooks/useMediaQuery';

interface IVideo {
  src: string;
}

export const Video: FC<IVideo> = ({ src }) => {
  // const mobileL = useMediaQuery('mobileL');

  const videoRef = useRef<HTMLVideoElement>(null);

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play();
      } else {
        videoRef.current.currentTime = 0;
      }
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
      transition={{ duration: 0.7 }}
      className={styles.videoWrapper}
    >
      <video
        ref={videoRef}
        className={styles.video}
        preload='metadata'
        width={'100%'}
        height={'100%'}
        muted
        playsInline
        loop
        autoPlay
      >
        <source src={src} type='video/mp4' />
      </video>
    </motion.div>
  );
};
