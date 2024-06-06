import React, { useRef, useState, useEffect } from 'react';
import styles from './Video.module.scss';

export const Video = () => {
  const videoRef = useRef<HTMLVideoElement | any>(null);

  const [timeStep, setTimeStep] = useState(0);

  const [isReversing, setIsReversing] = useState(false);
  const [activeReverse, setActiveReverse] = useState(false);

  const [reverseInterval, setReverseInterval] = useState<any>(null);

  const handleWheel = (event: WheelEvent) => {
    if (videoRef.current) {
      if (event.deltaY > 0) {
        if (reverseInterval) {
          clearInterval(reverseInterval);
          setReverseInterval(null);
        }
        videoRef?.current?.play();
        setIsReversing(false);

        setTimeout(() => {
          videoRef.current.pause();
          setTimeStep(Math.round(videoRef.current?.currentTime));
          setActiveReverse(true);
        }, 4000);
      } else {
        if (activeReverse) {
          videoRef.current.pause();
          videoRef.current.playbackRate = 1;

          const interval = setInterval(() => {
            if (videoRef.current?.currentTime > 0) {
              videoRef.current.currentTime -= 0.033;
            } else {
              clearInterval(interval);
            }
          }, 33);
          setReverseInterval(interval);
          setIsReversing(true);
          setActiveReverse(false);
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
  }, [isReversing, reverseInterval, activeReverse]);

  return (
    <div className={styles.videoWrapper}>
      <video
        ref={videoRef}
        className={styles.video}
        preload='metadata'
        width={'100%'}
        height={'100%'}
        muted
        playsInline
      >
        <source src={`/product-1.mp4#t=${timeStep}`} type='video/mp4' />
      </video>
    </div>
  );
};
