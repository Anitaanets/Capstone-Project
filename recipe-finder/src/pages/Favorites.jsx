import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch favorites from localStorage 
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (recipeLabel) => {
    // Remove a recipe from favorites
    const updatedFavorites = favorites.filter(
      (item) => item.recipe.label !== recipeLabel
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-primary text-center mb-6">
        Your Favorite Recipes
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-600">No favorite recipes yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((item, index) => (
            <div key={index} className="relative">
              <RecipeCard recipe={item.recipe} />
              <button
                onClick={() => removeFavorite(item.recipe.label)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
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
