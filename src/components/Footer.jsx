import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-star-wars-black text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-star-wars-yellow font-bold text-xl mb-4">Star Wars Explorer</h3>
            <p className="text-gray-400">
              Explore the vast universe of Star Wars with detailed information about characters,
              planets, and starships from the iconic saga.
            </p>
          </div>
          
          <div>
            <h3 className="text-star-wars-yellow font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-star-wars-yellow transition-colors">
                  Characters
                </Link>
              </li>
              <li>
                <Link to="/planets" className="text-gray-400 hover:text-star-wars-yellow transition-colors">
                  Planets
                </Link>
              </li>
              <li>
                <Link to="/starships" className="text-gray-400 hover:text-star-wars-yellow transition-colors">
                  Starships
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-star-wars-yellow font-bold text-xl mb-4">About</h3>
            <p className="text-gray-400 mb-2">
              This application uses the Star Wars API (SWAPI) to provide information about the Star Wars universe.
            </p>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Star Wars Explorer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;