import React from 'react'
import './../styles/aboutme.css'
export default function AboutMe() {
    return (
        <>

            <div className='about-box'>
                <h1>&lt; About me /&gt;</h1>
                <br />
                <div className='description'>
                    <div>
                        <p>
                            Hello everyone, my name is Steven Victoria, I live in Colombia and as a software developer and final year student of systems engineering, I am constantly pursuing new challenges that allow me to skilfully apply my skills and knowledge. My involvement in teamwork is distinguished by my proactivity and ability to collaborate, backed by a strong work ethic and sharp analytical skills that I use to efficiently and accurately address problems.
                        </p>
                        <br />
                        <p>
                            I define myself as a perpetual learner, always in search of continuous improvement of my competencies and staying abreast of the latest trends in the field of computer science. My primary goal is to join an innovative team where I can make a significant contribution in the role of a Full-stack Developer or Front-end specialist.
                        </p>
                    </div>
                    <div className='box-image'>
                        <img className='me-image' src="src\images\me.jpg" alt="me" />
                    </div>
                </div>
                <div className='phrase'>
                <i>"A goal without a plan is just a wish"</i>
                </div>
                

            </div>

            <div className='education-box'>
                <h1>&lt; Education /&gt;</h1>
                <br />
                <div>
                    <div className='type-study-box'>
                        <p className='type-study'>Systems engineer at Universidad del Valle - Colombia</p>
                        <p className='study-duration'>2019 - 2024 </p>
                    </div>

                    <p>I am a systems engineer at Universidad del Valle. Currently in 8th semester of a total of 10th semesters.</p>
                </div>
                <br />

                <div>
                    <div className='type-study-box'>
                        <p className='type-study'>English at Pacific College SAS - Colombia</p>
                        <p className='study-duration'>2018 - 2019 </p>
                    </div>

                    <p>I did my English learning in an excellent school, focusing on speaking and listening, obtaining a B1 level of English.</p>
                </div>
                <br />

                <div>
                    <div className='type-study-box'>
                        <p className='type-study'>Technical Bachelor of Business Administration - Tulua Valle del Cauca</p>
                        <p className='study-duration'>2016 - 2017 </p>
                    </div>

                    <p>I completed high school simultaneously with my technical studies in business administration.</p>
                </div>
            </div>
            <br />

            <div className='experience-box'>
                <h1>&lt; Experience /&gt;</h1>
                <br />
                <div>
                    <div className='type-experience-box'>
                        <p className='type-work'>Frontend developer at Global Publicity</p>
                        <p className='work-duration'> 6 months </p>
                    </div>

                    <p>Developed web applications that catered to various clients, with a primary focus on promoting and marketing their businesses effectively.</p>
                    <div className='technologies-box'>
                        <span className='technologies'>Technologies used:</span>

                        <ul className='list-tech'>


                            <li className='list-element'>HTML</li>
                            <li className='list-element'>CSS</li>
                            <li className='list-element'>JavaScript</li>
                            <li className='list-element'>React</li>
                            <li className='list-element'>Node</li>
                            <li className='list-element'>PostgreSQL</li>
                            <li className='list-element'>Bootstrap</li>
                            <li className='list-element'>Tailwind</li>
                            <li className='list-element'>Git</li>

                        </ul>
                    </div>
                </div>
                <br />
                <div>
                    <div className='type-experience-box'>
                        <p className='type-work'>Graphic designer at Global Publicity</p>
                        <p className='work-duration'> 4 months </p>
                    </div>

                    <p>Generate designs for a wide array of advertising products.</p>
                    <div className='technologies-box'>
                        <span className='technologies'>Technologies used:</span>

                        <ul className='list-tech'>


                            <li className='list-element'>Photoshop</li>
                            <li className='list-element'>Illustrator</li>
                            <li className='list-element'>CorelDraw</li>
                            <li className='list-element'>Figma</li>


                        </ul>
                    </div>



                </div>
            </div>

        </>

    )
}
