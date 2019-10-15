import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//#region Styled Component Definitions
const Episode = styled.div`
  /* width: 40%; */
  padding: 20px;
  margin: 2em 1em;
  background-color: #00000009;
  border: thin white;
  border-size: 3px;
  border-radius: 5px;
  box-shadow: 0px 0px 0.25em #00000055, 0px 0px 0.5em white;
  display: flex;
  flex: auto;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  align-content: flex-start;
`;
const EpisodePrimaryData = styled.h2`
  margin: 0 0 1.25em;
  color: black;
  text-shadow: -3px -3px 0.25em #00000055, 3px 3px 0.5em white;
`;
const EpisodeSecondaryData = styled.h3`
  margin: 1em 0;
  color: black;
  text-shadow: -3px -3px 0.25em #00000055, 3px 3px 0.5em white;
`;
const EpisodeTertiaryData = styled.h4`
  margin: 0.5em 0;
  color: black;
  text-shadow: -3px -3px 0.25em #00000055, 3px 3px 0.5em white;
`;
//#endregion Styled Component Definitions

const EpisodeCard = (props) => {
  const {
    id
    , name
    , air_date
    , episode
    , characters
    // , url
    // , created
  } = props.episode;

  //#region Episode API attributes description
  /*
    id	int	The id of the episode.
    name	string	The name of the episode.
    air_date	string	The air date of the episode.
    episode	string	The code of the episode.
    characters	array (urls)	List of characters who have been seen in the episode.
    url	string (url)	Link to the episode's own endpoint.
    created	string	Time at which the episode was created in the database.
  */
  //#endregion Episode API attributes description

  return (
    <Episode>
      <div className="Episode">
          <EpisodePrimaryData>
            <Link to={`/episodes/${id}`}>{name}</Link>
          </EpisodePrimaryData>
          <EpisodeSecondaryData className="episode-name">
            <strong>Name:</strong> <em>{name}</em>
          </EpisodeSecondaryData>
          <EpisodeTertiaryData className="episode-episode">
            <strong>Episode:</strong> <em>{episode}</em>
          </EpisodeTertiaryData>
          <EpisodeTertiaryData className="episode-characters">
            <strong>Characters:</strong> <em>{characters}</em>
          </EpisodeTertiaryData>
          <EpisodeTertiaryData className="episode-air_date">
            <strong>Air Date:</strong> <em>{air_date}</em>
          </EpisodeTertiaryData>
      </div>
    </Episode>
  );
}

export default EpisodeCard;
