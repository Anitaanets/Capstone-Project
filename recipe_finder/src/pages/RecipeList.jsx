import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://api.edamam.com/search?q=dinner&app_id=${import.meta.env.VITE_EDAMAM_APP_ID}&app_key=${import.meta.env.VITE_EDAMAM_APP_KEY}`
        );
        const data = await response.json();

        if (data.hits.length === 0) {
          setError("No recipes found.");
        } else {
          setRecipes(data.hits);
        }
      } catch (err) {
        setError("Failed to load recipes.");
      }

      setLoading(false);
    };

    fetchRecipes();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-primary text-center mb-6">
        Recipe List
      </h1>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((item, index) => (
          <RecipeCard key={index} recipe={item.recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
