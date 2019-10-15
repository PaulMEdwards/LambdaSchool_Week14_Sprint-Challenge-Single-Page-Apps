import React from "react";
import { Route } from 'react-router-dom';
import { EpisodeCard } from ".";

export default function Episode({episode}) {
  return (
    <Route render={(props) => <EpisodeCard id={episode.id} episode={episode} />} />
  );
}
