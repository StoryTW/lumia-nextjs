'use client';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import styles from './MainSection.module.scss';
import { Video } from '@/components/common/Video/Video';
import { Pagination } from '@/components/common/Pagination/Pagination';
import { SlidesText } from '@/components/common/SlidesText/SlidesText';

interface IMainSection {
  currentBlock: number;
  setCurrentBlock: Dispatch<SetStateAction<number>>
}

export const MainSection: FC<IMainSection> = ({ currentBlock, setCurrentBlock }) => {
  return (
    <section id='#main' className={styles.mainSection}>
      <Video currentBlock={currentBlock} setCurrentBlock={setCurrentBlock} />
      <SlidesText currentBlock={currentBlock} />
      <Pagination currentBlock={currentBlock} setCurrentBlock={setCurrentBlock} />
    </section>
  );
};
