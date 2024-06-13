import React, { FC, ReactNode } from 'react';
import styles from './SlideReuse.module.scss';
import clsx from 'clsx';

interface ISlideReuse {
  title: string;
  description: string;
  showTopic?: boolean;
  extra?: ReactNode;
  hideInMob?: boolean;
}

export const SlideReuse: FC<ISlideReuse> = ({
  title,
  description,
  showTopic = true,
  extra,
  hideInMob = false,
}) => {
  return (
    <>
      <div
        className={clsx(styles.wrp, {
          [styles.hide]: hideInMob,
        })}
      >
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
      </div>
      {extra && extra}
    </>
  );
};
