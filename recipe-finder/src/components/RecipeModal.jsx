import React from "react";

const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-xl w-full relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-60 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold text-primary mb-2">{recipe.title}</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          {recipe.summary ? (
            <span dangerouslySetInnerHTML={{ __html: recipe.summary }} />
          ) : (
            "No summary available."
          )}
        </p>

        {recipe.instructions && (
          <>
            <h3 className="text-lg font-semibold mb-1 text-primary">Instructions:</h3>
            <p className="text-gray-700 dark:text-gray-300">{recipe.instructions}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeModal;
