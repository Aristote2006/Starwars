import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-star-wars-space dark:bg-star-wars-space bg-gray-100 overflow-hidden rounded-lg shadow-lg mb-section transition-colors duration-500">
      {/* Background stars animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-1"></div>
        <div className="stars-2"></div>
        <div className="stars-3"></div>
      </div>
      
      {/* Gradient overlay - enhanced for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100/90 via-gray-100/80 to-transparent dark:from-black dark:via-black/90 dark:to-transparent z-[1] transition-colors duration-500"></div>
      
      <div className="relative z-10 px-6 py-16 md:py-32 md:px-16 container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Hero content */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} max-w-2xl`}>
            <h1 className="text-4xl md:text-6xl font-bold text-star-wars-yellow mb-4 star-wars-text tracking-wider leading-tight">
              Explore The Galaxy <br className="hidden md:block" />
              <span className="text-gray-800 dark:text-white transition-colors duration-500">Far, Far Away</span>
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-500">
              Discover characters, planets, and starships from the Star Wars universe.
              Navigate through the epic saga that defined generations.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="#characters" 
                className="bg-star-wars-yellow text-black px-8 py-4 rounded-md font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 hover:shadow-glow flex items-center justify-center"
              >
                <span>Explore Characters</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              
              {/* Updated to use Link component for proper routing */}
              <Link 
                to="/planets" 
                className="border-2 border-star-wars-yellow text-star-wars-yellow px-8 py-4 rounded-md font-bold hover:bg-star-wars-yellow/10 transition-all flex items-center justify-center"
              >
                <span>Discover Planets</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Desktop hero image - positioned inline with content */}
          <div 
            className={`hidden md:block transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} w-2/5 h-96 rounded-2xl overflow-hidden shadow-2xl ml-8 flex-shrink-0`}
            style={{ 
              boxShadow: "0 0 30px rgba(255, 232, 31, 0.2)"
            }}
          >
            <div 
              className="w-full h-full bg-cover bg-center rounded-2xl transform hover:scale-105 transition-transform duration-700"
              style={{ 
                backgroundImage: "url('/star war.jpeg')",
                animation: "float 6s ease-in-out infinite"
              }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Mobile-specific image */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden md:hidden">
        <div 
          className="absolute bottom-0 right-0 w-full h-1/2 bg-contain bg-no-repeat bg-right-bottom opacity-40"
          style={{ 
            backgroundImage: "url('/star war.jpeg')",
            filter: "drop-shadow(0 0 15px rgba(255, 232, 31, 0.2))",
          }}
        ></div>
        
        {/* Overlay elements for depth - adjusted for better visibility */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-star-wars-yellow opacity-5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        
        {/* Light saber glow effects - adjusted for better visibility */}
        <div className="absolute bottom-0 right-1/3 w-1 h-3/4 bg-red-500 blur-xl opacity-30"></div>
      </div>
    </div>
  );
};

export default HeroBanner;