import React from 'react'
import RecipeCard from '../components/RecipeCard';

const FavoritesPage = () => {
  const fav = true;

  return (
    <div className='bg-[#7d7d7b] flex-1 p-10 min-h-screen'>
      <div className='max-w-screen-lg mx-auto'>
        <p className='font-bold text-3xl md:text-5xl my-4 mt-8'>My Favorites.</p>

        {!fav && (
          <div className='h-[88vh] flex flex-col item-center gap-4'>
            <img src="/no-favorites.png" alt="favorite image" />
          </div>
        )}

        {fav && (
          <div className='grid grid-col-1 md:cols-2 lg:grid-cols-3 gap-4'>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;