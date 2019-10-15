import React from "react";
import { Route } from 'react-router-dom';
import { LocationCard } from "./";

export default function Location({location}) {
  return (
    <Route render={(props) => <LocationCard id={location.id} location={location} />} />
  );
}
