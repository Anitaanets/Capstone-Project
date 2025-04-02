import { useState } from "react";
import { Heart } from "lucide-react"; 
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(
    JSON.parse(localStorage.getItem("favorites") || "[]").some(
      (item) => item.recipe.label === recipe.label
    )
  );

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      favorites = favorites.filter((item) => item.recipe.label !== recipe.label);
    } else {
      favorites.push({ recipe });
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite); // Toggle favorite status
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg relative">
      <img
        src={recipe.image}
        alt={recipe.label}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold text-primary mt-2">{recipe.label}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{recipe.source}</p>
      
      {/* Favorite Button */}
      <button
        onClick={toggleFavorite}
        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
      >
        <Heart
          size={24}
          color={isFavorite ? "red" : "gray"}
          className={isFavorite ? "text-red-500" : "text-gray-500"}
        />
      </button>

      {/* Link to the recipe page */}
      <Link
        to={`/recipe/${encodeURIComponent(recipe.label)}`}
        className="block mt-2 text-[#676a8a] font-bold hover:underline"
      >
        View Recipe
      </Link>

      {/* YouTube Video Link */}
      <a
        href={recipe.videoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-2 text-[#676a8a] font-bold hover:underline"
      >
        Watch on YouTube
      </a>
    </div>
  );
};

export default RecipeCard;
