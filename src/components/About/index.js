import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={"About me".split("")}
                            idx={15}
                        />
                    </h1>
                    <p>I am Java Developer offering 3 years of progressive experience. Good at designing, developing, and maintaining wide range of new and existing web-based products and applications. Clear communicator and effective in a team played. Forward-thinking development professional bringing expertise in Java, HTML, JavaScript and any others programming languages.</p>
                    <p>I like to explore new opportunities and manage to handle difference kind of situation and well communicate with team.</p>
                    <p>Except coding all day long, I will give myself a break to activities such as badminton and jogging.</p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faJava}/>
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5}/>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3}/>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact}/>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare}/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGithub}/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About