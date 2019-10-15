import React, { useEffect } from "react";
import { Episode } from "./";

const EpisodeList = (props) => {
  const { fetchEpisodeData, episodeData } = props;

  useEffect(() => {
    if (episodeData.length === 0) fetchEpisodeData();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="episode-list">
      {
        episodeData.map(episode => (
          <Episode key={episode.id} episode={episode} />
        ))
      }
    </section>
  );
}

export default EpisodeList;