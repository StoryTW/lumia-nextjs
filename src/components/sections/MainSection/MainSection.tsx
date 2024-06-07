import { ShakeText } from '@/components/common/ShakeText/ShakeText';
import React from 'react';
import styles from './MainSection.module.scss';
import { Video } from '@/components/common/Video/Video';
import { Pagination } from '@/components/common/Pagination/Pagination';
import { SlidesText } from '@/components/common/SlidesText/SlidesText';

export const MainSection = () => {
  return (
    <section id='#main' className={styles.mainSection}>
      <Video />
      <SlidesText />
      <Pagination />
    </section>
  );
};
