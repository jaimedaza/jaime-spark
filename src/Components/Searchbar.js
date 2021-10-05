import React, { useState, useEffect } from "react";
import axios from "axios";

const Searchbar = ({ setSearchResults }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const target = event.currentTarget;
    setSearchValue(target.value);
  };

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "http://localhost:3001",
      url: `/search?q=${searchValue}&_page=1&_limit=10`,
    })
      .then((data) => {
        setSearchResults(data.data);
      })
      .catch(() => {});
  }, [searchValue, setSearchResults]);

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-8">
      <label
        htmlFor="Searchbar"
        className="flex w-9/12 justify-center"
        data-auto-label="searchbar"
      >
        <input
          type="text"
          name="Searchbar"
          value={searchValue}
          onChange={handleChange}
          placeholder="Search awesome things!!"
          className="bg-gray-100 rounded-lg w-full sm:w-96 py-2 text-center text-blue-400 focus:ring-2 focus:ring-primary focus:outline-none"
        />
      </label>
    </form>
  );
};

export default Searchbar;
