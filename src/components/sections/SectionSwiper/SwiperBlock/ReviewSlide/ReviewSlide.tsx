import React, { FC, ReactNode } from 'react';
import styles from './ReviewSlide.module.scss';

interface IReviewSlide {
  name: string;
  position: string;
  comment: string;
  icon: ReactNode;
}

export const ReviewSlide: FC<IReviewSlide> = ({ comment, icon, name, position }) => {
  return (
    <div className={styles.reviewSlide}>
      <div className={styles.comment}>{comment}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.position}>{position}</div>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};
