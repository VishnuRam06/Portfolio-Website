import './App.css'
import { Navbar } from "./components/portfolio/Navbar/Navbar";
import { Hero } from "./components/portfolio/Hero/Hero";


function App() {
  return (
    <div className="App">
      {<Navbar/>}
      {<Hero/>}
    </div>
  );
}

export default App;
