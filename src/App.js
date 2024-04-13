import './App.css'
import { Navbar } from "./components/portfolio/Navbar/Navbar";
import { Hero } from "./components/portfolio/Hero/Hero";
import { About } from "./components/portfolio/About/About";
import { Experience } from "./components/portfolio/Experience/Experience";


function App() {
  return (
    <div className="App">
      {<Navbar/>}
      {<Hero/>}
      {<About/>}
      {<Experience/>}
    </div>
  );
}

export default App;
