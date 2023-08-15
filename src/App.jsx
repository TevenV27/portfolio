import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
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
      <main >
        <section className='section-box' id='home'>
          <Home />
        </section>

        <div className='main-box'>
          <section className='section-box' id='about'>
            <AboutMe />
          </section>
          <section className='section-box' id='technologies'>
            <Tecnologies />
          </section>
          <section className='section-box' id='projects'>
            <Projects />
          </section>
          <section className='section-box' id='contact'>
            <Contact />
          </section>
        </div>






      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
