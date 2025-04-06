import React from "react";
import HeroBanner from "../components/HeroBanner";
import CharactersContainer from "../containers/CharactersContainer";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div id="characters">
        <CharactersContainer />
      </div>
    </>
  );
};

export default Home;