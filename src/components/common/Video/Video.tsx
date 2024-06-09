'use client';
import React, { useRef, useState, useEffect, FC, Dispatch, SetStateAction } from 'react';
import styles from './Video.module.scss';
import { useVideoStore } from '@/store/useVideoStore';

interface IVideo {
  currentBlock: number;
  setCurrentBlock: Dispatch<SetStateAction<number>>;
}

export const Video: FC<IVideo> = ({ currentBlock, setCurrentBlock }) => {
  const setTimeCode = useVideoStore((state) => state.setTimeCode);
  const timeCode = useVideoStore((state) => state.timeCode);

  const setShowText = useVideoStore((state) => state.setShowText);

  const setIsEnded = useVideoStore((state) => state.setIsEnded);

  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleWheel = (event: WheelEvent) => {
    if (playing) return;

    if (event.deltaY < 0 && currentBlock > 0) {
      setCurrentBlock((prevBlock) => prevBlock - 1);
    } else if (event.deltaY > 0) {
      setCurrentBlock((prevBlock) => prevBlock + 1);
    }

    waitBlock(currentBlock);
  };

  const waitBlock = (block: any) => {
    switch (block) {
      case 0:
        playVideo(3500);
        break;
      case 1:
        playVideo(3400);
        break;
      case 2:
        playVideo(3400);
        break;
      case 3:
        playVideo(3400);
        break;
      case 4:
        playVideo(3300);
        break;
      case 5:
        playVideo(3300);
        break;
      case 6:
        playVideo(3300);
        break;
      case 7:
        playVideo(3300);
        break;
      case 8:
        playVideo(3300);
        break;
      case 9:
        playVideo(10000);
        break;
      default:
        break;
    }
  };

  const playVideo = (duration: number) => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
      setShowText(false);
      setTimeout(() => {
        videoRef?.current?.pause();
        setPlaying(false);
        setShowText(true);
        setTimeCode(videoRef?.current?.currentTime as number);
      }, duration);
    }
  };

  const onVideoEnd = () => {
    setIsEnded(true);
  };

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => handleWheel(event);
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [playing, currentBlock]);

  return (
    <div className={styles.videoWrapper}>
      <video
        ref={videoRef}
        className={styles.video}
        onEnded={onVideoEnd}
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
