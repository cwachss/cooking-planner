import React, { useEffect } from "react";
import { getRecipe } from "../api/getRecipe";
import { useMenuContext } from "./MenuContext";

export const CategorySelect = (props) => {
  const { menus, setMenus } = useMenuContext();
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

  useEffect(() => {
    getRecipe().then((response) => {
      setMenus(response);
    });
  }, []);
  const createMenu = (menuTitle) => {
    setMenus(menus.push({ name: menuTitle }));
  };

  const addRecipe = () => {};

  return (
    <div className="rounded bg-[#287880] text-gray-200 p-6">
      <h1>
        {props.title}{" "}
        <button className="text-xs rounded bg-[#fc8329] text-white px-2">
          Edit name
        </button>
      </h1>
      <ul className="list-style-none accent-[#ffa868]">
        {categories.map((i) => {
          return (
            <li>
              <label>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={() => addRecipe()}
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
