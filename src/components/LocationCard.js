import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//#region Styled Component Definitions
const Location = styled.div`
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
const LocationPrimaryData = styled.h2`
  margin: 0 0 1.25em;
  color: black;
  text-shadow: -3px -3px 0.25em #00000055, 3px 3px 0.5em white;
`;
const LocationSecondaryData = styled.h3`
  margin: 1em 0;
  color: black;
  text-shadow: -3px -3px 0.25em #00000055, 3px 3px 0.5em white;
`;
const LocationTertiaryData = styled.h4`
  margin: 0.5em 0;
  color: black;
  text-shadow: -3px -3px 0.25em #00000055, 3px 3px 0.5em white;
`;
//#endregion Styled Component Definitions

const LocationCard = (props) => {
  const {
    id
    , name
    , type
    , dimension
    , residents
    // , url
    // , created
  } = props.location;

  //#region Location API attributes description
  /*
    id	int	The id of the location.
    name	string	The name of the location.
    type	string	The type of the location.
    dimension	string	The dimension in which the location is located.
    residents	array (urls)	List of character who have been last seen in the location.
    url	string (url)	Link to the location's own endpoint.
    created	string	Time at which the location was created in the database.
  */
  //#endregion Location API attributes description

  return (
    <Location>
      <div className="Location">
          <LocationPrimaryData>
            <Link to={`/locations/${id}`}>{name}</Link>
          </LocationPrimaryData>
          <LocationSecondaryData className="location-name">
            <strong>Name:</strong> <em>{name}</em>
          </LocationSecondaryData>
          <LocationSecondaryData className="location-type">
            <strong>Type:</strong> <em>{type}</em>
          </LocationSecondaryData>
          <LocationTertiaryData className="location-dimension">
            <strong>Dimension:</strong> <em>{dimension}</em>
          </LocationTertiaryData>
          <LocationTertiaryData className="location-residents">
            <strong>Residents:</strong> <em>{residents}</em>
          </LocationTertiaryData>
      </div>
    </Location>
  );
}

export default LocationCard;
