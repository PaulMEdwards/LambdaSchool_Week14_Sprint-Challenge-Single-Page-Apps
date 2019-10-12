// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
import { Route } from 'react-router-dom';
import { CharacterCard } from "./";

const CharacterList = (props) => {
  const { endpoints, fetchData, characterData, setCharacterData } = props;

  useEffect(() => {
    fetchData(endpoints["characters"], setCharacterData);
    // eslint-disable-next-line
  }, []);
  // }, [characterData]);

  console.log('characterData: ', characterData);

  return (
    <section className="character-list">
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