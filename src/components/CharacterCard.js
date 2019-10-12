import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//#region Styled Component Definitions
const Person = styled.div`
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
const PersonPrimaryData = styled.h2`
  margin: 0 0 1.25em;
  color: black;
  text-shadow: -3px -3px 0.25em #00000055, 3px 3px 0.5em white;
`;
const PersonSecondaryData = styled.h3`
  margin: 1em 0;
  color: black;
  text-shadow: -3px -3px 0.25em #00000055, 3px 3px 0.5em white;
`;
const PersonTertiaryData = styled.h4`
  margin: 0.5em 0;
  color: black;
  text-shadow: -3px -3px 0.25em #00000055, 3px 3px 0.5em white;
`;
//#endregion Styled Component Definitions

const CharacterCard = (props) => {
  // const { id, name, status, species, type, gender, origin, location, image, episode } = props.character;
  const { id, name, status, species, type, gender, origin, location, image } = props.character;
  //#region Character API attributes description
  /*
    id	int	The id of the character.
    name	string	The name of the character.
    status	string	The status of the character ('Alive', 'Dead' or 'unknown').
    species	string	The species of the character.
    type	string	The type or subspecies of the character.
    gender	string	The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
    origin	object	Name and link to the character's origin location.
    location	object	Name and link to the character's last known location endpoint.
    image	string (url)	Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
    episode	array (urls)	List of episodes in which this character appeared.
    url	string (url)	Link to the character's own URL endpoint.
    created	string	Time at which the character was created in the database.
  */
  //#endregion Character API attributes description

  return (
    <Person>
      <div className="Person">
          <PersonPrimaryData>
            <Link to={`/characters/${id}`}>{name}</Link>
          </PersonPrimaryData>
          <PersonSecondaryData className="character-status">
            <strong>Status:</strong> <em>{status}</em>
          </PersonSecondaryData>
          <PersonSecondaryData className="character-species">
            <strong>Species:</strong> <em>{species}</em>
          </PersonSecondaryData>
          { type &&
          <PersonTertiaryData className="character-type">
            <strong>Type:</strong> <em>{type}</em>
          </PersonTertiaryData>
          }
          <PersonTertiaryData className="character-gender">
            <strong>Gender:</strong> <em>{gender}</em>
          </PersonTertiaryData>
          <PersonTertiaryData className="character-origin">
            <strong>Origin:</strong> <em>{origin.name}</em>
          </PersonTertiaryData>
          <PersonTertiaryData className="character-location">
            <strong>Location:</strong> <em>{location.name}</em>
          </PersonTertiaryData>
          {/* <PersonTertiaryData className="character-episode">
            <strong>Episode(s):</strong> <em>{episode}</em>
          </PersonTertiaryData> */}
      </div>
      <div>
        <img src={image} alt={"Picture of "+name} />
      </div>
    </Person>
  );
}

export default CharacterCard;
