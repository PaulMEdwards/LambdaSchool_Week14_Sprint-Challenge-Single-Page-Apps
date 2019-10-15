import React, { useState } from "react";
import { Route } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";

import {
  Header,
  WelcomePage,
  CharacterList,
  Character,
  LocationList,
  Location,
  EpisodeList,
  Episode,
  SearchForm
} from './components';

const api_use_backup = false;
const api_uri_default = `https://rickandmortyapi.com/api/`;
const api_uri_backup  = `https://rick-api.herokuapp.com/api/`;
const api_uri = !api_use_backup ? api_uri_default : api_uri_backup;

const endpoints = {
  "characters": "character",
  "locations": "location",
  "episodes": "episode"
};

const App = () => {
  const [characterData, setCharacterData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [episodeData, setEpisodeData] = useState([]);
  
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [selectedLocation, setSelectedLocation] = useState({});
  const [selectedEpisode, setSelectedEpisode] = useState({});
  
  const [searchData, setSearchData] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  async function fetchData(endpoint, setFunction) {
    try {
      let promiseData = await axios.get(`${api_uri}${endpoint}`);
      console.log(`${endpoint} data: `, promiseData);
      setFunction(promiseData.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  function fetchCharacterData(character) {
    if (typeof(character) === "undefined") {
      fetchData(endpoints.characters, setCharacterData);
    } else {
      fetchData(`${endpoints.characters}/${character}`, setSelectedCharacter);
    }
  }
  function fetchLocationData(location) {
    if (typeof(location) === "undefined") {
      fetchData(endpoints.locations, setLocationData);
    } else {
      fetchData(`${endpoints.locations}/${location}`, setSelectedLocation);
    }
  }
  function fetchEpisodeData(episode) {
    if (typeof(episode) === "undefined") {
      fetchData(endpoints.episodes, setEpisodeData);
    } else {
      fetchData(`${endpoints.episodes}/${episode}`, setSelectedEpisode);
    }
  }

  return (
    <main>

      <Header />

      {/* Welcome */}
      <Route exact path="/" component={WelcomePage} />


      {/* Characters */}
      <Route exact path="/characters" render={(props) => <CharacterList {...props}
        fetchCharacterData={fetchCharacterData}
        characterData={characterData} />}
      />

      <Route exact path="/characters/:id" render={(props) => <Character {...props}
        fetchCharacterData={fetchCharacterData}
        setSelectedCharacter={setSelectedCharacter}
        selectedCharacter={selectedCharacter}
      />} />


      {/* Locations */}
      <Route exact path="/locations" render={(props) => <LocationList {...props}
        fetchLocationData={fetchLocationData}
        locationData={locationData}
      />} />

      <Route exact path="/locations/:id" render={(props) => <Location {...props}
        fetchLocationData={fetchLocationData}
        setSelectedLocation={setSelectedLocation}
        selectedLocation={selectedLocation}
      />} />


      {/* Episodes */}
      <Route exact path="/episodes" render={(props) => <EpisodeList {...props}
        fetchEpisodeData={fetchEpisodeData}
        episodeData={episodeData}
      />} />

      <Route exact path="/episodes/:id" render={(props) => <Episode {...props}
        fetchEpisodeData={fetchEpisodeData}
        setSelectedEpisode={setSelectedEpisode}
        selectedEpisode={selectedEpisode}
      />} />


      {/* Search */}
      <Route path="/search" render={(props) => <SearchForm {...props}
        fetchCharacterData={fetchCharacterData}
        characterData={characterData}
        fetchLocationData={fetchLocationData}
        locationData={locationData}
        fetchEpisodeData={fetchEpisodeData}
        episodeData={episodeData}
        searchData={searchData}
        setSearchData={setSearchData}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />} />

    </main>
  );
}

export default App;