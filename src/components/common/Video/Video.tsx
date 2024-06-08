'use client'
import React, { useRef, useState, useEffect, FC, Dispatch, SetStateAction } from 'react';
import styles from './Video.module.scss';
import { useVideoStore } from '@/store/useVideoStore';

interface IVideo {
  currentTimeoutIndex: number;
  setCurrentTimeoutIndex: Dispatch<SetStateAction<number>>;
}

export const Video: FC<IVideo> = ({ currentTimeoutIndex, setCurrentTimeoutIndex }) => {
  const videoRef = useRef<HTMLVideoElement | any>(null);

  const [startPlay, setStartPlay] = useState(false);

  const setTimeCode = useVideoStore((state) => state.setTimeCode);
  const timeCode = useVideoStore((state) => state.timeCode);

  const timeCodesData = useVideoStore((state) => state.timeCodesData);
  const setShowText = useVideoStore((state) => state.setShowText);

  const setIsEnded = useVideoStore((state) => state.setIsEnded);
  const isEnded = useVideoStore((state) => state.isEnded);

  const [activeReverse, setActiveReverse] = useState(false);

  const [reverseInterval, setReverseInterval] = useState<any>(null);

  const handlePlayForward = () => {
    if (!isEnded && !startPlay) {
      if (reverseInterval) {
        clearInterval(reverseInterval);
        setReverseInterval(null);
      }

      setShowText(false);
      videoRef.current?.play();
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

  useEffect(() => {
    if (videoRef.current && !startPlay) {
      const timeoutDuration =
        (timeCodesData[currentTimeoutIndex + 1] - (timeCodesData[currentTimeoutIndex] || 0)) * 1000;

      const timer = setTimeout(() => {
        videoRef.current.pause();
        setStartPlay(false);
        setTimeCode(videoRef?.current?.currentTime);
        setActiveReverse(true);
        if (currentTimeoutIndex < 13) {
          setCurrentTimeoutIndex((prev: number) => prev + 1);
        }
        setShowText(true);
      }, timeoutDuration);

      return () => clearTimeout(timer);
    }
  }, [startPlay, currentTimeoutIndex, timeCodesData]);

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
