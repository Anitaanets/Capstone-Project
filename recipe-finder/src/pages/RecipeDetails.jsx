import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Use Spoonacular's recipe ID
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
        );
        const data = await response.json();

        if (!data || data.status === "failure") {
          setError("Recipe not found.");
        } else {
          setRecipe(data);
        }
      } catch (err) {
        setError("Failed to load recipe.");
      }

      setLoading(false);
    };

    fetchRecipeDetails();
  }, [recipeId]);

  const saveToFavorites = () => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFavorite = savedFavorites.some((item) => item.id === recipe.id);

    if (!isAlreadyFavorite) {
      savedFavorites.push(recipe);
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
      {/* Recipe Title */}
      <h1 className="text-3xl font-bold text-primary">{recipe.title}</h1>

      {/* Recipe Image */}
      <img src={recipe.image} alt={recipe.title} className="w-full my-4 rounded-lg" />

      {/* Recipe Source Link */}
      {recipe.sourceUrl && (
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Source:{" "}
          <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            {recipe.sourceName || "Recipe Source"}
          </a>
        </p>
      )}

      {/* Ingredients List */}
      <h2 className="text-xl font-semibold mt-4">Ingredients:</h2>
      <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
        {recipe.extendedIngredients?.map((ingredient, index) => (
          <li key={index}>{ingredient.original}</li>
        ))}
      </ul>

      {/* Instructions */}
      <h2 className="text-xl font-semibold mt-4">Instructions:</h2>
      <p className="text-gray-700 dark:text-gray-300">{recipe.instructions ? recipe.instructions : "No instructions available."}</p>

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
