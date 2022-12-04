import React, { useState } from "react";

const SearchBar = ({ search, setSearch }) => {
  const [term, setTerm] = useState("");
  const onSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(term);
    setTerm("");
  };
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSearchSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            value={term}
            type="text"
            onChange={(e) => setTerm(e.target.value)}
            className="prompt"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
