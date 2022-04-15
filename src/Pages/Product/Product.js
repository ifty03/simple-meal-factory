import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { strInstructions, strMeal, strMealThumb, idMeal } = product;
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md dark:bg-coolGray-900 dark:text-coolGray-100">
        <img
          src={strMealThumb}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-coolGray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{strMeal}</h2>
            <p className="dark:text-coolGray-100">
              {strInstructions.slice(0, 130)}
            </p>
          </div>
          <button
            onClick={() => {
              navigate("/product/" + idMeal);
            }}
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-coolGray-900"
          >
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
