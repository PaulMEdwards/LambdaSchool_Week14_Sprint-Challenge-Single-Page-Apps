// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import { Route } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
// import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
// import styled from 'styled-components';

import {
  Header,
  WelcomePage,
  CharacterList,
  CharacterCard,
  LocationList,
  LocationCard,
  EpisodeList,
  EpisodeCard,
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

  async function fetchData(endpoint, setFunction) {
    try {
      let promiseData = await axios.get(`${api_uri}${endpoint}`);
      console.log('endpoint: ', endpoint);
      console.log('data: ', promiseData);
      setFunction(promiseData.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <Header />

      {/* <WelcomePage /> */}

      <Route exact path="/" component={WelcomePage} />

      {/* <Route path="/characters" component={CharacterList} /> */}
      <Route exact path="/characters" render={(props) => <CharacterList {...props} endpoints={endpoints} fetchData={fetchData} characterData={characterData} setCharacterData={setCharacterData} />} />
      <Route exact path="/characters/:id" render={(props) => <CharacterCard {...props} characterData={characterData} />} />

      {/* <Route path="/locations" component={LocationList} /> */}
      <Route exact path="/locations" render={(props) => <LocationList {...props} endpoints={endpoints} fetchData={fetchData} locationData={locationData} setLocationData={setLocationData} />} />
      <Route exact path="/locations/:id" render={(props) => <LocationCard {...props} locationData={locationData} />} />

      {/* <Route path="/episodes" component={EpisodeList} /> */}
      <Route exact path="/episodes" render={(props) => <EpisodeList {...props} endpoints={endpoints} fetchData={fetchData} episodeData={episodeData} setEpisodeData={setEpisodeData} />} />
      <Route exact path="/episodes/:id" render={(props) => <EpisodeCard {...props} episodeData={episodeData} />} />

      <Route path="/search" component={SearchForm} />
    </main>
  );
}

export default App;