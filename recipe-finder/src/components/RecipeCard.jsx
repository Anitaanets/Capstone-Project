import { Heart, HeartPulseIcon, SoupIcon } from 'lucide-react'
import React from 'react'

const RecipeCard = () => {
  return (
    <div className='flex flex-col rounded-md bg-[#081269] overflow-hidden p-3 relative w-85'>
    <a href="#" className='relative h-40'>
      <img src="/jollof-rice.jpg" alt="jollof rice" className='rounded-md w-full h-full object-cover cursor-pointer'/>
      <div 
      className='absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex item-center gap-1 text-sm'>
        <SoupIcon size={18}/>2 portions
      </div>

      <div className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer'>
        <Heart size={22} className='hover:fill-red-500 hover:text-red-500'/>
      </div>
    </a>
    <div className='flex mt-1'>
      <p className='font-bold tracking-wide text-white' >Jollof Rice.</p>
    </div>
    {/*<div className='flex gap-2 mt-auto'>
      <div className='flex gap-1 bg-[#d6f497] items-center p-1 rounded-md'>
        <HeartPulseIcon size={18}/>
        <span>Gluten</span>
      </div>
    </div>*/}
  </div>
  );
};

export default RecipeCard