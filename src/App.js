import './App.css'
import { Navbar } from "./components/portfolio/Navbar/Navbar";
import { Hero } from "./components/portfolio/Hero/Hero";
import { About } from "./components/portfolio/About/About";
import { Experience } from "./components/portfolio/Experience/Experience";
import { Projects } from "./components/portfolio/Projects/Projects";
import { Contact } from "./components/portfolio/contact/contact";


function App() {
  return (
    <div className="App">
      {<Navbar/>}
      {<Hero/>}
      {<About/>}
      {<Experience/>}
      {<Projects/>}
      {<Contact/>}
    </div>
  );
}

export default App;
