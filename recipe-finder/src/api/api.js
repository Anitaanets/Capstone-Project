// src/api.js

const API_URL = "https://api.edamam.com/search";

// Get your API credentials from environment variables
const APP_ID = import.meta.env.VITE_EDAMAM_APP_ID;
const APP_KEY = import.meta.env.VITE_EDAMAM_APP_KEY;

// Function to fetch recipes based on a search query
export const fetchRecipes = async (query) => {
  try {
    const response = await fetch(`${API_URL}?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }
    const data = await response.json();
    return data.hits; // returns the array of recipe hits
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

// Function to fetch details of a specific recipe
export const fetchRecipeDetails = async (recipeLabel) => {
  try {
    const response = await fetch(
      `${API_URL}?q=${recipeLabel}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch recipe details");
    }
    const data = await response.json();
    return data.hits[0].recipe; // returns the recipe object
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    throw error;
  }
};
