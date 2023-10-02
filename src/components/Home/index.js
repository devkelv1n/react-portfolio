import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['k','e','l','v','i','n']
    // const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.',]
    const jobArray = "Web Developer.".split("")

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>    
                    <span className={`${letterClass} _12`}>i,</span>    
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}> </span>
                    <span className={`${letterClass} _15`}> am</span>
                    <span> </span>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={16}
                    />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={23}
                    />
                    </h1>
                    <h2>Backend Developer / JavaScript Intermediate / Site Supervisor / Customer Service & Account compliance Binance</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>

            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Home