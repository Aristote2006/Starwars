import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getResource } from "../api/swapi";
import LoadingSpinner from "../components/LoadingSpinner";

const CharacterDetailPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [homeworld, setHomeworld] = useState(null);
  const [films, setFilms] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const characterData = await getResource(`https://swapi.dev/api/people/${id}/`);
        setCharacter(characterData);

        // Fetch homeworld
        const homeworldData = await getResource(characterData.homeworld);
        setHomeworld(homeworldData);

        // Fetch films
        const filmsData = await Promise.all(
          characterData.films.map((filmUrl) => getResource(filmUrl))
        );
        setFilms(filmsData);

        // Fetch vehicles
        const vehiclesData = await Promise.all(
          characterData.vehicles.map((vehicleUrl) => getResource(vehicleUrl))
        );
        setVehicles(vehiclesData);

        // Fetch starships
        const starshipsData = await Promise.all(
          characterData.starships.map((starshipUrl) => getResource(starshipUrl))
        );
        setStarships(starshipsData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching character details:", error);
        setLoading(false);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <LoadingSpinner />
      </div>
    );
  }

  if (!character) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-center text-xl">Character not found</p>
        <div className="text-center mt-4">
          <Link to="/" className="bg-star-wars-yellow text-black px-4 py-2 rounded font-bold">
            Back to Characters
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-star-wars-space p-6 rounded-lg shadow-lg border border-gray-700">
        <h1 className="text-3xl font-bold text-star-wars-yellow mb-4">{character.name}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-star-wars-yellow">Personal Information</h2>
            <p><span className="font-bold">Birth Year:</span> {character.birth_year}</p>
            <p><span className="font-bold">Gender:</span> {character.gender}</p>
            <p><span className="font-bold">Height:</span> {character.height} cm</p>
            <p><span className="font-bold">Mass:</span> {character.mass} kg</p>
            <p><span className="font-bold">Hair Color:</span> {character.hair_color}</p>
            <p><span className="font-bold">Eye Color:</span> {character.eye_color}</p>
            <p><span className="font-bold">Skin Color:</span> {character.skin_color}</p>
            
            {homeworld && (
              <div className="mt-4">
                <h2 className="text-xl font-bold mb-2 text-star-wars-yellow">Homeworld</h2>
                <p><span className="font-bold">Name:</span> {homeworld.name}</p>
                <p><span className="font-bold">Climate:</span> {homeworld.climate}</p>
                <p><span className="font-bold">Terrain:</span> {homeworld.terrain}</p>
                <p><span className="font-bold">Population:</span> {homeworld.population}</p>
              </div>
            )}
          </div>
          
          <div>
            {films.length > 0 && (
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2 text-star-wars-yellow">Films</h2>
                <ul className="list-disc pl-5">
                  {films.map((film, index) => (
                    <li key={index}>{film.title} (Episode {film.episode_id})</li>
                  ))}
                </ul>
              </div>
            )}
            
            {vehicles.length > 0 && (
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2 text-star-wars-yellow">Vehicles</h2>
                <ul className="list-disc pl-5">
                  {vehicles.map((vehicle, index) => (
                    <li key={index}>{vehicle.name} ({vehicle.model})</li>
                  ))}
                </ul>
              </div>
            )}
            
            {starships.length > 0 && (
              <div>
                <h2 className="text-xl font-bold mb-2 text-star-wars-yellow">Starships</h2>
                <ul className="list-disc pl-5">
                  {starships.map((starship, index) => (
                    <li key={index}>{starship.name} ({starship.model})</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-6">
          <Link to="/" className="bg-star-wars-yellow text-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition-colors">
            Back to Characters
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailPage;