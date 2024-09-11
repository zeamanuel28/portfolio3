import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Service from './components/Service';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service/>
      <Project />
      <Contact />
       <Footer/>
    </div>
  );
}

export default App
