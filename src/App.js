import './App.css'
import { Navbar } from "./components/portfolio/Navbar/Navbar";
import { Hero } from "./components/portfolio/Hero/Hero";
import { About } from "./components/portfolio/About/About";



function App() {
  return (
    <div className="App">
      {<Navbar/>}
      {<Hero/>}
      {<About/>}
    </div>
  );
}

export default App;
