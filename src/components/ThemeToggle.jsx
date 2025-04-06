import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || 
    (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    // Apply the theme on initial load and when it changes
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-700/50 transition-colors relative group"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-20 dark:from-blue-400 dark:to-purple-500 transition-opacity duration-300"></div>
      {darkMode ? (
        // Sun icon for light mode
        <svg className="w-6 h-6 text-yellow-300 transition-transform duration-500 transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg className="w-6 h-6 text-gray-300 transition-transform duration-500 transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
      <span className="sr-only">{darkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
    </button>
  );
};

export default ThemeToggle;