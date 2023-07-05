import React, { useState } from "react";
import SearchResults from "./SearchResults";

function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const api_key = "681d9718854aac096a67aef629338501";

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    const query = encodeURIComponent(search);
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&include_adult=false&language=en-US`
    );
    const data = await response.json();

    setResults(data.results);
  };

  return (
    <div>
      <div className="w-full mt-8 z-50">
        {" "}
        <form
          className="w-full max-w-lg m-auto p-4"
          onSubmit={handleSearchSubmit}
        >
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" /* Changed text color to white */
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={handleSearchChange}
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="pt-32">
        {results.length > 0 && <SearchResults results={results} />}
      </div>
    </div>
  );
}
export default Search;
