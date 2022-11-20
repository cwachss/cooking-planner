import logo from './logo.svg';
import './output.css';
import { SelectSection } from './components/SelectSection';
import { MenuSection } from './components/MenuSection';

function App() {
  return (
    <div className="App">
      <SelectSection />
      <MenuSection/>
    </div>
  );
}

export default App;
