import React, { useEffect, useState } from "react";
import { getCharacters } from "../api/swapi";
import CharacterList from "../components/CharacterList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import LoadingSpinner from "../components/LoadingSpinner";

const CharactersContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchCharacters(currentPage, searchTerm);
  }, [currentPage, searchTerm]);

  const fetchCharacters = async (page, search) => {
    setLoading(true);
    try {
      const data = await getCharacters(page, search);
      setCharacters(data.results);
      setTotalPages(Math.ceil(data.count / 10));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching characters:", error);
      setLoading(false);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-star-wars-yellow mb-6">Star Wars Characters</h1>
      <SearchBar onSearch={handleSearch} />
      
      {loading ? (
        <LoadingSpinner />
      ) : characters.length > 0 ? (
        <>
          <CharacterList characters={characters} />
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        </>
      ) : (
        <p className="text-center text-xl">No characters found</p>
      )}
    </div>
  );
};

export default CharactersContainer;