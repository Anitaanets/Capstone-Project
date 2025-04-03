import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import RecipeDetails from "./pages/RecipeDetails";
import RecipeList from "./pages/RecipeList";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <AuthProvider>
      <Router>
        <div className={`min-h-screen ${theme === "dark" ? "bg-gray-700 text-white" : "bg-[#E2E8D5] text-black"}`}>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<PrivateRoute element={Home} />} />
            <Route path="/search" element={<PrivateRoute element={Search} />} />
            <Route path="/recipe/:recipeLabel" element={<PrivateRoute element={RecipeDetails} />} />
            <Route path="/favorites" element={<PrivateRoute element={Favorites} />} />
            <Route path="/about" element={<PrivateRoute element={About} />} />
            <Route path="/RecipeList" element={<PrivateRoute element={RecipeList} />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/profile" element={<PrivateRoute element={ProfilePage} />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
