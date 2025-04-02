import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react"; // ✅ Import icons
import RecipeCard from "../components/RecipeCard"; // Import the RecipeCard component

const Home = () => {
  const [recipes, setRecipes] = useState([
    {
      label: "Nigerian-jollof-Rice",
      image: "./jollof-rice.jpg", 
      videoLink: "https://www.youtube.com/watch?v=z4tNAyRdo70",
      apiLink: "https://api.edamam.com/search?q=spaghetti+carbonara&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY",
    },
    {
      label: "Efo-riro",
      image: "./efo.jpg", 
      videoLink: "https://www.youtube.com/watch?v=JBeamZQiL0s",
      apiLink: "https://api.edamam.com/search?q=chicken+alfredo&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY",
    },
    {
      label: "Egg fried rice",
      image: "./egg-fried-rice.jpg", 
      videoLink: "https://www.youtube.com/watch?v=zy56hMiCUYo",
      apiLink: "https://api.edamam.com/search?q=vegetable+stir+fry&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY",
    },
    {
      label: "egusi",
      image: "./egusi.jpg", 
      videoLink: "https://www.youtube.com/watch?v=SLxSksjC_0g",
      apiLink: "https://api.edamam.com/search?q=beef+tacos&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY",
    },
    {
      label: "Chicken Curry",
      image: "./Chicken-Curry.jpg", 
      videoLink: "https://www.youtube.com/watch?v=sPbrh0JFVv8",
      apiLink: "https://api.edamam.com/search?q=chicken+curry&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY",
    },
    {
      label: "okra-soup",
      image: "./okra-soup.jpeg", 
      videoLink: "https://www.youtube.com/watch?v=bV2sg6mmSH8",
      apiLink: "https://api.edamam.com/search?q=grilled+salmon&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY",
    },
    {
      label: "edikang-ikong",
      image: "./edikang.jpg", 
      videoLink: "https://www.youtube.com/watch?v=i80-r_xV0tY",
      apiLink: "https://api.edamam.com/search?q=pasta+primavera&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY",
    },
    {
      label: "Nigerian-salad",
      image: "./salad.jpg", 
      videoLink: "https://www.youtube.com/watch?v=14Jxen08yOU",
      apiLink: "https://api.edamam.com/search?q=chicken+caesar+salad&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY",
    },
    {
      label: "pancakes",
      image: "./pancakes.jpg", 
      videoLink: "https://www.youtube.com/watch?v=FLd00Bx4tOk&t=5s",
      apiLink: "https://api.edamam.com/search?q=margherita+pizza&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY",
    },
  ]);

  return (
    <div className="flex flex-col items-center justify-center text-center p-6 md:p-12 sm:pl-12">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 ml-10">
        Discover Delicious Recipes
      </h1>
      <p className="text-lg text-white  dark:text-gray-300 mb-6 ml-20">
        Find, cook, and enjoy amazing meals with our recipe finder.
      </p>

      {/* Search Button */}
      <Link
        to="/search"
        className="bg-[#676a8a] text-[#1C3D5A] px-6 py-3 rounded-lg text-lg font-bold hover:bg-[#FACC15] transition"
      >
        Search Recipes
      </Link>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {recipes.map((recipe, index) => (
          <div key={index} className="bg-[#A4B79B] p-4 rounded-lg shadow-md">
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="mt-12 w-full max-w-md bg-[#D1C6B1] p-6 rounded-xl">
        <h2 className="text-2xl font-semibold text-secondary dark:text-white mb-2">
          Subscribe to Our Newsletter
        </h2>
        <form className="flex border-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded-l-lg border border-gray-300 focus:outline-none"
          />
          <button className="bg-primary text-blue px-4 rounded-r-lg hover:bg-[#676a8a] transition">
            Subscribe
          </button>
        </form>
      </div>

      {/* Socials */}
      <div className="mt-8 flex space-x-6">
        <a href="#" className="flex items-center gap-2 font-bold text-primary hover:text-orange-500 transition">
          <Facebook size={20} /> Facebook 
        </a>
        <a href="#" className="flex items-center gap-2 font-bold text-primary hover:text-orange-500 transition">
          <Twitter size={20} /> Twitter
        </a>
        <a href="#" className="flex items-center gap-2 font-bold text-primary hover:text-orange-500 transition">
          <Instagram size={20} /> Instagram
        </a>
      </div>
    </div>
  );
};

export default Home;
