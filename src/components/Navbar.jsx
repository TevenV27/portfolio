import React from 'react';
import './../styles/navbar.css'


export default function Navbar() {
  return (
    <nav className='nav-box'>
      <ul className='navigation-box'>
        <li>
          <a className='nav-items' href='#home' >Home</a>
        </li>
        <li>
          <a className='nav-items' href='#about' >About</a>
        </li>
        <li>
          <a className='nav-items' href='#technologies' >Technologies
          </a>
        </li>
        <li>
          <a className='nav-items' href='#projects' >Projects</a>
        </li>
        <li>
          <a className='nav-items' href='#contact' >Contact</a>
        </li>
      </ul>
    </nav>
  );
}
