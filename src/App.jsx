import React from 'react';
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
      <main className='main' >
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
        <div className='footer-box'>
          <svg
            className=''
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.04 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C15.09 4.81 16.76 4 18.5 4 21.58 4 24 6.42 24 9.5c0 3.54-3.4 6.86-8.55 10.54L12 21.35z" fill="rgb(173,255,47)" />
          </svg>


          <p>By Teven</p>
        </div>

      </footer>
    </div>
  );
}

export default App;
