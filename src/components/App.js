import React, { useState } from "react";
import SearchBar from "./SearchBar";

const App = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="ui container">
      <SearchBar setSearch={setSearch} />
    </div>
  );
};

export default App;
