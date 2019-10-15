import React from "react";
import { Route } from 'react-router-dom';
import { CharacterCard } from ".";

export default function Character(props) {
  console.log('Character props: ', props);

  const id = Number(props.match.params.id);

  return (
    <React.Fragment>
      <Route render={() => <CharacterCard id={id} character={props} showExtra={true} />} />
    </React.Fragment>
  );
}
