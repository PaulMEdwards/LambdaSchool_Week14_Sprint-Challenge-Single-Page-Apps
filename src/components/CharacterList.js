import React, { useEffect } from "react";
import { Route } from 'react-router-dom';
import { CharacterCard } from "./";

const CharacterList = (props) => {
  const { fetchCharacterData, characterData, setSelectedCharacter } = props;

  useEffect(() => {
    if (characterData.length === 0) fetchCharacterData();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="character-list">
      {
        characterData.map(character => (
          <CharacterDetails key={character.id} character={character} setSelectedCharacter={setSelectedCharacter} />
        ))
      }
    </section>
  );
}

function CharacterDetails({character}) {
  console.log('CharacterDetails character: ', character);
  return (
    <Route render={() => <CharacterCard id={character.id} character={character} />} />
  );
}

export default CharacterList;