import { useState } from "react";
import { Heart, Youtube } from "lucide-react";

const RecipeCard = ({ recipe, onViewDetails }) => {
  const [isFavorite, setIsFavorite] = useState(
    JSON.parse(localStorage.getItem("favorites") || "[]").some(
      (item) => item.id === recipe.id
    )
  );

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const existingFavoriteIndex = favorites.findIndex((item) => item.id === recipe.id);

    if (existingFavoriteIndex !== -1) {
      favorites.splice(existingFavoriteIndex, 1);
    } else {
      favorites.push(recipe);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(existingFavoriteIndex === -1);
  };

  // Try to find a YouTube link from API
  const possibleYouTubeUrl = [recipe.sourceUrl, recipe.spoonacularSourceUrl].find(
    (url) => url && url.includes("youtube.com")
  );

  // If not available, fallback to a YouTube search link
  const youtubeLink = possibleYouTubeUrl || `https://www.youtube.com/results?search_query=${encodeURIComponent(recipe.title)} recipe`;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg relative">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-40 object-cover rounded-md"
      />

      <h2 className="text-lg font-semibold text-primary mt-2">{recipe.title}</h2>

      <button
        onClick={() => onViewDetails(recipe)}
        className="mt-2 text-[#676a8a] font-bold hover:underline"
      >
        View Recipe
      </button>

      {/*YouTube search link */}
      <a
        href={youtubeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-2 text-red-700 font-bold hover:underline flex items-center gap-1 ml-15"
      >
        <Youtube size={18} /> Watch on YouTube
      </a>

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
    </div>
  );
};

export default RecipeCard;
