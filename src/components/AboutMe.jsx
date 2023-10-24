import React, { useState, useEffect } from 'react'
import './../styles/aboutme.css'

export default function AboutMe() {


    const [aboutData, setAboutData] = useState([]);
    const [educationData, setEducationData] = useState([]);
    const [experienceData, setExperienceData] = useState([]);


    useEffect(() => {
        const fechAboutMe = async () => {
            try {
                const response = await fetch('https://portfolio-backend-icl5.onrender.com/api/about');
                const data = await response.json();
                setAboutData(data);
            } catch (error) {
                console.error('Error fetching about data:', error);
            }
        }

        const fetchExperience = async () => {
            try {
                const response = await fetch('https://portfolio-backend-icl5.onrender.com/api/experience');
                const data = await response.json();
                setExperienceData(data);
            } catch (error) {
                console.error('Error fetching education data:', error);
            }
        }
        const fetchEducation = async () => {
            try {
                const response = await fetch('https://portfolio-backend-icl5.onrender.com/api/education');
                const data = await response.json();
                setEducationData(data);
            } catch (error) {
                console.error('Error fetching education data:', error);
            }
        }
        fechAboutMe();
        fetchEducation();
        fetchExperience();
    }, []);


    return (
        <>

            <div className='about-box'>
                <h1>&lt; About me /&gt;</h1>
                <br />
                {aboutData.map((item, index) => (
                    <div key={index}>
                        <div className='description'>
                            <div>
                                <p>{item.description}</p>
                            </div>
                            <div className='box-image'>
                                <img className='me-image' src="https://raw.githubusercontent.com/TevenV27/server-images/main/projects/teven/me.jpg" alt="me" />
                            </div>
                        </div>
                        <div className='phrase'>
                            <i>"{item.pharase}"</i>
                        </div>

                    </div>
                ))}



            </div>

            <div className='education-box'>
                <h1>&lt; Education /&gt;</h1>
                <br />
                {educationData.map((item, index) => (
                    <div key={index}>
                        <div className='type-study-box'>
                            <p className='type-study'>{item.institute}</p>
                            <p className='study-duration'>{item.yearInitiated} - {item.yearGraduated} </p>
                        </div>

                        <p>{item.description}</p>
                        <br />

                    </div>
                ))}
            </div>
            <br />

            <div className='experience-box'>
                <h1>&lt; Experience /&gt;</h1>
                <br />

                {experienceData.map((item, index) => (
                    <div key={index}>
                        <div className='type-experience-box'>
                            <p className='type-work'>{item.title}</p>
                            <p className='work-duration'> {item.duration} </p>
                        </div>
                        <p>{item.description}</p>
                        <div className='technologies-box'>
                            <span className='technologies'>Technologies used:</span>

                            <ul className='list-tech'>

                                {item.technologies.map((tech, techIndex) => (
                                    <li key={techIndex} className='list-element'>{tech}</li>
                                ))}

                            </ul>
                        </div>
                        <br />

                    </div>
                ))}
                
            </div>

        </>

    )
}
