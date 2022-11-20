import React, { useState } from "react";
// import { ReactDOM } from "react";
// import { MealSection } from './MealSection';

export const RecipeCard = ({recipe}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-xs rounded bg-[#fc8329] text-white px-2"
      >
        View
      </button>
      {open && (
        <div className="absolute z-30 inset-0 bg-gray-100/70 grid place-content-center">
          <div className="rounded bg-white p-6 w-[50vw] h-[90vh]">
            <button
              className="float-right text-2xl leading-0 font-bold rounded-full bg-gray-100 w-10 h-10 grid place-content-center"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <h3 className="text-xl text-lg font-bold">{recipe.name}</h3>
            <h5 className="text-lg font-semibold mt-6">Ingredients</h5>
<ul className="list-decimal p-4">
              {recipe.ingredients.map((i, index) => (
                <li key={index}>{i.name}</li>
              ))}
            </ul>
            <h5 className="text-lg font-semibold">Instructions</h5>
            <ul className="list-decimal p-4">
              {recipe.instructions.map((i, index) => (
                <li key={index}>{i.text}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
