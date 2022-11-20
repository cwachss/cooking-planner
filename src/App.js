import logo from "./logo.svg";
import "./output.css";
import { SelectSection } from "./components/SelectSection";
import { MenuSection } from "./components/MenuSection";
import { CookingSection } from "./components/CookingSection";
import MenuProvider from "./components/MenuContext";

function App() {
  return (
    <div className="App">
      <MenuProvider>
        <SelectSection />
        <MenuSection />
        <CookingSection />
      </MenuProvider>
    </div>
  );
}

export default App;
