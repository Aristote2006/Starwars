import React, { useEffect, useState } from "react";
import { getStarships } from "../api/swapi";
import StarshipCard from "../components/StarshipCard";
import Pagination from "../components/Pagination";
import LoadingSpinner from "../components/LoadingSpinner";

const StarshipsContainer = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchStarships(currentPage);
  }, [currentPage]);

  const fetchStarships = async (page) => {
    setLoading(true);
    try {
      const data = await getStarships(page);
      setStarships(data.results);
      setTotalPages(Math.ceil(data.count / 10));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching starships:", error);
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-star-wars-yellow mb-6">Star Wars Starships</h1>
      
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {starships.map((starship, index) => (
              <StarshipCard key={index} starship={starship} />
            ))}
          </div>
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        </>
      )}
    </div>
  );
};

export default StarshipsContainer;