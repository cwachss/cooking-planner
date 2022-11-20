import React from "react";
import { MealRecipes } from './MealRecipes';


export const MenuSection = (props) => {
  return(<section className="m-6 p-6 flex gap-6">
      <MealRecipes title={"Friday Night"}></MealRecipes>
      <MealRecipes title={"Shabbos Morning"}></MealRecipes>
      </section>)
}