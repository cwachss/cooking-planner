import logo from "./logo.svg";
import "./output.css";
import { SelectSection } from "./components/SelectSection";
import { MenuSection } from "./components/MenuSection";
// import { CookingSection } from "./components/CookingSection";
import { useEffect, useState } from "react";
import { getRecipe } from "./api/getRecipe";

function App() {
  const [menus, setMenus] = useState([]);
  const [submit, setSubmit] = useState();

  useEffect(() => {
    getRecipe().then((resp) => setMenus(JSON.stringify(resp)));
  }, []);

  return (
    <div className="App">
      <SelectSection menus={menus} setMenus={setMenus} setSubmit={setSubmit} />
      <MenuSection menus={menus} />
      {/* <CookingSection /> */}
    </div>
  );
}

export default App;
