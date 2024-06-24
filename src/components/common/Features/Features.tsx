import React from 'react';
import styles from './Features.module.scss';

type Queue = {
  queueNum?: "1" | "2" | "3" | "4" | "5" | "6" | "7"
}

export const Features = ({queueNum = "1"} : Queue) => {
  return (
    <div className={styles.wrp}>
      <div className={styles.dash} />
      <div className={styles.text}>FEATURE {queueNum}<sub>/7</sub></div>
    </div>
  );
};
