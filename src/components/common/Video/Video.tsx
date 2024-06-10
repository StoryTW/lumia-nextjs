'use client';
import React, { useRef, useState, useEffect, FC, Dispatch, SetStateAction } from 'react';
import styles from './Video.module.scss';
import { useVideoStore } from '@/store/useVideoStore';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface IVideo {
  currentBlock: number;
  setCurrentBlock: Dispatch<SetStateAction<number>>;
}

export const Video: FC<IVideo> = ({ currentBlock, setCurrentBlock }) => {
  const setTimeCode = useVideoStore((state) => state.setTimeCode);
  const timeCode = useVideoStore((state) => state.timeCode);

  const setShowText = useVideoStore((state) => state.setShowText);

  const setIsEnded = useVideoStore((state) => state.setIsEnded);

  const mobileL = useMediaQuery('mobileL');

  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reverseIntervalRef = useRef<number | null>(null);

  const handleWheel = (event: WheelEvent) => {
    if (playing) return;

    if (event.deltaY < 0 && currentBlock > 0) {
      setCurrentBlock((prevBlock) => prevBlock - 1);
    } else if (event.deltaY > 0) {
      setCurrentBlock((prevBlock) => prevBlock + 1);
    }

    waitBlock(currentBlock, event.deltaY < 0);
  };

  const waitBlock = (block: any, reverse: boolean) => {
    switch (block) {
      case 0:
        playVideo(3500, reverse);
        break;
      case 1:
        playVideo(3400, reverse);
        break;
      case 2:
        playVideo(3400, reverse);
        break;
      case 3:
        playVideo(3400, reverse);
        break;
      case 4:
        playVideo(3300, reverse);
        break;
      case 5:
        playVideo(3300, reverse);
        break;
      case 6:
        playVideo(3300, reverse);
        break;
      case 7:
        playVideo(3300, reverse);
        break;
      case 8:
        playVideo(3300, reverse);
        break;
      case 9:
        playVideo(3400, reverse);
        break;
      case 10:
        playVideo(6600, reverse);
        break;
      default:
        break;
    }
  };

  const playVideo = (duration: number, reverse: boolean) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
      if (reverse) {
        reversePlay(duration);
      } else {
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
    }
  };

  const reversePlay = (duration: number) => {
    const video = videoRef.current as HTMLVideoElement;

    video.currentTime -= 0.033;

    if (!video) return;

    reverseIntervalRef.current = window.setInterval(() => {
      if (video.currentTime <= 0) {
        setPlaying(false);
        setShowText(true);
        setTimeCode(video.currentTime);
      }

      return () => clearInterval(reverseIntervalRef.current as number);
    }, duration);
  };

  const onVideoEnd = () => {
    setIsEnded(true);
  };

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => handleWheel(event);
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);

      if (reverseIntervalRef.current) {
        clearInterval(reverseIntervalRef.current);
      }
    };
  }, [playing, currentBlock]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = timeCode;
    }
  }, [timeCode]);

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
        <source
          src={mobileL ? `/lumia-mobile.mp4#t=${timeCode}` : `/lumia.mp4#t=${timeCode}`}
          type='video/mp4'
        />
      </video>
    </div>
  );
};
