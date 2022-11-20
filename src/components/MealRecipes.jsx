import React, { useState } from "react";
import { RecipeCard } from "./RecipeCard";

export const MealRecipes = (props) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded bg-blue-100 p-6">
      <h1>
        {props.title}
      </h1>
      <RecipeCard open={open} onClose={()=>setOpen(false)}></RecipeCard> <button onClick={()=>setOpen(true)}>View</button>
    </div>
  );
};
