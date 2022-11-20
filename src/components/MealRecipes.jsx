import React, { useState } from "react";
import { RecipeCard } from "./RecipeCard";

export const MealRecipes = (props) => {
  const [totalTime, setTime] = useState(false);
  return (
    <div className="rounded bg-[#54c1cd] p-6">
      <h1>{props.title} <small>Total time: {totalTime}</small></h1>
      <div className="bg-gray-100 rounded flex items-baseline gap-2 px-4 py-2 my-2">
        Recipe Name <small className="text-gray-700">00:00</small>
        <RecipeCard></RecipeCard>
      </div>
    </div>
  );
};
