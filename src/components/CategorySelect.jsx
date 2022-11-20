import React, { useState, useEffect } from "react";
import { getRecipe } from "../api/getRecipe";

export const CategorySelect = (props) => {
  const [edit, setEdit] = useState();
  const [title, setTitle] = useState("");

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
    <div className="rounded bg-[#287880] text-gray-200 p-6">
      {edit && (
        <div className="flex">
          <input
            className="bg-white w-full text-gray-700"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <button
            onClick={() => setEdit(false)}
            className="text-xs rounded bg-[#fc8329] text-white px-2"
          >
            Done
          </button>
        </div>
      )}
      {!edit && (
        <h1>
          {title || "Meal"}{" "}
          <button
            onClick={() => setEdit(true)}
            className="text-xs rounded bg-[#fc8329] text-white px-2"
          >
            Edit name
          </button>
        </h1>
      )}
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
