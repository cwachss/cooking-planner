import React, { useEffect, useState } from "react";
import { MealRecipes } from "./MealRecipes";
import { useMenuContext } from "./MenuContext";

export const MenuSection = ({ menus }) => {
  const [totalTime, setTime] = useState();
  useEffect(() => {
    var t = 0;
    menus.forEach((m) => {
      let mt = 0;
      m.recipes.forEach((r) => {
        mt += r[0].cookTime;
      });
      t += mt;
    });
    setTime(getTimeString(t));
  }, []);

  function getTimeString(minutes) {
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    return `${h} hours, ${m} minutes`;
  }

  return (
    <section className="m-6 p-6">
      <h2 className="text-2xl">
        Recipes <small className="text-gray-500">total time: {totalTime}</small>
      </h2>

      <div className="mt-2 flex gap-6">
        {menus.map((m, i) => (
          <MealRecipes menu={m} key={i}></MealRecipes>
        ))}
      </div>
    </section>
  );
};
