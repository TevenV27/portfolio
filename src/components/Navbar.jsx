import React from 'react';
import './../styles/navbar.css'


export default function Navbar() {
  return (
    <nav className='nav-box'>
      <ul className='navigation-box'>
        <li>
          <a className='nav-items' href='#welcome' >Inicio</a>
        </li>
        <li>
          <a className='nav-items' href='#about' >Sobre mi</a>
        </li>
        <li>
          <a className='nav-items' href='#tecnologies' >Tecnologías</a>
        </li>
        <li>
          <a className='nav-items' href='#projects' >Proyectos</a>
        </li>
        <li>
          <a className='nav-items' href='#contact' >Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
