import logo from "./logo.svg";
import "./output.css";
import { SelectSection } from "./components/SelectSection";
import { MenuSection } from "./components/MenuSection";
// import { CookingSection } from "./components/CookingSection";
import { useEffect, useState } from "react";
import { getRecipe } from "./api/getRecipe";
import { fakeRecipes } from "./api/fakeRecipes";

function App() {
  const [menus, setMenus] = useState(fakeRecipes);
  const [finalMenu, setFinalMenu] = useState([]);

  useEffect(() => {
    setFinalMenu(menus);
  }, [menus]);

  return (
    <div className="App">
      <SelectSection menus={menus} setMenus={setMenus} />
      <MenuSection menus={[{ name: "meal1", recipes: menus }]} />
      {/* <CookingSection /> */}
    </div>
  );
}

export default App;
