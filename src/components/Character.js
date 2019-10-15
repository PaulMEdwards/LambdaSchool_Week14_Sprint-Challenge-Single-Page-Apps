import React, { useEffect } from "react";
import { Route } from 'react-router-dom';
import { CharacterCard } from "./";

export default function Character(props) {
  console.log('Character props: ', props);

  const id = Number(props.match.params.id);
  const {
    fetchCharacterData
    , selectedCharacter
  } = props;

  useEffect(() => {
    fetchCharacterData(id);
    // eslint-disable-next-line
  },[]);

  return (
    <React.Fragment>
      <Route render={() => <CharacterCard id={id} character={selectedCharacter} showExtra={true} />} />
    </React.Fragment>
  );
}
