import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-black/90 dark:bg-black/90 backdrop-blur-md shadow-lg" 
        : "bg-white/5 dark:bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-star-wars-yellow rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-black font-bold text-lg">SW</span>
            </div>
            <span className="text-star-wars-yellow text-2xl font-bold star-wars-text tracking-wider">
              Star Wars Explorer
            </span>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-800 dark:text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <NavLink to="/">Characters</NavLink>
              <NavLink to="/planets">Planets</NavLink>
              <NavLink to="/starships">Starships</NavLink>
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-60 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}>
          <div className="flex flex-col space-y-4 pb-4">
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>Characters</NavLink>
            <NavLink to="/planets" onClick={() => setMobileMenuOpen(false)}>Planets</NavLink>
            <NavLink to="/starships" onClick={() => setMobileMenuOpen(false)}>Starships</NavLink>
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Helper component for navigation links
const NavLink = ({ to, children, onClick }) => (
  <Link 
    to={to} 
    className="text-gray-800 dark:text-white hover:text-star-wars-yellow transition-colors relative group"
    onClick={onClick}
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-star-wars-yellow group-hover:w-full transition-all duration-300"></span>
  </Link>
);

export default Navbar;