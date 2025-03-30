import { Heart, Search, SoupIcon, Facebook, Twitter, Instagram, BookOpen, Info, Mail } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { Link } from 'react-router-dom';


const APP_ID = "3a90dcca"
const APP_KEY = "8efe448e3c89d6036e92cd9744aabd47";



const HomePage = () => {
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
		setLoading(true);
		setRecipes([]);
    try {
      const url = `https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`;
  
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Edamam-Account-User": "anetsanita7@gmail.com", // Add your registered email from Vercel env
        },
      });
  
      if (!res.ok) {
        throw new Error(`HTTP Error! Status: ${res.status}`);
      }
  
      const data = await res.json();
      console.log("API Response:", data);
      setRecipes(data.hits || []);
    } catch (error) {
      console.error("Fetch Error:", error.message);
    } finally {
      
		}
	}; 
  useEffect(() => {
    fetchRecipes("jollof-rice");
  },[]);

  return (
    <div className='bg-[#eff6ff] p-10 flex-1 min-h-screen flex flex-col justify-between'>
      <div className='max-w-screen-lg mx-auto flex-grow'>
        {/* Search Bar */}
        <form>
          <label className='input shadow-md flex items-center gap-2'>
            <Search className='mt-20' size={'24'} />
            <input 
              type='text'
              className='text-sm md:text-md grow mt-20 border-2'
              placeholder='Searching for a recipe?'
            />
          </label>
        </form>

       
        {/* Title & Description */}
        <h1 className='font-bold text-3xl md:text-5xl mt-4'>Must-Try Recipes!</h1>
        <p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>Hot picks!</p>

        {/* Recipe Grid */}
        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {loading ? (
            [...Array(9)].map((_item, index) => (
              <div key={index} className='flex flex-col gap-4 w-full'>
                <div className='skeleton h-32 w-full'></div>
                <div className='flex justify-between'>
                  <div className='skeleton h-4 w-28'></div>
                  <div className='skeleton h-4 w-24'></div>
                </div>
                <div className='skeleton h-4 w-1/2'></div>
              </div>
            ))
         ) : (
    recipes.map((recipe, index) => (
      <RecipeCard key={index} recipe={recipe.recipe} />
    ))
  )}
</div>
      </div>

      {/* Newsletter Subscription */}
      <div className='bg-white p-5 rounded-lg shadow-md mt-10 text-center'>
        <h2 className='text-xl font-bold mb-2'>Subscribe to Our Newsletter</h2>
        <p className='text-sm text-gray-600 mb-4'>Get the latest recipes and updates directly in your inbox.</p>
        <form className='flex justify-center gap-3'>
          <input type='email' className='border p-2 rounded-md w-1/2' placeholder='Enter your email' />
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Subscribe</button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className='bg-white py-4 mt-10 border-t flex flex-col items-center gap-4'>
        <div className='flex gap-6'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <Facebook size={24} className='text-blue-600 hover:text-blue-800' />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <Twitter size={24} className='text-blue-400 hover:text-blue-600' />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <Instagram size={24} className='text-pink-500 hover:text-pink-700' />
          </a>
        </div>
        <div className='flex gap-6 text-sm text-gray-600'>
          <Link to='/blog' className='hover:text-blue-500 flex items-center gap-1'><BookOpen size={18} /> Blog</Link>
          <Link to='/faqs' className='hover:text-blue-500 flex items-center gap-1'><Info size={18} /> FAQs</Link>
          <Link to='/contact' className='hover:text-blue-500 flex items-center gap-1'><Mail size={18} /> Contact</Link>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
