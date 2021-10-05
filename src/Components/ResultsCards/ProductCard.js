import React from "react";
import noImage from "../../Assets/noimage.jpeg";

const ProductCard = ({ product, onClickItem }) => {
  if (product) {
    return (
      <div
        onClick={() => onClickItem(product.id, product.starred)}
        className={`w-9/12 sm:w-7/12 md:w-5/12 xl:w-5/12 flex flex-col lg:flex-row items-center justify-between border-2 ${
          product.starred ? "border-yellow-700" : "border-blue-400"
        } rounded py-3 px-3 mx-auto my-4`}
      >
        {product.image ? (
          <div className="w-20 h-20 mb-2 lg:mb-0">
            <img src={product.image} alt={product.name} className="w-full" />
          </div>
        ) : (
          <div className="w-20 h-20 mb-2 lg:mb-0">
            <img src={noImage} alt="not available" className="w-full" />
          </div>
        )}
        <div className="text-left capitalize w-3/4">
          <p className="text-base">
            <span className="text-blue-900 text-lg font-bold">Name: </span>{" "}
            {product.name}
          </p>
          <p className="text-base">
            <span className="text-blue-900 text-lg font-bold">Category: </span>
            {product.productCategory}
          </p>
          <p className="text-base">{product.previewText}</p>
        </div>
      </div>
    );
  }
  return null;
};

export default ProductCard;
