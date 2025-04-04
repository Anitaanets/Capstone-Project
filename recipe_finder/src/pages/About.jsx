const About = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto ml-20">
      <h1 className="text-3xl font-bold text-primary mb-4">About Recipe Finder</h1>
      <p className="text-lg text-[#a17272] font-bold dark:text-gray-300">
        Welcome to Recipe Finder! 🍽️ Your go-to app for discovering delicious
        recipes. With our easy-to-use interface, you can search for recipes by
        ingredients or dish names, view detailed recipe instructions, and save
        your favorite dishes for later.
      </p>
      <h2 className="text-xl font-semibold mt-6">Features</h2>
      <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
        <li className="text-[#a17272] font-bold ">Search for recipes by name or ingredient.</li>
        <li className="text-[#a17272] font-bold ">Save your favorite recipes for quick access.</li>
        <li className="text-[#a17272] font-bold "> View recipe details including ingredients and instructions.</li>
        <li className="text-[#a17272] font-bold ">Track healthy eating with health labels for each recipe.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">API Integration</h2>
      <p className="text-[#a17272] font-bold  dark:text-gray-300">
        This app is powered by the Spooncular Search API, which provides
        a wide variety of recipes from all over the world.
      </p>

      <h2 className="text-xl font-semibold mt-6">Contact</h2>
      <p className="text-[#a17272] font-bold  dark:text-gray-300">
        For feedback or suggestions, feel free to reach out to us at{" "}
        <a href="mailto:support@recipefinder.com" className="text-accent hover:underline">
          support@recipefinder.com
        </a>
        .
      </p>
    </div>
  );
};

export default About;
