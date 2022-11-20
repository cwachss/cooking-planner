import React from "react";

export const CategorySelect = (props) => {
  return (
    <div className="rounded bg-gray-100 p-6">
      <h1>
        {props.title} <button className="text-xs rounded bg-purple-100 px-2">Edit name</button>
      </h1>
      <ul className="list-style-none">
        <li>
          <input type="checkbox" name="" id="" /> Appetizer
        </li>
        <li>
          <input type="checkbox" name="" id="" /> Side
        </li>
        <li>
          <input type="checkbox" name="" id="" /> Salad
        </li>
        <li>
          <input type="checkbox" name="" id="" /> Soup
        </li>
        <li>
          <input type="checkbox" name="" id="" /> Meat
        </li>
        <li>
          <input type="checkbox" name="" id="" /> Chicken
        </li>
        <li>
          <input type="checkbox" name="" id="" /> Dessert
        </li>
      </ul>
    </div>
  );
};
