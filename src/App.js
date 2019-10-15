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

  async function fetchData(endpoint, setFunction) {
    try {
      let promiseData = await axios.get(`${api_uri}${endpoint}`);
      console.log(`${endpoint} data: `, promiseData);
      if (promiseData.data.results) {
        setFunction(promiseData.data.results);
      } else if (promiseData.data) {
        setFunction(promiseData.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function fetchCharacterData(id) {
    if (typeof(id) === "undefined") {
      console.log('fetchCharacterData all');
      fetchData(endpoints.characters, setCharacterData);
    } else {
      console.log('fetchCharacterData id: ', id);
      fetchData(`${endpoints.characters}/${id}`, setSelectedCharacter);
    }
  }
  function fetchLocationData(id) {
    if (typeof(id) === "undefined") {
      console.log('fetchLocationData all');
      fetchData(endpoints.locations, setLocationData);
    } else {
      console.log('fetchLocationData id: ', id);
      fetchData(`${endpoints.locations}/${id}`, setSelectedLocation);
    }
  }
  function fetchEpisodeData(id) {
    if (typeof(id) === "undefined") {
      console.log('fetchEpisodeData all');
      fetchData(endpoints.episodes, setEpisodeData);
    } else {
      console.log('fetchEpisodeData id: ', id);
      fetchData(`${endpoints.episodes}/${id}`, setSelectedEpisode);
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
        characterData={characterData}
      />} />

      <Route exact path="/characters/:id" render={(props) => <Character {...props}
        fetchCharacterData={fetchCharacterData}
        selectedCharacter={selectedCharacter}
      />} />


      {/* Locations */}
      <Route exact path="/locations" render={(props) => <LocationList {...props}
        fetchLocationData={fetchLocationData}
        locationData={locationData}
      />} />

      <Route exact path="/locations/:id" render={(props) => <Location {...props}
        fetchLocationData={fetchLocationData}
        selectedLocation={selectedLocation}
      />} />


      {/* Episodes */}
      <Route exact path="/episodes" render={(props) => <EpisodeList {...props}
        fetchEpisodeData={fetchEpisodeData}
        episodeData={episodeData}
      />} />

      <Route exact path="/episodes/:id" render={(props) => <Episode {...props}
        fetchEpisodeData={fetchEpisodeData}
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
      />} />

    </main>
  );
}

export default App;