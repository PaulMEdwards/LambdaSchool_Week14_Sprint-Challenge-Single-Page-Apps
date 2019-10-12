// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
import { Route } from 'react-router-dom';
import { CharacterCard } from "./";

const CharacterList = (props) => {
  const { endpoints, fetchData, characterData, setCharacterData } = props;

  // DONE: Add useState to track data from useEffect
  // const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    // DONE: Add API Request here - must run in `useEffect`
    // Important: verify the 2nd `useEffect` parameter: the dependencies array!
    // TODO: TEST to ensure it works!
    fetchData(endpoints["characters"], setCharacterData);
    // eslint-disable-next-line
  }, []);
  // }, [characterData]);
  
  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {
        characterData.map(character => (
          <CharacterDetails key={character.id} character={character} />
        ))
      }
    </section>
  );
}

function CharacterDetails({character}) {
  return (
    <Route render={(props) => <CharacterCard {...props} character={character} id={character.id} />} />
  );
}

export default CharacterList;