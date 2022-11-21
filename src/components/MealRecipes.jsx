import React, { useEffect, useState } from "react";
import { RecipeCard } from "./RecipeCard";

export const MealRecipes = ({ menu }) => {
  const [totalTime, setTime] = useState();
  useEffect(() => {
    var t = 0;
    menu.recipes[0].forEach((m) => {
      t += m.cookTime;
    });
    setTime(getTimeString(t));
  }, []);

  function getTimeString(minutes) {
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    return `${h} hours, ${m} minutes`;
  }

  return (
    <div className="rounded bg-[#54c1cd] p-6">
      <h1>
        {menu.title} <small>Total time: {totalTime}</small>
      </h1>
      {menu.recipes.map((r, i) => (
        <div
          key={i}
          className="bg-gray-100 rounded flex items-baseline gap-2 px-4 py-2 my-2"
        >
          {r[0].name}{" "}
          <small className="text-gray-700">
            {getTimeString(r[0].cookTime)}
          </small>
          <RecipeCard recipe={r[0]}></RecipeCard>
        </div>
      ))}
    </div>
  );
};
