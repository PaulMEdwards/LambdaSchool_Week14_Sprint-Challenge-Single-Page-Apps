import React, { useEffect } from "react";
import { Route } from 'react-router-dom';
import { CharacterCard } from "./";

const CharacterList = (props) => {
  const { fetchCharacterData, characterData } = props;

  useEffect(() => {
    if (characterData.length === 0) fetchCharacterData();
    // eslint-disable-next-line
  }, []);

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
  console.log('CharacterDetails character: ', character);
  if (!character) {
    return <div className="box">Loading character list...</div>;
  } else {
    return (
      <Route render={() => <CharacterCard id={character.id} character={character} />} />
    );
  }
}

export default CharacterList;