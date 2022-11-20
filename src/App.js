import logo from "./logo.svg";
import "./output.css";
import { SelectSection } from "./components/SelectSection";
import { MenuSection } from "./components/MenuSection";
import { CookingSection } from "./components/CookingSection";
import { useState } from "react";

function App() {
  const [menus, setMenus] = useState();
  
  return (
    <div className="App">
      <SelectSection menus={menus} setMenus={setMenus} />
      <MenuSection />
      {/* <CookingSection /> */}
    </div>
  );
}

export default App;
