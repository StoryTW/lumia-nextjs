import React from 'react';
import styles from './SlideTwo.module.scss';

export const SlideTwo = () => {
  return (
    <div className={styles.wrp}>
      <div className={styles.info}>
        <h2 className={styles.title}>The new home of RWAs</h2>
        <p className={styles.description}>
          Lumia simplifies the building process and creates asymmetric advantages for projects thanks
          to boundless liquidity, unique cross-chain yield opportunities and unmatched
          interoperability.
        </p>
      </div>
    </div>
  );
};
