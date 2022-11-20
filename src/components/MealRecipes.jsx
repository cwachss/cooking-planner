import React, { useState } from "react";
import { RecipeCard } from "./RecipeCard";

export const MealRecipes = (menu) => {
  const [totalTime, setTime] = useState()
  return (
    <div className="rounded bg-[#54c1cd] p-6">
      <h1>{menu.title} <small>Total time: {totalTime}</small></h1>
      {menu.recipes.map((r)=><div className="bg-gray-100 rounded flex items-baseline gap-2 px-4 py-2 my-2">
        {r.name} <small className="text-gray-700">{r.time}</small>
        <RecipeCard recipe={r}></RecipeCard>
      </div>)}
    </div>
  );
};
