import React from "react";
import { MealRecipes } from "./MealRecipes";
import { useMenuContext } from "./MenuContext";

export const MenuSection = (props) => {
  const {menus} = useMenuContext()
  return (
    <section className="m-6 p-6">
      <h2>Menu Planner</h2>
      <p>Select desired courses for each meal</p>

      <div className="mt-2 flex gap-6">
        {menus.map(m=><MealRecipes menu={m}></MealRecipes>)}
      </div>
    </section>
  );
};
