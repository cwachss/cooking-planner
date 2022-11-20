import logo from './logo.svg';
import './output.css';
import { SelectSection } from './components/SelectSection';
import { MenuSection } from './components/MenuSection';
import { CookingSection } from './components/CookingSection';

function App() {
  return (
    <div className="App">
      <SelectSection />
      <MenuSection/>
      {/* <CookingSection /> */}
    </div>
  );
}

export default App;
