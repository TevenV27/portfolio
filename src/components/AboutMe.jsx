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
                            As a software developer and final year systems engineering student, I am tirelessly looking for new challenges that allow me to skilfully apply my skills and knowledge. My involvement in teamwork is distinguished by my proactivity and ability to collaborate, backed by a strong work ethic and sharp analytical skills that I use to efficiently and accurately address problems.
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

            </div>

        </>

    )
}
