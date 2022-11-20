import logo from "./logo.svg";
import "./output.css";
import { SelectSection } from "./components/SelectSection";
import { MenuSection } from "./components/MenuSection";
// import { CookingSection } from "./components/CookingSection";
import { useEffect, useState } from "react";
import { getRecipe } from "./api/getRecipe";

function App() {
  const [menus, setMenus] = useState([]);
  const [finalMenu, setFinalMenu] = useState([]);

  useEffect(() => {
    getRecipe().then((response) => {
      setMenus(JSON.stringify(response));
      setFinalMenu([]);
    });
  }, []);

  useEffect(() => {
    setFinalMenu(menus);
  }, [menus]);

  return (
    <div className="App">
      <SelectSection menus={menus} setMenus={setMenus} setSubmit={setSubmit} />
      <MenuSection menus={finalMenu} />
      {/* <CookingSection /> */}
    </div>
  );
}

export default App;
