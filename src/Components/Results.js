import React from "react";
import axios from "axios";
import AnimalCard from "./ResultsCards/AnimalCard";
import CompanyCard from "./ResultsCards/CompanyCard";
import ProductCard from "./ResultsCards/ProductCard";

const Results = ({
  searchResults,
  starredResults,
  setStarredResults,
  setSearchResults,
  setRefresh,
  refresh,
}) => {
  const updateStarredResults = (starred, starredResults) => {
    if (starred === false) {
      setStarredResults(starredResults + 1);
    }
    if (starred === true) {
      setStarredResults(starredResults - 1);
    }
  };

  const updateSearchResults = (arr, id, data) => {
    const myIndex = arr.findIndex((obj) => obj.id === id);

    arr.splice(myIndex, 1, data);

    return arr;
  };

  const onClickItem = async (id, starred) => {
    const url = `http://localhost:3001/search/${id}`;
    const myBody = `{ "starred": ${!starred} }`;

    await axios
      .patch(url, myBody, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        updateStarredResults(starred, starredResults);
        const update = updateSearchResults(
          searchResults,
          data.data.id,
          data.data
        );
        setSearchResults(update);
        setRefresh(!refresh);
      });
  };

  return (
    <div className="flex flex-col">
      {searchResults &&
        searchResults.length > 0 &&
        searchResults.map((item) => {
          if (item.type === "animal") {
            return (
              <AnimalCard
                animal={item}
                key={item.id}
                onClickItem={onClickItem}
              />
            );
          }
          if (item.type === "company") {
            return (
              <CompanyCard
                company={item}
                key={item.id}
                onClickItem={onClickItem}
              />
            );
          } else {
            return (
              <ProductCard
                product={item}
                key={item.id}
                onClickItem={onClickItem}
              />
            );
          }
        })}
    </div>
  );
};

export default Results;
