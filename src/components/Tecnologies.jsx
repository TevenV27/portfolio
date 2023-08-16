import React, { useState } from 'react';
import './../styles/tecnologies.css';

const images = [
  'react.png',
  'javascript.png',
  'html.png',
  'css.png',
  'python.png',
  'java.png',
  'node.png',
  'git.png',
  'postgre.png',
  'mongo.png',
  'tailwind.png',
  'express.png'
];

export default function Tecnologies() {
  const [paused, setPaused] = useState(false);

  const handleMouseEnter = () => {
    setPaused(true);
  };

  const handleMouseLeave = () => {
    setPaused(false);
  };

  return (
    <div className='tecno-box'>
      <h1>&lt; Technologies /&gt;</h1>
      <br />
      <p className='tech-descrp'>These are some of the technologies that you use the most and in which I have the most knowledge.</p>
      <br />
      <div
        className='container-image'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='carousel-container'>
          <div
            className='carousel-wrapper'
            style={{ animationPlayState: paused ? 'paused' : 'running' }}
          >
            {images.map((image, index) => (
              <div className='image-box' key={index}>
                <img
                  src={`https://raw.githubusercontent.com/TevenV27/server-images/main/projects/technologies/${image}`}
                  alt='technology'
                />
              </div>
            ))}
            {images.map((image, index) => (
              <div className='image-box' key={`duplicate-${index}`}>
                <img
                  className='image-tech'
                  src={`src/images/technologies/${image}`}
                  alt='technology'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
