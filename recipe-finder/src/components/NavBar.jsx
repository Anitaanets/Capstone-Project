import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import logo from "/logo5.png";

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between p-4 bg-primary text-black relative">
      {/* Logo */}
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="RecipeFinder Logo" className="h-12 w-auto" />
      </Link>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Nav Links */}
      <div
        className={`absolute md:static right-0 top-16 w-full md:w-auto bg-primary md:bg-transparent flex flex-col md:flex-row md:items-center gap-4 p-4 md:p-0 ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        {/* Links only visible to authenticated users */}
        {user ? (
          <>
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-accent font-bold hover:text-[#A4B79B] transition">
              Home
            </Link>
            <Link to="/favorites" onClick={() => setMenuOpen(false)} className="hover:text-accent font-bold hover:text-[#A4B79B] transition">
              Favorites
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-accent font-bold hover:text-[#A4B79B] transition">
              About
            </Link>
            <Link to="/profile" onClick={() => setMenuOpen(false)} className="hover:text-accent font-bold hover:text-[#A4B79B] transition">
              Profile
            </Link>
            <button onClick={() => { logout(); setMenuOpen(false); }} className="hover:text-accent font-bold hover:text-[#A4B79B] transition mr-100">
              Logout
            </button>
          </>
        ) : (
          // Links only visible to unauthenticated users
          <>
            <Link to="/login" onClick={() => setMenuOpen(false)} className="hover:text-accent font-bold hover:text-[#A4B79B] transition">
              Login
            </Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)} className="hover:text-accent font-bold hover:text-[#A4B79B] transition">
              Sign Up
            </Link>
          </>
        )}

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="p-2 hover:text-[#A4B79B] transition">
          {theme === "light" ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
