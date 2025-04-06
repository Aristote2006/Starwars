import React from "react";

const PlanetCard = ({ planet }) => {
  return (
    <div className="bg-star-wars-space p-4 rounded-lg text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-700">
      <h2 className="text-lg font-bold text-star-wars-yellow">{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Population: {planet.population}</p>
    </div>
  );
};

export default PlanetCard;