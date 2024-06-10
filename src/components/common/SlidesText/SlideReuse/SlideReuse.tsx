import React, { FC } from 'react';
import styles from './SlideReuse.module.scss';

interface ISlideReuse {
  title: string;
  description: string;
  showTopic?: boolean;
}

export const SlideReuse: FC<ISlideReuse> = ({ title, description, showTopic = true }) => {
  return (
    <div className={styles.info}>
      {showTopic && (
        <div className={styles.topic}>
          <span className={styles.dash} />
          <span className={styles.topicText}>FEATURES</span>
        </div>
      )}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
