import logo from "./logo.svg";
import "./output.css";
import { SelectSection } from "./components/SelectSection";
import { MenuSection } from "./components/MenuSection";
import { CookingSection } from "./components/CookingSection";
import { useState } from "react";

function App() {
  const [menus, setMenus] = useState([{recipes:[{
    result: {
        name: "Chicken Soup",
        prepTime: "30 minutes",
        cookTime: "1 hour 30 minutes",
        ingredients: [
            {
                name: "chicken thighs",
                amount: "4"
            },
            {
                name: "rosemary",
                amount: "4 tsp"
            },
            {
                name: "Olive Oil",
                amount: "2 tbsp"
            }
        ],
        instructions: [
            {
                text: "do this one"
            },
            {
                text: "do that two"
            },
            {
                text: "do three"
            },
            {
                text: "do four"
            },
        ]
    }
  }]}]);
  return (
    <div className="App">
      <SelectSection menus={menus} setMenus={setMenus} />
      <MenuSection menus={menus} />
      {/* <CookingSection /> */}
    </div>
  );
}

export default App;
