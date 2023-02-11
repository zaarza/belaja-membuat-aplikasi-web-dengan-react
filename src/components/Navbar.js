import React from "react";
import NoteSearch from "./NoteSearch";

function Navbar({ searchText, onSearchTextHandler }) {
  return (
    <nav className="navbar">
      <h3 className="navbar__logo">Notes App</h3>
      <NoteSearch searchText={searchText} onSearchTextHandler={onSearchTextHandler} />
    </nav>
  );
}

export default Navbar;
