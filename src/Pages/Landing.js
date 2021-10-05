import React, { useEffect, useState } from "react";

import Searchbar from "../Components/Searchbar";
import Results from "../Components/Results";
import Starred from "../Components/Starred";

const Landing = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [starredResults, setStarredResults] = useState(0);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {}, [searchResults, starredResults, refresh]);

  return (
    <div className="flex flex-col container min-h-screen py-8">
      <Searchbar setSearchResults={setSearchResults} />
      <Starred starredResults={starredResults} />
      <Results
        searchResults={searchResults}
        starredResults={starredResults}
        setStarredResults={setStarredResults}
        setSearchResults={setSearchResults}
        setRefresh={setRefresh}
        refresh={refresh}
      />
    </div>
  );
};

export default Landing;
