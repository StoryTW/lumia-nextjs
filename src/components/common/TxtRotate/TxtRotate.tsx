import React, { useState, useEffect } from 'react';
import styles from './TxtRotate.module.scss';

const arr = ['Connected', 'Intelligent', 'Private', 'Capital efficient', 'Liquid'];

export const TxtRotate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(arr[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (deleting) {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 100);
      } else {
        setDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length);
      }
    } else {
      const newText = arr[currentIndex];
      if (displayedText.length < newText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(newText.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, deleting, currentIndex, arr]);

  return <span className={styles.text}>{displayedText}</span>;
};
