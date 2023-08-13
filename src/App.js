import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.js";
import Header from "./components/header.js";
import About from "./components/about.js";
import Services from "./components/services"
import Experiences from "./components/experiences"
import Contact from "./components/contact.js"
import Projects from "./components/projects.js"
function App() {
  return (
    <div className='mainpage'>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Experiences />
        <Projects />
        <Contact />
        
    </div>
  );
}

export default App;
