'use client';
import { MainSection } from '@/components/sections/MainSection/MainSection';
import styles from './MainPage.module.scss';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';
// import { useLayoutEffect } from 'react';
// import gsap from 'gsap';

export function MainPage() {
  // useLayoutEffect(() => {
  //   gsap.registerPlugin(useGSAP, ScrollTrigger);
  // }, [])

  return (
    <main id='mainPage' className={styles.mainPage}>
      <MainSection />
    </main>
  );
}

// <main id='mainPage' className={styles.mainPage}>
//   <Swiper
//     loop={false}
//     autoplay={false}
//     // pagination={{
//     //   clickableClass: styles.swiper_pagination,
//     //   bulletClass: styles.bullet,
//     //   bulletActiveClass: styles.activeBullet,
//     //   clickable: true,
//     // }}
//     modules={[Pagination, Navigation]}
//     // onBeforeInit={(swiper) => {
//     //   swiperRef.current = swiper;
//     // }}
//   >
//     <SwiperSlide>
//       <h1>FIRST</h1>
//     </SwiperSlide>
//     <SwiperSlide>
//       <MainSection />
//     </SwiperSlide>
//     <SwiperSlide>
//       <h1>SECOND</h1>
//     </SwiperSlide>
//   </Swiper>
// </main>
