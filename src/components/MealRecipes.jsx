import React, { useState } from "react";
import { RecipeCard } from "./RecipeCard";

export const MealRecipes = (props) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded bg-blue-100 p-6">
      <h1>
        {props.title}
      </h1>
      <div className="bg-gray-100 rounded flex items-baseline gap-2 px-4 py-2 my-2">Recipe Name <small clasName="text-gray-700">00:00</small>
      <RecipeCard></RecipeCard>
    </div></div>
  );
};
