import { AnimatePresence, motion } from 'framer-motion';
import React, { Dispatch, FC, ReactNode, SetStateAction, useEffect, useState } from 'react';
import styles from './SlidesText.module.scss';
import { opacityVariants } from '@/utils/animations';
import { SlideOne } from './SlideOne/SlideOne';
import { SlideTwo } from './SlideTwo/SlideTwo';
import { SlideReuse } from './SlideReuse/SlideReuse';
import { slideData } from '@/utils/constants';
import { useVideoStore } from '@/store/useVideoStore';

const currentText: { [index: number]: ReactNode } = {
  0: <SlideOne />,
  1: <SlideTwo />,
  2: (
    <SlideReuse title={slideData.slideThree.title} description={slideData.slideThree.description} />
  ),
  3: <SlideReuse title={slideData.slideFour.title} description={slideData.slideFour.description} />,
  4: <SlideReuse title={slideData.slideFour.title} description={slideData.slideFour.description} />,
  5: <SlideReuse title={slideData.slideFive.title} description={slideData.slideFive.description} />,
  6: <SlideReuse title={slideData.slideSix.title} description={slideData.slideSix.description} />,
  7: (
    <SlideReuse title={slideData.slideSeven.title} description={slideData.slideSeven.description} />
  ),
};

interface ISlidesText {
  currentBlock: number;
  setCurrentBlock: Dispatch<SetStateAction<number>>;
}

export const SlidesText: FC<ISlidesText> = ({ currentBlock, setCurrentBlock }) => {
  const timeCodesData = useVideoStore((state) => state.timeCodesData);
  const showText = useVideoStore((state) => state.showText);
  // const setShowText = useVideoStore((state) => state.setShowText);

  return (
    <AnimatePresence mode='wait'>
      {showText && (
        <motion.div
          variants={opacityVariants}
          initial='hide'
          animate='show'
          exit='hide'
          transition={{ duration: 0.7 }}
        >
          <div className={styles.wrp}>{currentText[currentBlock]}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
