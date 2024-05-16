import { useState } from "react";

const SearchBar = ({ fn }) => {
  const [value, setValue] = useState("");
  // console.log("SearchBar rendering");
  return (
    <div className="search-container">
      <input
        type="text"
        id="search-box"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className="search-btn" onClick={() => fn(value)}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
