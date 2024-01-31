import React from 'react'
import './../styles/home.css'
export default function Home() {
  return (
    <div className='home-container' >
      <div className='home-box'>


        <h1 className='name-text'>
          <span className='sybols-text'>&#123; </span>
          Teven
          <span className='sybols-text'> &#125;</span>
        </h1>
        <div className='rol-text-box'>
          <span className='rol-text'> Software Developer</span>
        </div>

        <div className='button-cv-box'>
          <a className='button-down-cv' href="https://raw.githubusercontent.com/TevenV27/portfolio/main/src/assets/CV_English.pdf" target="_blank" >Download CV</a>
        </div>
      </div>

    </div>
  )
}
