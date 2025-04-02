import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import RecipeDetails from "./pages/RecipeDetails";
import RecipeList from "./pages/RecipeList";


const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Router>
      <div className={`min-h-screen   ${theme === "dark" ? "bg-gray-700 text-white" : "bg-[#E2E8D5] text-black "}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipe/:recipeLabel" element={<RecipeDetails />} />

          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/RecipeList" element={<RecipeList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
