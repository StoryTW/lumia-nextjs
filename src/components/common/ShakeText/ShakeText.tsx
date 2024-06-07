'use client';
import React, { useState, useEffect } from 'react';
import styles from './ShakeText.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { opacityVariants } from '@/utils/animations';

const textArray = ['Connected', 'Intelligent', 'Private', 'Capital efficient', 'Liquid'];

export const ShakeText = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode='wait'>
      <motion.span
        className={styles.text}
        key={textArray[currentTextIndex]}
        variants={opacityVariants}
        initial={'hide'}
        animate={'show'}
        exit={'hide'}
        transition={{ duration: 0.3 }}
      >
        {textArray[currentTextIndex]}
      </motion.span>
    </AnimatePresence>
  );
};
