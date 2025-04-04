import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=9&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
        );
        const data = await response.json();

        if (data.recipes) {
          setRecipes(data.recipes);
        } else {
          setError("No recipes found.");
        }
      } catch (err) {
        setError("Failed to load recipes.");
      }

      setLoading(false);
    };

    fetchRecipes();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  const handleViewDetails = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center p-6 md:p-12 sm:pl-12">
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 ml-10">Discover Delicious Recipes</h1>
      <p className="text-lg font-bold dark:text-gray-300 mb-6 ml-20">Find, cook, and enjoy amazing meals with our recipe finder.</p>

      <Link
        to="/search"
        className="bg-[#676a8a] text-[#1C3D5A] px-6 py-3 rounded-lg text-lg font-bold hover:bg-[#A4B79B] transition"
      >
        Search Recipes
      </Link>

      {loading && <p className="mt-12">Loading recipes...</p>}
      {error && <p className="text-red-500 mt-12">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 ml-12">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-[#A4B79B] p-4 rounded-lg shadow-md">
            <RecipeCard recipe={recipe} onViewDetails={handleViewDetails} />
          </div>
        ))}
      </div>

      <div className="mt-12 w-full max-w-md bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-primary mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Get the latest recipes straight to your inbox!</p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 w-full focus:outline-none focus:ring-2 focus:ring-[#A4B79B]"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-[#676a8a] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#A4B79B] transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="mt-4 flex space-x-6">
        <a href="https://www.facebook.com" className="flex items-center gap-2 font-bold text-primary hover:text-[#A4B79B] transition">
          <Facebook size={20} /> Facebook
        </a>
        <a href="https://www.twitter.com" className="flex items-center gap-2 font-bold text-primary hover:text-[#A4B79B] transition">
          <Twitter size={20} /> Twitter
        </a>
        <a href="https://www.instagram.com" className="flex items-center gap-2 font-bold text-primary hover:text-[#A4B79B] transition">
          <Instagram size={20} /> Instagram
        </a>
      </div>

      <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Annie's Recipe Finder. All rights reserved.
      </p>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Home;
