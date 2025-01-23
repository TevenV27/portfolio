import React, { useState, useEffect } from 'react'
import './../styles/aboutme.css'

export default function AboutMe() {


    const [aboutData, setAboutData] = useState([]);
    const [educationData, setEducationData] = useState([]);
    const [experienceData, setExperienceData] = useState([]);


    useEffect(() => {
        const fechAboutMe = async () => {
            try {
                const response = await fetch('https://portfolio-teven.koyeb.app/api/about');
                const data = await response.json();
                setAboutData(data);
            } catch (error) {
                console.error('Error fetching about data:', error);
            }
        }

        const fetchExperience = async () => {
            try {
                const response = await fetch('https://portfolio-teven.koyeb.app/api/experience');
                const data = await response.json();
                setExperienceData(data);
            } catch (error) {
                console.error('Error fetching education data:', error);
            }
        }
        const fetchEducation = async () => {
            try {
                const response = await fetch('https://portfolio-teven.koyeb.app/api/education');
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
                                <p>
                                    I am a Systems Engineer from Universidad del Valle, with strong analytical skills and a practical approach to apply my knowledge in solving real problems.
                                    I specialize in software development, with a growing interest in improving my skills and knowledge.
                                    Recently contributing in the development of projects that generate a significant impact in the freight transportation sector.
                                </p>
                                <p>
                                    One of my strengths is my ability to work in a team, standing out for my clear communication, willingness to learn and contribute, as well as empathy when collaborating with others.
                                    I like to face challenges that allow me to grow as a professional, learn new technologies, and contribute to the success of projects.
                                </p>
                                <br />
                                <p>
                                    <strong>What I can bring to your team:</strong>
                                </p>
                                <ul>
                                    <li>An analytical approach to solving problems effectively.</li>
                                    <li>Experience in developing intuitive and user-friendly interfaces.</li>
                                    <li>Knowledge in automation and process optimization.</li>
                                    <li>Soft skills that facilitate collaboration and teamwork.</li>
                                </ul>
                                <br />
                                <p>
                                    I am motivated by the opportunity to continue to grow and add value to every project I participate in.
                                    If you are looking for someone committed, eager to learn, and with the attitude to face new challenges, it will be a pleasure to connect with you.
                                </p>
                            </div>
                            {/* <div className='box-image'>
                                <img className='me-image' src="https://raw.githubusercontent.com/TevenV27/server-images/main/projects/teven/me.jpg" alt="me" />
                            </div> */}
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
