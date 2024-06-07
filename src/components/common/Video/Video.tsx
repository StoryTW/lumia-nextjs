import React, { useRef, useState, useEffect } from 'react';
import styles from './Video.module.scss';
import { useVideoStore } from '@/store/useVideoStore';

export const Video = () => {
  const videoRef = useRef<HTMLVideoElement | any>(null);

  const setTimeCode = useVideoStore((state) => state.setTimeCode);
  const timeCode = useVideoStore((state) => state.timeCode);

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

        setTimeout(() => {
          videoRef.current.pause();
          setTimeCode(videoRef.current?.currentTime);
          setActiveReverse(true);
        }, 4500);
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
          setActiveReverse(false);
          setTimeCode(videoRef.current?.currentTime)
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
  }, [reverseInterval, activeReverse]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = timeCode;
      videoRef.current.pause();
    }
  }, [timeCode]);

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
        <source src={`/lumia.mp4#t=${timeCode}`} type='video/mp4' />
      </video>
    </div>
  );
};
