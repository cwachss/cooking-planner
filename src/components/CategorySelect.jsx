import React, { useState, useEffect } from "react";
import { getRecipe } from "../api/getRecipe";

export const CategorySelect = (props, { menus, setMenus }) => {
  const [checked, setChecked] = useState();

  const categories = [
    "Appetizer",
    "Salad",
    "Soup",
    "Side",
    "Meat",
    "Chicken",
    "Dessert",
  ];

  return (
    <div className="rounded border border-[#287880] text-gray-800 p-6">
      <h1>
        {props.title}{" "}
        <button className="text-xs rounded bg-[#fc8329] text-white px-2">
          Edit name
        </button>
      </h1>
      <ul className="list-style-none accent-[#ffa868]">
        {categories.map((i, index) => {
          return (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={() =>
                    props.setCategories(...props.menuCategories, i)
                  }
                />{" "}
                {i}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
