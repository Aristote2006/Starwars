import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  // Extract the ID from the URL
  const id = character.url.split("/").filter(Boolean).pop();

  return (
    <Link to={`/character/${id}`}>
      <div className="bg-star-wars-space p-4 rounded-lg text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer border border-gray-700">
        <h2 className="text-lg font-bold text-star-wars-yellow">{character.name}</h2>
        <p>Birth Year: {character.birth_year}</p>
        <p>Gender: {character.gender}</p>
      </div>
    </Link>
  );
};

export default CharacterCard;