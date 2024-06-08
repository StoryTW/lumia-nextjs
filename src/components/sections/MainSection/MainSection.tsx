'use client';
import React, { useState } from 'react';
import styles from './MainSection.module.scss';
import { Video } from '@/components/common/Video/Video';
import { Pagination } from '@/components/common/Pagination/Pagination';
import { SlidesText } from '@/components/common/SlidesText/SlidesText';

export const MainSection = () => {
  const [currentTimeoutIndex, setCurrentTimeoutIndex] = useState(0);

  return (
    <section id='#main' className={styles.mainSection}>
      <Video
        currentTimeoutIndex={currentTimeoutIndex}
        setCurrentTimeoutIndex={setCurrentTimeoutIndex}
      />
      <SlidesText currentTimeoutIndex={currentTimeoutIndex} />
      <Pagination />
    </section>
  );
};
