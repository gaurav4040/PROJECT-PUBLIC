import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar.tsx';
import BottomPlayer from '../components/BottomPlayer.tsx';

const MainLayout = () => {
  return (
    <div className="flex w-[170vh] overflow-clip bg-black">
      <Sidebar />
      <div className='flex flex-col'>

        <div className=" w-[78vw]">
          <Outlet /> {/* Dynamic route content */}
        </div>
        <div>
          <BottomPlayer  />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
