import React from 'react';
import styles from './Pagination.module.scss';
import { useVideoStore } from '@/store/useVideoStore';
import clsx from 'clsx';

export const Pagination = () => {
  const timeCodesData = useVideoStore((state) => state.timeCodesData);
  const setTimeCode = useVideoStore((state) => state.setTimeCode);
  const timeCode = useVideoStore((state) => state.timeCode);

  const handleChangeTimeCode = (time: number) => {
    setTimeCode(time);
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.wrapper}>
        {timeCodesData.map((time, index) => {
          const isActive =
            (index < timeCodesData.length - 1 &&
              timeCode >= time &&
              timeCode < timeCodesData[index + 1]) ||
            (index === timeCodesData.length - 1 && timeCode >= time);

          return (
            <button
              key={index}
              className={clsx(styles.bullet, {
                [styles.active]: isActive,
              })}
              onClick={() => handleChangeTimeCode(time)}
            >
              <div className={styles.dot} />
            </button>
          );
        })}
      </div>
    </div>
  );
};
