import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    document.documentElement.classList.toggle('dark', savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('darkMode', newMode);
  };

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-md"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙 '}
    </button>
  );
};

export default DarkModeToggle;
