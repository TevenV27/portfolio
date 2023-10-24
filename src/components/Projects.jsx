import React, { useState, useEffect } from 'react';
import './../styles/projects.css';

export default function Projects() {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {

    const fechProjects = async () => {
      try {
        const response = await fetch('https://portfolio-backend-icl5.onrender.com/api/projects');
        const data = await response.json();
        setProjectsData(data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    }

    fechProjects();

  }, []);
  return (
    <div className='project-box'>
      <h1>&lt; Projects /&gt;</h1>
      <br />
      <div className='project-card'>
        {projectsData.map((project, index) => (
          <div key={index} className='project-container'>
            <div className='project-descript'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className='list-tech'>
                {project.technologies.map((technology, techIndex) => (
                  <li key={techIndex} className='list-element'>
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
            <div className='image-container'>
              <div className="image-wrapper">
                <img className='project-img' src={project.image} alt={project.name} />
                <div className="buttons-container">
                  <a href={project.siteUrl} className="button-redirect" target='_blank'>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 120 135"
                      height="45px"
                      width="45px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M39.3,49.1c-2,5.8-3.2,12-3.6,18.5h17.2V49.1H39.3L39.3,49.1z M42.4,41.6h10.5V26.8C48.7,31,45.2,36,42.4,41.6L42.4,41.6z   M34.2,41.6c2.2-5.1,5-9.9,8.3-14.2c-8.5,2.7-15.8,7.8-21.1,14.2H34.2L34.2,41.6z M97,49.1l-15.2,0c1.8,5.8,2.9,12,3.2,18.5h17.6  C102.1,60.9,100.1,54.7,97,49.1L97,49.1z M77.5,67.6c-0.3-6.5-1.6-12.7-3.6-18.5H60.3v18.5H77.5L77.5,67.6z M70.8,41.6  C68.1,36,64.5,31,60.3,26.8v14.8H70.8L70.8,41.6z M79,41.6h12.8c-5.4-6.3-12.7-11.5-21.1-14.2C74,31.7,76.8,36.5,79,41.6L79,41.6z   M16.2,93.6l15.2,0c-1.8-5.8-2.9-12-3.2-18.5H10.6C11.2,81.8,13.1,88.1,16.2,93.6L16.2,93.6z M35.7,75.1c0.3,6.5,1.6,12.7,3.6,18.5  h13.6V75.1H35.7L35.7,75.1z M42.4,101.1c2.8,5.6,6.4,10.6,10.5,14.8v-14.8H42.4L42.4,101.1z M34.2,101.1H21.3  c5.4,6.3,12.7,11.5,21.1,14.2C39.2,111.1,36.4,106.3,34.2,101.1L34.2,101.1z M81.8,93.6l15.2,0c3.1-5.6,5-11.8,5.6-18.5H85  C84.7,81.6,83.6,87.8,81.8,93.6L81.8,93.6z M73.9,93.6c2-5.8,3.2-12,3.6-18.5H60.3v18.5H73.9L73.9,93.6z M70.8,101.1H60.3v14.8  C64.5,111.8,68.1,106.8,70.8,101.1L70.8,101.1z M79,101.1c-2.2,5.1-5,9.9-8.3,14.2c8.5-2.7,15.8-7.8,21.1-14.2H79L79,101.1z   M31.4,49.1l-15.2,0c-3.1,5.6-5,11.9-5.6,18.5h17.6C28.6,61.2,29.7,54.9,31.4,49.1L31.4,49.1z M56.6,125C27,125,3,101,3,71.4  c0-29.6,24-53.6,53.6-53.6c29.6,0,53.6,24,53.6,53.6C110.2,101,86.2,125,56.6,125L56.6,125z" />
                    </svg>
                  </a>
                  <a href={project.repoUrl} className="button-redirect" target='_blank'>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 496 512"
                      height="40px"
                      width="40px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z " />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
