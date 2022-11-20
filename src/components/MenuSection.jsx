import React from "react";
import { MealRecipes } from "./MealRecipes";
import { useMenuContext } from "./MenuContext";

export const MenuSection = ({ menus }) => {
  return (
    <section className="m-6 p-6">
      <h2 className="text-2xl">Recipes</h2>

      <div className="mt-2 flex gap-6">
        {menus.map((m, i)=><MealRecipes menu={m} key={i}></MealRecipes>)}
      </div>
    </section>
  );
};
