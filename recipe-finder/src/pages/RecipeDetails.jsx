import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { recipeLabel } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://api.edamam.com/search?q=${recipeLabel}&app_id=${import.meta.env.VITE_EDAMAM_APP_ID}&app_key=${import.meta.env.VITE_EDAMAM_APP_KEY}`
        );
        const data = await response.json();

        if (data.hits.length === 0) {
          setError("Recipe not found.");
        } else {
          setRecipe(data.hits[0].recipe);
        }
      } catch (err) {
        setError("Failed to load recipe.");
      }

      setLoading(false);
    };

    fetchRecipeDetails();
  }, [recipeLabel]);

  const saveToFavorites = () => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFavorite = savedFavorites.some(
      (item) => item.recipe.label === recipe.label
    );

    if (!isAlreadyFavorite) {
      savedFavorites.push({ recipe });
      localStorage.setItem("favorites", JSON.stringify(savedFavorites));
      alert("Recipe saved to favorites!");
    } else {
      alert("This recipe is already in your favorites.");
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!recipe) return null;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary">{recipe.label}</h1>
      <img src={recipe.image} alt={recipe.label} className="w-full my-4 rounded-lg" />
      
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Source: <a href={recipe.url} target="_blank" className="text-accent hover:underline">{recipe.source}</a>
      </p>

      <h2 className="text-xl font-semibold mt-4">Ingredients:</h2>
      <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
        {recipe.ingredientLines.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-4">Health Labels:</h2>
      <div className="flex flex-wrap gap-2">
        {recipe.healthLabels.map((label, index) => (
          <span key={index} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-lg">
            {label}
          </span>
        ))}
      </div>

      {/* Save to Favorites Button */}
      <button
        onClick={saveToFavorites}
        className="bg-primary text-white px-6 py-2 mt-4 rounded-lg hover:bg-orange-500 transition"
      >
        Save to Favorites
      </button>
    </div>
  );
};

export default RecipeDetails;
