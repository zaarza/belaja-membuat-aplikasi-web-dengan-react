import React from "react";

function NoteSearch({ searchText, onSearchTextHandler }) {
  return (
    <form>
      <input type="text" className="search-input" placeholder="Search note..." value={searchText} onChange={onSearchTextHandler} />
    </form>
  );
}

export default NoteSearch;
