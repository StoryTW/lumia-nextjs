import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface IVideoStore {
  timeCodesData: number[];
  videoData: IVideoData;
  setVideoData: (data: IVideoData) => void;
  timeCode: number;
  setTimeCode: (time: number) => void;
}

const initialTimeCodes = [0, 4, 9, 14, 19, 24, 29, 34, 38, 43, 48];

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
  })),
);
