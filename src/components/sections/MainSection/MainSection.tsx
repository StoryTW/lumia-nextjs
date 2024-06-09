'use client';
import React, { useState } from 'react';
import styles from './MainSection.module.scss';
import { Video } from '@/components/common/Video/Video';
import { Pagination } from '@/components/common/Pagination/Pagination';
import { SlidesText } from '@/components/common/SlidesText/SlidesText';

export const MainSection = () => {
  const [currentBlock, setCurrentBlock] = useState(0);

  return (
    <section id='#main' className={styles.mainSection}>
      <Video
        currentBlock={currentBlock}
        setCurrentBlock={setCurrentBlock}
      />
      <SlidesText
        currentBlock={currentBlock}
        setCurrentBlock={setCurrentBlock}
      />
      <Pagination />
    </section>
  );
};
