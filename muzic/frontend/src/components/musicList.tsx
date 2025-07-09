import { useEffect, useState } from "react";
import useAudioStore from "../store/audioStore";

const MusicList = () => {
  const [songs, setSongs] = useState([]);
  const setTrack = useAudioStore((state:any) => state.setTrack);

useEffect(() => {
  fetch("/musicData.json")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched songs:", data);
      setSongs(data);
    })
    .catch((err) => console.error("Failed to fetch music data", err));
}, []);


  return (
    <div className="p-6 grid grid-cols-2 border border-gray-600  md:grid-cols-4 gap-4">
      {songs.map((song) => (
        <div
          key={song.id}
          className="bg-zinc-800 p-3 rounded-lg border border-amber-700 cursor-pointer hover:bg-zinc-700 transition"
          onClick={() => setTrack(song)}
        >
          <img
            src={song.cover}
            alt={song.title}
            className="w-full h-40 object-cover rounded mb-2"
          />
          <div className="text-white font-semibold">{song.title}</div>
          <div className="text-sm text-zinc-400">{song.artist}</div>
        </div>
      ))}
    </div>
  );
};

export default MusicList;
