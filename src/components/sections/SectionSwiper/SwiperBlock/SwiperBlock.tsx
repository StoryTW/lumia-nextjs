'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import clsx from 'clsx';
import styles from './SwiperBlock.module.scss';
import Image from 'next/image';
import { ReviewSlide } from './ReviewSlide/ReviewSlide';
import ArrowIcon from '@/assets/images/swiper-arrow.svg'
import { motion, useInView } from 'framer-motion';

const ARRAY_REVIEW = [
  {
    name: 'Sergej Kunz',
    position: 'Co-Founder of 1inch',
    comment:
      '“It’s really insane to see that you guys managed to bridge centralized liquidity into the Web3 decentralized finance world, and we are really  happy to have you on board.”',
    icon: <Image src='/review/1inch.png' alt='1inch' width={115} height={55} />,
  },
  {
    name: 'Etiënne vantKruys',
    position: 'Head of TRGC',
    comment:
      '"Working with the Lumia team has TRGC very excited for what the future  holds as we look forward to our continuted collaboration."',
    icon: <Image src='/review/trgc.svg' alt='trgc' width={107} height={23} />,
  },
  {
    name: 'Sasha Ivanov',
    position: 'Founder of Waves',
    comment:
      '"Our experience with Lumia has been outstanding! The friendly atmosphere  has really enhanced the workflow. Plus, the support team is always  responsive and super helpful."',
    icon: <Image src='/review/waves.png' alt='1inch' width={115} height={24} />,
  },
  {
    name: 'Max Kan',
    position: 'CMO of Prom',
    comment:
      '“Lumia Stream unlocks limitless possibilities for the DeFi realms and  all the builders seeking to drive scalability further. We see unmatched  potential in further collaboration with Lumia."',
    icon: <Image src='/review/prom.png' alt='1inch' width={106} height={40} />,
  },
];

export const SwiperBlock = () => {
  const swiperRef = useRef<SwiperClass>();

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });


  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
      transition={{ duration: 1.5 }}
    >
      <Swiper
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{
          clickableClass: styles.pagination,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.activeBullet,
          clickable: true,
        }}
        className={styles.swiperWrapper}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {ARRAY_REVIEW.map((slide) => {
          return (
            <SwiperSlide key={slide.name}>
              <ReviewSlide
                comment={slide.comment}
                icon={slide.icon}
                name={slide.name}
                position={slide.position}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className={clsx(styles.btn, styles.prev)} onClick={handlePrev}>
        <ArrowIcon />
      </button>
      <button className={clsx(styles.btn, styles.next)} onClick={handleNext}>
        <ArrowIcon />
      </button>
    </motion.div>
  );
};
