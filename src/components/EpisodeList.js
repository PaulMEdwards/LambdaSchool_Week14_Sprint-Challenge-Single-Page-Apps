import React, { useEffect } from "react";
import { Route } from 'react-router-dom';
import { EpisodeCard } from "./";

const EpisodeList = (props) => {
  const { fetchEpisodeData, episodeData } = props;

  useEffect(() => {
    if (!episodeData || episodeData.length === 0) fetchEpisodeData();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="episode-list">
      { episodeData &&
        episodeData.map(episode => (
          <EpisodeDetails key={episode.id} episode={episode} />
        ))
      }
    </section>
  );
}

function EpisodeDetails({episode}) {
  console.log('EpisodeDetails episode: ', episode);
  if (!episode) {
    return <div className="box">Loading episode list...</div>;
  } else {
    return (
      <Route render={() => <EpisodeCard id={episode.id} episode={episode} />} />
    );
  }
}

export default EpisodeList;