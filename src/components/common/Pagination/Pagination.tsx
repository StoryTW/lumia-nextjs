import React, { Dispatch, FC, SetStateAction } from 'react';
import styles from './Pagination.module.scss';
import { useVideoStore } from '@/store/useVideoStore';
import clsx from 'clsx';

interface IPagination {
  currentBlock: number;
  setCurrentBlock: Dispatch<SetStateAction<number>>;
}

export const Pagination: FC<IPagination> = ({ currentBlock, setCurrentBlock }) => {
  const timeCodesData = useVideoStore((state) => state.timeCodesData);
  const setTimeCode = useVideoStore((state) => state.setTimeCode);
  const timeCode = useVideoStore((state) => state.timeCode);

  const handleChangeTimeCode = (index: number) => {
    setTimeCode(timeCodesData[index]);
    setCurrentBlock(index);
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
              onClick={() => handleChangeTimeCode(index)}
            >
              <div className={styles.dot} />
            </button>
          );
        })}
      </div>
    </div>
  );
};
