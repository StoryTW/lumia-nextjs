import React, { FC } from 'react';
import styles from './SlideReuse.module.scss';

interface ISlideReuse {
  title: string;
  description: string;
}

export const SlideReuse: FC<ISlideReuse> = ({ title, description }) => {
  return (
    <div className={styles.info}>
      <div className={styles.topic}>
        <span className={styles.dash} />
        <span className={styles.topicText}>FEATURES</span>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
