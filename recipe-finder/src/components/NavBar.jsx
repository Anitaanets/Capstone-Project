import { Link } from 'react-router-dom';
import { Home, Heart } from "lucide-react";

const SideBar = () => {
  return (
    <TopNavBar />
  );
};

export default SideBar;

const TopNavBar = () => {
  return (
    <div className='w-full flex justify-between items-center border-b p-4 bg-white fixed top-0 left-0 z-10'>
      {/* Left-aligned Navigation Links */}
      <div className='flex gap-6'>
        <Link to={"/"} className='flex items-center gap-1'>
          <Home size={"24"} />
          <span className='font-bold hidden md:block'>Home</span>
        </Link>
        <Link to={"/favorites"} className='flex items-center gap-1'>
          <Heart size={"24"} />
          <span className='font-bold hidden md:block'>Favorites</span>
        </Link>
      </div>

      {/* Right-aligned Logo */}
      <div>
        <img src='/logo.png' alt="logo" className='h-8 md:h-12' />
      </div>
    </div>
  );
};
