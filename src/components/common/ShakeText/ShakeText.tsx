'use client';
import React, { useState, useEffect } from 'react';
import styles from './ShakeText.module.scss';
import clsx from 'clsx';

const textArray = ['Connected', 'Intelligent', 'Private', 'Capital efficient', 'Liquid'];

export const ShakeText = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShaking(true);
    }, 500); // Change text every 500ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isShaking) {
      const timer = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        setIsShaking(false);
      }, 500); // Duration of the shaking animation

      return () => clearTimeout(timer);
    }
  }, [isShaking, textArray.length]);

  return (
    <span
      className={clsx(styles.text, {
        [styles.shake]: isShaking,
      })}
    >
      {textArray[currentTextIndex]}
    </span>
  );
};
