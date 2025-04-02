import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "/logo5.png"; 

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-primary text-black">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="RecipeFinder Logo" className="h-12 w-auto" />
      </Link>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Nav Links  */}
      <div
        className={`absolute md:static right-0 top-16 w-full md:w-auto bg-primary md:bg-transparent flex flex-col md:flex-row md:items-center  gap-4 p-4 md:p-0 ${
          menuOpen ? "block " : "hidden md:flex "
        }`}
      >
        <Link to="/" className="hover:text-accent font-bold hover:text-[#A4B79B] transition transition">Home</Link>
        <Link to="/search" className="hover:text-accent font-bold hover:text-[#A4B79B] transition transition">Search</Link>
        <Link to="/favorites" className="hover:text-accent font-bold hover:text-[#A4B79B] transition transition">Favorites</Link>
        <Link to="/about" className="hover:text-accent font-bold hover:text-[#A4B79B] transition transition">About</Link>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="p-2 hover:text-[#A4B79B] transition">
          {theme === "light" ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
