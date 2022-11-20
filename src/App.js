import logo from "./logo.svg";
import "./output.css";
import { SelectSection } from "./components/SelectSection";
import { MenuSection } from "./components/MenuSection";
// import { CookingSection } from "./components/CookingSection";
import { useEffect, useState } from "react";
import { getRecipe } from "./api/getRecipe";

function App() {
  const [menus, setMenus] = useState([{ category: "Chicken" }]);

  useEffect(() => {
    getRecipe().then((resp) => console.log(resp))
  }, [menus]);

  return (
    <div className="App">
      <SelectSection menus={menus} setMenus={setMenus} />
      <MenuSection menus={menus} />
      {/* <CookingSection /> */}
    </div>
  );
}

export default App;
