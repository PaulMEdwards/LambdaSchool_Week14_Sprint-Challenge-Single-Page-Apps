// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
// import { Route } from 'react-router-dom';
// import { LocationCard } from "./";

const LocationList = (props) => {
  // const { endpoints, fetchData, locationData, setLocationData } = props;
  const { endpoints, fetchData, setLocationData } = props;

  // const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    fetchData(endpoints["locations"], setLocationData);
    // eslint-disable-next-line
  }, []);
  // }, [locationData]);

  return (
    <React.Fragment>
    </React.Fragment>
  );
}

export default LocationList;