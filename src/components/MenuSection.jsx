import React from "react";
import { MealRecipes } from "./MealRecipes";
import { useMenuContext } from "./MenuContext";

export const MenuSection = ({ menus }) => {
  return (
    <section className="m-6 p-6">
      <h2>Menu Planner</h2>
      <p>Select desired courses for each meal</p>

      <div className="mt-2 flex gap-6">
        {/* {menus.map((m, i)=><MealRecipes menu={m} key={i}></MealRecipes>)} */}
      </div>
    </section>
  );
};
