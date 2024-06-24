'use client';
import React, { useRef, FC, useEffect } from 'react';
import styles from './Video.module.scss';
import { motion, useInView } from 'framer-motion';
import clsx from 'clsx';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface IVideo {
  src: string;
  left?: boolean;
  className?: string;
}

export const Video: FC<IVideo> = ({ src, left = false, className }) => {
  const mobileL = useMediaQuery('mobileL');

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
      initial={{ opacity: 0, x: left ? -200 : 200 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : left ? -200 : 200 }}
      transition={{ duration: 1.5 }}
      className={clsx(styles.videoWrapper, {
        [styles.left]: left,
      })}
    >
      <video
        ref={videoRef}
        className={clsx(styles.video, className && className)}
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
