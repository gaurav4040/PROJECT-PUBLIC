import MusicList from "../components/musicList.tsx";

const Content = () => {
  return (
    <div className=" w-[screen] overflow-y-auto">
      <h2 className="text-2xl font-bold text-white p-4">Trending Now</h2>
      <MusicList />
    </div>
  );
};

export default Content;
