import { useState } from "react";
import RecipeCard from "../components/RecipeCard";

const Search = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRecipes = async () => {
    if (!query) return;
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${import.meta.env.VITE_EDAMAM_APP_ID}&app_key=${import.meta.env.VITE_EDAMAM_APP_KEY}`
      );
      const data = await response.json();

      if (data.hits.length === 0) {
        setError("No recipes found. Try another search!");
      } else {
        setRecipes(data.hits);
      }
    } catch (err) {
      setError("Failed to fetch recipes. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-primary text-center mb-4 mt-38 ml-8">
        Search for Recipes
      </h1>

      {/* Search Bar */}
      <div className=" ml-3 flex justify-center mb-6">
        <input
          type="text"
          placeholder="Enter a dish..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 w-80 border rounded-l-lg focus:outline-none"
        />
        <button
          onClick={fetchRecipes}
          className="border-2 bg-accent text-white px-4 rounded-r-lg hover:bg-[#081269] transition"
        >
          Search
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Loading Indicator */}
      {loading && <p className="text-center">Loading...</p>}

      {/* Recipe Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((item, index) => (
          <RecipeCard key={index} recipe={item.recipe} />
        ))}
      </div>
    </div>
  );
};

export default Search;