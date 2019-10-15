import React, {
  useEffect
  , useState
} from "react";
import { CharacterList, LocationList, EpisodeList } from "./";

const SearchForm = props => {
  const [searchCharacterData, setSearchCharacterData] = useState('');
  const [searchCharacterResults, setSearchCharacterResults] = useState([]);
  const [searchLocationData, setSearchLocationData] = useState('');
  const [searchLocationResults, setSearchLocationResults] = useState([]);
  const [searchEpisodeData, setSearchEpisodeData] = useState('');
  const [searchEpisodeResults, setSearchEpisodeResults] = useState([]);

  const {
    fetchCharacterData, characterData,
    fetchLocationData, locationData,
    fetchEpisodeData, episodeData
  } = props;


  useEffect(() => {
    console.log('searchCharacterData: ', searchCharacterData);
    if (characterData.length === 0) fetchCharacterData();

    let characterResults = [];
    if (searchCharacterData) {
      characterResults = characterData.filter(character => character.name.toLowerCase().includes(searchCharacterData.toLowerCase()));
      if (characterResults.length === 0) {
        characterResults = characterData.filter(character => character.status.toLowerCase().includes(searchCharacterData.toLowerCase()));
      }
      if (characterResults.length === 0) {
        characterResults = characterData.filter(character => character.species.toLowerCase().includes(searchCharacterData.toLowerCase()));
      }
      if (characterResults.length === 0) {
        characterResults = characterData.filter(character => character.type.toLowerCase().includes(searchCharacterData.toLowerCase()));
      }
      if (characterResults.length === 0) {
        characterResults = characterData.filter(character => character.gender.toLowerCase().includes(searchCharacterData.toLowerCase()));
      }
      if (characterResults.length === 0) {
        characterResults = characterData.filter(character => character.origin.name.toLowerCase().includes(searchCharacterData.toLowerCase()));
      }
      if (characterResults.length === 0) {
        characterResults = characterData.filter(character => character.location.name.toLowerCase().includes(searchCharacterData.toLowerCase()));
      }
    }
    console.log('searchCharacter characterResults: ', characterResults);
    setSearchCharacterResults(characterResults);
    // eslint-disable-next-line
  }, [searchCharacterData]);


  useEffect(() => {
    console.log('searchLocationData: ', searchLocationData);
    if (locationData.length === 0) fetchLocationData();

    let locationResults = [];
    if (searchLocationData) {
      locationResults = locationData.filter(location => location.name.toLowerCase().includes(searchLocationData.toLowerCase()));
      if (locationResults.length === 0) {
        locationResults = locationData.filter(location => location.type.toLowerCase().includes(searchLocationData.toLowerCase()));
      }
      if (locationResults.length === 0) {
        locationResults = locationData.filter(location => location.dimension.toLowerCase().includes(searchLocationData.toLowerCase()));
      }
    }
    console.log('searchLocation locationResults: ', locationResults);
    setSearchLocationResults(locationResults);
    // eslint-disable-next-line
  }, [searchLocationData]);


  useEffect(() => {
    console.log('searchEpisodeData: ', searchEpisodeData);
    if (episodeData.length === 0) fetchEpisodeData();

    let episodeResults = [];
    if (searchEpisodeData) {
      episodeResults = episodeData.filter(episode => episode.name.toLowerCase().includes(searchEpisodeData.toLowerCase()));
      if (episodeResults.length === 0) {
        episodeResults = episodeData.filter(episode => episode.episode.toLowerCase().includes(searchEpisodeData.toLowerCase()));
      }
      if (episodeResults.length === 0) {
        episodeResults = episodeData.filter(episode => episode.air_date.toLowerCase().includes(searchEpisodeData.toLowerCase()));
      }
    }
    console.log('searchEpisode episodeResults: ', episodeResults);
    setSearchEpisodeResults(episodeResults);
    // eslint-disable-next-line
  }, [searchEpisodeData]);


  const handleChangeCharacter = event => {
    // console.log(`Character event.target.value`, event.target.value);
    document.getElementById('location-search').value = '';
    document.getElementById('episode-search').value = '';
    setSearchCharacterData(event.target.value);
    // console.log(searchCharacterData);
  };
  const handleChangeLocation = event => {
    // console.log(`Location event.target.value`, event.target.value);
    document.getElementById('character-search').value = '';
    document.getElementById('episode-search').value = '';
    setSearchLocationData(event.target.value);
    // console.log(searchLocationData);
  };
  const handleChangeEpisode = event => {
    // console.log(`Episode event.target.value`, event.target.value);
    document.getElementById('character-search').value = '';
    document.getElementById('location-search').value = '';
    setSearchEpisodeData(event.target.value);
    // console.log(searchEpisodeData);
  };
  const handlereset = event => {
    document.getElementById('character-search').value = '';
    document.getElementById('location-search').value = '';
    document.getElementById('episode-search').value = '';
  };


  return (
    <React.Fragment>
      <section className="character-search-form">
        <form className="box">
          <label htmlFor="character-search">Character Search:&nbsp;</label>
          <input
            id="character-search"
            type="text"
            name="searchCharacters"
            placeholder="Search"
            value={searchCharacterData}
            onChange={handleChangeCharacter}
          />
        </form>
        <div className="character-search-results">
          <CharacterList fetchCharacterData={fetchCharacterData} characterData={searchCharacterResults} />
        </div>
      </section>
      <section className="location-search-form">
        <form className="box">
          <label htmlFor="location-search">Location Search:&nbsp;</label>
          <input
            id="location-search"
            type="text"
            name="searchLocations"
            placeholder="Search"
            value={searchLocationData}
            onChange={handleChangeLocation}
          />
        </form>
        <div className="location-search-results">
          <LocationList fetchLocationData={fetchLocationData} locationData={searchLocationResults} />
        </div>
      </section>
      <section className="episode-search-form">
        <form className="box">
          <label htmlFor="episode-search">Episode Search:&nbsp;</label>
          <input
            id="episode-search"
            type="text"
            name="searchEpisodes"
            placeholder="Search"
            value={searchEpisodeData}
            onChange={handleChangeEpisode}
          />
        </form>
        <div className="episode-search-results">
          <EpisodeList fetchEpisodeData={fetchEpisodeData} episodeData={searchEpisodeResults} />
        </div>
      </section>
    </React.Fragment>
  );
}

export default SearchForm;