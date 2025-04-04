import { useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(
    JSON.parse(localStorage.getItem("favorites") || "[]").some(
      (item) => item.id === recipe.id
    )
  );

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      favorites = favorites.filter((item) => item.id !== recipe.id);
    } else {
      favorites.push(recipe);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg relative">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold text-primary mt-2">{recipe.title}</h2>
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

const Search = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=9&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
      );
      const data = await response.json();

      if (data.results) {
        setRecipes(data.results);
      } else {
        setError("No recipes found.");
      }
    } catch (err) {
      setError("Failed to load recipes.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center p-6 md:p-12 sm:pl-12">
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 ml-10 mt-20" >Search for Recipes</h1>
      <p className="text-lg font-bold dark:text-gray-300 mb-6 ml-20">Search specific recipes based on your preferences.</p>

      <form onSubmit={handleSearch} className="mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a recipe..."
          className="p-2 border rounded-md"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-[#A4B79B] transition font-bold"
        >
          Search 
        </button>
      </form>

      {loading && <p className="mt-12">Loading recipes...</p>}
      {error && <p className="text-red-500 mt-12">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 ml-12">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-[#A4B79B] p-4 rounded-lg shadow-md">
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
