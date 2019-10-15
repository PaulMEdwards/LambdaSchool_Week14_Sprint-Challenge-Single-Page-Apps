import React, { useEffect } from "react";
import { Location } from "./";

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
          <Location key={location.id} location={location} />
        ))
      }
    </section>
  );
}

export default LocationList;