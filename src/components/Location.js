import React, { useEffect } from "react";
import { Route } from 'react-router-dom';
import { LocationCard } from "./";

export default function Location(props) {
  console.log('Location props: ', props);

  const id = Number(props.match.params.id);
  const {
    fetchLocationData
    , selectedLocation
  } = props;

  useEffect(() => {
    fetchLocationData(id);
    // eslint-disable-next-line
  },[]);

  return (
    <React.Fragment>
      <Route render={(props) => <LocationCard id={id} location={selectedLocation} showExtra={true} />} />
    </React.Fragment>
  );
}
