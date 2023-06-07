import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar'
import { Banner } from './components/banner';
import { Skills } from './components/skills';
import { Footer } from './components/Footer';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
function App() {
  return (
    <>
    <NavBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App ;
