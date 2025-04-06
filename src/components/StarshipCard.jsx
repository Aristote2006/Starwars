import React from "react";

const StarshipCard = ({ starship }) => {
  return (
    <div className="bg-star-wars-space p-4 rounded-lg text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-700">
      <h2 className="text-lg font-bold text-star-wars-yellow">{starship.name}</h2>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Class: {starship.starship_class}</p>
      <div className="mt-2">
        <p>Speed: {starship.max_atmosphering_speed}</p>
        <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
        <p>Crew: {starship.crew}</p>
        <p>Passengers: {starship.passengers}</p>
      </div>
    </div>
  );
};

export default StarshipCard;