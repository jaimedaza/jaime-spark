import React from "react";
import noImage from "../../Assets/noimage.jpeg";

const AnimalCard = ({ animal, onClickItem }) => {
  if (animal) {
    return (
      <div
        onClick={() => onClickItem(animal.id, animal.starred)}
        className={`w-9/12 sm:w-7/12 md:w-5/12 xl:w-5/12 flex flex-col lg:flex-row items-center justify-between border-2 ${
          animal.starred ? "border-yellow-700" : "border-blue-400"
        } rounded py-3 px-3 mx-auto my-4`}
      >
        {animal.image ? (
          <div className="w-20 h-20 mb-2 lg:mb-0">
            <img src={animal.image} alt={animal.name} className="w-full" />
          </div>
        ) : (
          <div className="w-20 h-20 mb-2 lg:mb-0">
            <img src={noImage} alt="not available" className="w-full" />
          </div>
        )}
        <div className="text-left capitalize">
          <p className="text-base">
            <span className="text-blue-900 text-lg font-bold">Name: </span>{" "}
            {animal.name}
          </p>
          <p className="text-base">
            <span className="text-blue-900 text-lg font-bold">
              {" "}
              Scientific name:{" "}
            </span>
            {animal.taxonomy.scientificName}
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export default AnimalCard;
