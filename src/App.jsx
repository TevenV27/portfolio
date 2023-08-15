import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import Tecnologies from './components/Tecnologies';
import Projects from './components/Projects';
import Contact from './components/Contact';


import './App.css';
function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className='main-box'>
        <section className='section-box' id='welcome'>
          <Welcome />
        </section>
        <secttion className='section-box' id='about'>
          <AboutMe />
        </secttion>
        <secttion className='section-box' id='tecnologies'>
          <Tecnologies />
        </secttion>
        <secttion className='section-box' id='projects'>
          <Projects />
        </secttion>
        <secttion className='section-box' id='contact'>
          <Contact />
        </secttion>




      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
