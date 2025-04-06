import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search characters..."
          className="w-full p-3 pl-10 bg-star-wars-space border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-star-wars-yellow focus:border-transparent"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-star-wars-yellow text-black px-3 py-1 rounded-md hover:bg-yellow-400 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;