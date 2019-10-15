import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Navigation />
    </header>
  );
}

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>
      <NavLink to="/locations">Locations</NavLink>
      <NavLink to="/episodes">Episodes</NavLink>
      <NavLink to="/search">Search</NavLink>
    </nav>
  )
}

export default Header;