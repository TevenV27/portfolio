import React, { useState, useEffect } from 'react';
import './../styles/tecnologies.css';

export default function Tecnologies() {
  const [paused, setPaused] = useState(false);
  const [technologies, setTechnologies] = useState([]); // <== New state

  const handleMouseEnter = () => {
    setPaused(true);
  };

  const handleMouseLeave = () => {
    setPaused(false);
  };

  useEffect(() => {

    const fechTechnologies = async () => {
      try {
        const response = await fetch('https://portfolio-teven-dev.fl0.io/api/technology');
        const data = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    }

    fechTechnologies();

  }, []);


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
            {technologies.map((image, index) => (
              <div className='image-box' key={index}>
                <img
                  src={image.logo}
                  alt={image.name}
                />
              </div>
            ))}
            {technologies.map((image, index) => (
              <div className='image-box' key={`duplicate-${index}`}>
                <img
                  className='image-tech'
                  src={image.logo}
                  alt={image.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
