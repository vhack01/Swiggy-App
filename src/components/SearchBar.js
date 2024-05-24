import { useState } from "react";

const SearchBar = ({ fn }) => {
  const [value, setValue] = useState("");
  // console.log("SearchBar rendering");
  return (
    <div className="flex gap-x-1">
      <input
        type="text"
        id="search-box"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="search restaurants, cuisines"
        className="border-solid border-2 border-gray-500 rounded px-2"
      />
      <button
        className="border-solid border-2 border-green-400 bg-green-100 px-2 rounded hover:bg-green-200"
        onClick={() => fn(value)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
