import React, { useState, useEffect } from "react";
import { getRecipe } from "../api/getRecipe";

export const CategorySelect = (props) => {
  const [edit, setEdit] = useState();
  const [title, setTitle] = useState("Friday Night");

  const categories = [
    "appetizers",
    "veggies",
    "sides",
    "meat",
    "chicken",
    "dessert",
  ];

  return (
    <div className="rounded border border-[#54c1cd] text-gray-800 p-6">
      {edit && (
        <div className="flex">
          <input
            className="bg-white border border-gray-400 w-full text-gray-700 rounded-l mr-1 p-1"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <button
            onClick={() => setEdit(false)}
            className="text-xs rounded-r bg-[#fc8329] text-white px-2"
          >
            Done
          </button>
        </div>
      )}
      {!edit && (
        <h1 className="w-[225px] flex justify-between">
          {title || "Meal"}{" "}
          <button
            onClick={() => setEdit(true)}
            className="text-xs rounded bg-[#fc8329] text-white px-2"
          >
            Edit name
          </button>
        </h1>
      )}
      <ul className="mt-2 list-style-none accent-[#ffa868]">
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
