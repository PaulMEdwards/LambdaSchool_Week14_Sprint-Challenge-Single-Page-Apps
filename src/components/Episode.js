import React, { useEffect } from "react";
import { Route } from 'react-router-dom';
import { EpisodeCard } from "./";

export default function Episode(props) {
  console.log('Episode props: ', props);

  const id = Number(props.match.params.id);
  const {
    fetchEpisodeData
    , selectedEpisode
  } = props;

  useEffect(() => {
    fetchEpisodeData(id);
    // eslint-disable-next-line
  },[]);

  return (
    <React.Fragment>
      <Route render={() => <EpisodeCard id={id} episode={selectedEpisode} showExtra={true} />} />
    </React.Fragment>
  );
}
