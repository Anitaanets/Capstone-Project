import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch favorites from localStorage
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (recipeId) => {
    // Remove a recipe from favorites using the recipe ID
    const updatedFavorites = favorites.filter((item) => item.id !== recipeId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="p-6 ml-15 mt-15">
      <h1 className="text-3xl font-bold text-primary text-center mb-6">
        Your Favorite Recipes
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-600">No favorite recipes yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((item, index) => (
            <div key={index} className="relative">
              <RecipeCard recipe={item} />
              <button
                onClick={() => removeFavorite(item.id)} // Pass recipe id to removeFavorite
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-700 mt-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
