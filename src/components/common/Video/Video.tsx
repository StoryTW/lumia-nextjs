import React, { useRef, useState, useEffect } from 'react';
import styles from './Video.module.scss';
import { useVideoStore } from '@/store/useVideoStore';

export const Video = () => {
  const videoRef = useRef<HTMLVideoElement | any>(null);

  const setTimeCode = useVideoStore((state) => state.setTimeCode);
  const timeCode = useVideoStore((state) => state.timeCode);

  const timeCodesData = useVideoStore((state) => state.timeCodesData);
  const setShowText = useVideoStore((state) => state.setShowText);

  const setIsEnded = useVideoStore((state) => state.setIsEnded);
  const isEnded = useVideoStore((state) => state.isEnded);

  // const setCurrentTimeoutIndex = useVideoStore((state) => state.setCurrentTimeoutIndex);
  // const currentTimeoutIndex = useVideoStore((state) => state.currentTimeoutIndex);

  const [activeReverse, setActiveReverse] = useState(false);
  const [currentTimeoutIndex, setCurrentTimeoutIndex] = useState(0);

  const [reverseInterval, setReverseInterval] = useState<any>(null);

  const handlePlayForward = () => {
    if (!isEnded) {
      if (reverseInterval) {
        clearInterval(reverseInterval);
        setReverseInterval(null);
      }

      setShowText(false);
      videoRef.current?.play();
      if (currentTimeoutIndex < timeCodesData.length - 1) {
        const timeoutDuration =
          (timeCodesData[currentTimeoutIndex + 1] - (timeCodesData[currentTimeoutIndex] || 0)) *
          1000;

        setTimeout(() => {
          videoRef?.current?.pause();
          setTimeCode(videoRef?.current?.currentTime as number);
          setActiveReverse(true);
          setCurrentTimeoutIndex((prev: number) => prev + 1);
          // setCurrentTimeoutIndex()
          setShowText(true);
        }, timeoutDuration);
      }
      return;
    }
  };

  const handlePlayBack = () => {
    if (activeReverse && videoRef && videoRef.current) {
      videoRef?.current?.pause();
      // videoRef?.current?.playbackRate = 1;

      const interval = setInterval(() => {
        if (videoRef && videoRef.current) {
          videoRef.current.currentTime -= 0.033;
        } else {
          clearInterval(interval);
        }
      }, 33);

      setReverseInterval(interval);
      setActiveReverse(false);
      setTimeCode(videoRef.current?.currentTime as number);
    }
    return;
  };

  const handleWheel = (event: WheelEvent) => {
    if (videoRef.current) {
      if (event.deltaY > 0) {
        handlePlayForward();
      } else {
        handlePlayBack();
      }
    }
  };

  const onVideoEnd = () => {
    setIsEnded(true);
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
      videoRef.current.pause();
      videoRef.current.currentTime = timeCode;
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
        onEnded={onVideoEnd}
        muted
        playsInline
      >
        <source src={`/lumia.mp4#t=${timeCode}`} type='video/mp4' />
      </video>
    </div>
  );
};
