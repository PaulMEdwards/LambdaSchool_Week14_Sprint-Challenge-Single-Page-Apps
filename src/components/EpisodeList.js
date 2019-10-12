// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
// import { Route } from 'react-router-dom';
// import { EpisodeCard } from "./";

const EpisodeList = (props) => {
  // const { endpoints, fetchData, episodeData, setEpisodeData } = props;
  const { endpoints, fetchData, setEpisodeData } = props;

  // const [episodeData, setEpisodeData] = useState([]);

  useEffect(() => {
    fetchData(endpoints["episodes"], setEpisodeData);
    // eslint-disable-next-line
  }, []);
  // }, [episodeData]);

  return (
    <React.Fragment>
    </React.Fragment>
  );
}

export default EpisodeList;