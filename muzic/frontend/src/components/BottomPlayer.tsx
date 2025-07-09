// src/components/BottomPlayer.tsx
import { useEffect, useRef } from "react";
import useAudioStore from "../store/audioStore";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";

const BottomPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { currentTrack, isPlaying, togglePlay, pause }:any = useAudioStore();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    if (isPlaying) {
      audio.play().catch((err) => console.error("Audio error:", err));
    } else {
      audio.pause();
    }
  }, [isPlaying, currentTrack]);

  const handleEnded = () => {
    pause();
  };

  if (!currentTrack) return null;

  return (
    <div className=" bottom-0 left-0 right-0 h-20 bg-zinc-900 text-white flex items-center justify-between px-6 shadow-lg z-50">
      <div className="flex items-center space-x-4">
        <img
          src={currentTrack.cover}
          alt="cover"
          className="w-12 h-12 object-cover"//rounded
        />
        <div>
          <div className="text-sm font-semibold">{currentTrack.title}</div>
          <div className="text-xs text-zinc-400">{currentTrack.artist}</div>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <button ><SkipBack /></button>
        <button onClick={togglePlay} className="bg-white text-black rounded-none p-2"//rounded-full
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button><SkipForward /></button>
      </div>

      <div className="w-32" />

      <audio
        ref={audioRef}
        src={currentTrack?.url}
        onEnded={handleEnded}
        preload="auto"
        controls
        onError={(e) => console.error("Audio failed:", e)}
      />
    </div>
  );
};

export default BottomPlayer;
