import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import styles from './SlidesText.module.scss';
import { opacityVariants } from '@/utils/animations';
import { SlideOne } from './SlideOne/SlideOne';
import { SlideTwo } from './SlideTwo/SlideTwo';
import { SlideReuse } from './SlideReuse/SlideReuse';
import { slideData } from '@/utils/constants';

export const SlidesText = () => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        variants={opacityVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.3 }}
      >
        <div className={styles.wrp}>
          <SlideOne />
          {/* <SlideTwo /> */}
          {/* <SlideReuse
            title={slideData.slideSix.title}
            description={slideData.slideSix.description}
          /> */}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
