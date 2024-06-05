// import { ShakeText } from '@/components/common/ShakeText/ShakeText';
import React, { useEffect, useRef, useState } from 'react';
import styles from './MainSection.module.scss';

export const MainSection = () => {
  // const [playing, setPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement | any>(null);

  const [timeStep, setTimeStep] = useState(0);

  const [isReversing, setIsReversing] = useState(false);
  const [reverseInterval, setReverseInterval] = useState<any>(null);

  const handleWheel = (event: WheelEvent) => {
    if (videoRef.current) {
      if (event.deltaY > 0) {
        if (reverseInterval) {
          clearInterval(reverseInterval);
          setReverseInterval(null);
        }
        setIsReversing(false);
        videoRef?.current?.play();
      } else {
        if (!isReversing) {
          videoRef.current.pause();
          videoRef.current.playbackRate = 1;

          const interval = setInterval(() => {
            if (videoRef.current?.currentTime > 0) {
              videoRef.current.currentTime -= 1 / 240;
            } else {
              clearInterval(interval);
            }
          }, 1000 / 240);
          setReverseInterval(interval);
          setIsReversing(true);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (reverseInterval) {
        clearInterval(reverseInterval);
      }
    };
  }, [isReversing, reverseInterval]);

  return (
    <section id='#main' className={styles.mainSection}>
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          preload='metadata'
          width={'100%'}
          height={'100%'}
          muted
          // onClick={handleWheel}
        >
          <source src={`/product-1.mp4#t=${timeStep}`} type='video/mp4' />
        </video>
      </div>
      {/* <p>
        The first ever <ShakeText />
      </p>
      <p>restake roll up L2 for RWAs</p> */}
    </section>
  );
};
