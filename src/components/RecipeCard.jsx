import React, { useState } from "react";
// import { ReactDOM } from "react";
// import { MealSection } from './MealSection';

export const RecipeCard = (props) => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <button onClick={()=>setOpen(true)} className="text-xs rounded bg-purple-100 px-2">View</button>
      {open && (
        <div className="absolute z-30 inset-0 bg-gray-100/50 grid place-content-center">
          <div className="rounded bg-white p-6 w-[50vw] h-[90vh]">
            <button
              className="float-right text-2xl leading-0 font-bold rounded-full bg-gray-100 w-10 h-10 grid place-content-center"
              onClick={()=>setOpen(false)}
            >
              &times;
            </button>
            <h3>Recipe Name</h3>
          </div>
        </div>
      )}
    </>
  );
};
