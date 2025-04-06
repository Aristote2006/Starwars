import React, { useEffect, useState } from "react";
import { getPlanets } from "../api/swapi";
import PlanetCard from "../components/PlanetCard";
import Pagination from "../components/Pagination";
import LoadingSpinner from "../components/LoadingSpinner";

const PlanetsContainer = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchPlanets(currentPage);
  }, [currentPage]);

  const fetchPlanets = async (page) => {
    setLoading(true);
    try {
      const data = await getPlanets(page);
      setPlanets(data.results);
      setTotalPages(Math.ceil(data.count / 10));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching planets:", error);
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-star-wars-yellow mb-6">Star Wars Planets</h1>
      
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {planets.map((planet, index) => (
              <PlanetCard key={index} planet={planet} />
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

export default PlanetsContainer;