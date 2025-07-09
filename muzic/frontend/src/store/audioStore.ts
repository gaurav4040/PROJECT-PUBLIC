// src/store/audioStore.ts
import { create } from 'zustand';

const useAudioStore = create((set) => ({
  currentTrack: null, // { title, url, cover, etc. }
  isPlaying: false,
  volume: 1,

  setTrack: (track:any) => set({ currentTrack: track, isPlaying: true }),
  togglePlay: () => set((state:any) => ({ isPlaying: !state.isPlaying })),
  pause: () => set({ isPlaying: false }),
  play: () => set({ isPlaying: true }),
  setVolume: (volume:any) => set({ volume }),
}));

export default useAudioStore;
