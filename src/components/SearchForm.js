import React, {
  useEffect
  // , useState
} from "react";
import { CharacterList } from "./";

const SearchForm = props => {
  const {
    fetchCharacterData, characterData,
    // fetchLocationData, locationData,
    // fetchEpisodeData, episodeData,
    searchData, setSearchData,
    searchResults, setSearchResults
  } = props;
  
  if (characterData.length === 0) fetchCharacterData();
  console.log('characterData: ', characterData);

  useEffect(() => {
    console.log('searchData: ', searchData);
    let results = [];
    if (searchData) {
      results = characterData.filter(character => character.name.toLowerCase().includes(searchData.toLowerCase()));
      if (results.length === 0) {
        results = characterData.filter(character => character.status.toLowerCase().includes(searchData.toLowerCase()));
      }
      if (results.length === 0) {
        results = characterData.filter(character => character.species.toLowerCase().includes(searchData.toLowerCase()));
      }
      if (results.length === 0) {
        results = characterData.filter(character => character.type.toLowerCase().includes(searchData.toLowerCase()));
      }
      if (results.length === 0) {
        results = characterData.filter(character => character.gender.toLowerCase().includes(searchData.toLowerCase()));
      }
      if (results.length === 0) {
        results = characterData.filter(character => character.origin.name.toLowerCase().includes(searchData.toLowerCase()));
      }
      if (results.length === 0) {
        results = characterData.filter(character => character.location.name.toLowerCase().includes(searchData.toLowerCase()));
      }
    }
    console.log('Search results: ', results);
    setSearchResults(results);
    // eslint-disable-next-line
  }, [searchData]);

  const handleChange = event => {
    // console.log(event.target.value);
    setSearchData(event.target.value);
    // console.log(searchData);
  };

  return (
    <section className="search-form">
      <form className="box">
        <label htmlFor="character-search">Character Search:&nbsp;</label>
        <input
          id="character-search"
          type="text"
          name="searchCharacters"
          placeholder="Search"
          value={searchData}
          onChange={handleChange}
        />
      </form>
      <div className="character-search-results">
        <CharacterList fetchCharacterData={fetchCharacterData} characterData={searchResults} />
      </div>
    </section>
  );
}

export default SearchForm;