import React, { useEffect } from "react";
import { Route } from 'react-router-dom';
import { LocationCard } from "./";

const LocationList = (props) => {
  const { fetchLocationData, locationData } = props;

  useEffect(() => {
    if (locationData.length === 0) fetchLocationData();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="location-list">
      {
        locationData.map(location => (
          <LocationDetails key={location.id} location={location} />
        ))
      }
    </section>
  );
}

function LocationDetails({location}) {
  console.log('LocationDetails location: ', location);
  if (!location) {
    return <div className="box">Loading location list...</div>;
  } else {
    return (
      <Route render={() => <LocationCard id={location.id} location={location} />} />
    );
  }
}

export default LocationList;