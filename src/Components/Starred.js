import React from "react";

const Starred = ({ starredResults }) => {
  return (
    <div>
      <h2 className="text-blue-600">Starred: {starredResults}</h2>
    </div>
  );
};

export default Starred;
