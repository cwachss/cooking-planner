import React from "react";
import { MealRecipes } from "./MealRecipes";

export const MenuSection = (props) => {
  return (
    <section className="m-6 p-6">
      <h2>Menu Planner</h2>
      <p>Select desired courses for each meal</p>

      <div className="mt-2 flex gap-6">
        <MealRecipes title={"Friday Night"}></MealRecipes>
        <MealRecipes title={"Shabbos Morning"}></MealRecipes>
      </div>
    </section>
  );
};
