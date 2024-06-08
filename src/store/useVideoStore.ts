import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface IVideoStore {
  timeCodesData: number[];
  videoData: IVideoData;
  setVideoData: (data: IVideoData) => void;
  timeCode: number;
  setTimeCode: (time: number) => void;
  isEnded: boolean;
  setIsEnded: (isEnded: boolean) => void;
  showText: boolean;
  setShowText: (showText: boolean) => void;
  currentTimeoutIndex: number;
  setCurrentTimeoutIndex: () => void;
}

const initialTimeCodes = [0, 4, 8, 14, 18, 23, 28, 33, 38, 43, 48, 53];

export const useVideoStore = create<IVideoStore>()(
  immer((set) => ({
    timeCodesData: initialTimeCodes,
    videoData: {} as IVideoData,
    setVideoData: (data) =>
      set((state) => {
        state.videoData = { ...data };
      }),
    timeCode: 0,
    setTimeCode: (time) =>
      set((state) => {
        state.timeCode = time;
      }),
    isEnded: false,
    setIsEnded: (isEnded) =>
      set((state) => {
        state.isEnded = isEnded;
      }),
    showText: false,
    setShowText: (showText) =>
      set((state) => {
        state.showText = showText;
      }),
    currentTimeoutIndex: 0,
    setCurrentTimeoutIndex: () =>
      set((state) => ({
        currentTimeoutIndex: state.currentTimeoutIndex + 1,
      })),
  })),
);
