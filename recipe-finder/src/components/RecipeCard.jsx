import { useState } from "react";
import { Heart } from "lucide-react";

const RecipeCard = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(
    JSON.parse(localStorage.getItem("favorites") || "[]").some(
      (item) => item.id === recipe.id
    )
  );

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    // Check for existing favorite by ID
    const existingFavoriteIndex = favorites.findIndex((item) => item.id === recipe.id);

    if (existingFavoriteIndex !== -1) {
      favorites.splice(existingFavoriteIndex, 1); // Remove favorite if already present
    } else {
      favorites.push(recipe); // Add favorite
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(existingFavoriteIndex === -1); // Update the state of the heart button
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg relative">
      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-40 object-cover rounded-md"
      />

      {/* Recipe Title */}
      <h2 className="text-lg font-semibold text-primary mt-2">{recipe.title}</h2>

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

      {/* Link to Detailed Recipe Page */}
      {recipe.sourceUrl && (
        <a
          href={recipe.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-[#676a8a] font-bold hover:underline"
        >
          View Recipe
        </a>
      )}
    </div>
  );
};

export default RecipeCard;
